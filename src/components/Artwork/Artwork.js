
import React from "react";
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import '../Artwork/Artwork.scss';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';

class Artwork extends React.Component {
    constructor() {
        super();

        this.state = {
            images: null,
            activeIndex: 0,
            showThumbnails: false,
            isAutoPlayActive: true,
            isPreviewFullScreen: false
        };

        // this.galleriaService = new GalleriaService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.previewTemplate = this.previewTemplate.bind(this);
        this.onThumbnailChange = this.onThumbnailChange.bind(this);
        this.onItemChange = this.onItemChange.bind(this);
        this.onFullScreenChange = this.onFullScreenChange.bind(this);
    }
    importAll(r) {
        return r.keys().map(r);
    }

    componentDidMount() {
        // ArtworkService.getBase64Images().then(data => {
        // console.log('MOUNTED')
        // data.json(data).then((json) => {
        //     console.log(json, '--------')

        //     this.setState({ images: json.images })
        // })
        // });
        const images = this.importAll(require.context('./ArtworkImages', false, /\.(png|jpe?g|svg|jpg)$/));
        console.log(images);
        var data = []
        images.forEach((filePath,i) => {
            data.push(
                {
                    "previewImageSrc": filePath,
                    "thumbnailImageSrc": filePath,
                    "alt": "Description for Image "+(i+1).toString(),
                    "title": "Title "+(i+1).toString()
                }
            )
        })
        this.setState({ images: data })
        this.bindDocumentListeners();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isAutoPlayActive !== this.galleria.isAutoPlayActive()) {
            this.setState({
                isAutoPlayActive: this.galleria.isAutoPlayActive()
            });
        }
    }

    componentWillUnmount() {
        this.unbindDocumentListeners();
    }

    onThumbnailChange(event) {
        this.setState({ activeIndex: event.index });
    }

    onItemChange(event) {
        this.setState({ activeIndex: event.index });
    }

    toggleFullScreen() {
        if (this.state.isPreviewFullScreen) {
            this.closePreviewFullScreen();
        }
        else {
            this.openPreviewFullScreen();
        }
    }

    onFullScreenChange() {
        this.setState({ isPreviewFullScreen: !this.state.isPreviewFullScreen });
    }

    openPreviewFullScreen() {
        let elem = ReactDOM.findDOMNode(this.galleria);
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        }
        else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }

    closePreviewFullScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

    bindDocumentListeners() {
        document.addEventListener("fullscreenchange", this.onFullScreenChange);
        document.addEventListener("mozfullscreenchange", this.onFullScreenChange);
        document.addEventListener("webkitfullscreenchange", this.onFullScreenChange);
        document.addEventListener("msfullscreenchange", this.onFullScreenChange);
    }

    unbindDocumentListeners() {
        document.removeEventListener("fullscreenchange", this.onFullScreenChange);
        document.removeEventListener("mozfullscreenchange", this.onFullScreenChange);
        document.removeEventListener("webkitfullscreenchange", this.onFullScreenChange);
        document.removeEventListener("msfullscreenchange", this.onFullScreenChange);
    }

    itemTemplate(item) {
        return (
            <div className="p-grid p-nogutter p-justify-center">
                <img src={`${item.thumbnailImageSrc}`} alt={item.alt} style={{ display: 'block' }} />
            </div>
        );
    }

    previewTemplate(item) {
        if (this.state.isPreviewFullScreen) {
            return <img src={`${item.previewImageSrc}`} alt={item.alt} />
        }

        return <img src={`${item.previewImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    renderFooter() {
        let autoPlayClassName = classNames('pi', {
            'pi-play': !this.state.isAutoPlayActive,
            'pi-pause': this.state.isAutoPlayActive
        });

        let fullScreenClassName = classNames('pi', {
            'pi-window-maximize': !this.state.isPreviewFullScreen,
            'pi-window-minimize': this.state.isPreviewFullScreen
        });

        return (
            <div className="custom-galleria-footer">
                <Button icon="pi pi-list" onClick={() => this.setState({ showThumbnails: !this.state.showThumbnails })} />
                <Button icon={autoPlayClassName} onClick={() => {
                    if (!this.state.isAutoPlayActive) {
                        this.galleria.startSlideShow();
                        this.setState({ isAutoPlayActive: true });
                    }
                    else {
                        this.galleria.stopSlideShow();
                        this.setState({ isAutoPlayActive: false });
                    }
                }} />
                {
                    this.state.images && (
                        <span>
                            <span>{this.state.activeIndex + 1}/{this.state.images.length}</span>
                            <span className="title">{this.state.images[this.state.activeIndex].title}</span>
                            <span>{this.state.images[this.state.activeIndex].alt}</span>
                        </span>
                    )
                }
                <Button icon={fullScreenClassName} onClick={() => this.toggleFullScreen()} />
            </div>
        );
    }

    render() {
        const footer = this.renderFooter();
        const galleriaClassName = classNames('custom-galleria', {
            'preview-fullscreen': this.state.isPreviewFullScreen
        });

        return (
            <div className="galleria-demo">
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Photograph Work</h1>
                        <p>Some of the photgraph samples .</p>

                        {/* <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("galleria")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer> */}
                    </div>
                </div>

                <div className="content-section implementation">
                    <Galleria ref={(el) => this.galleria = el} value={this.state.images} activeIndex={this.state.activeIndex} onItemChange={this.onItemChange}
                        showThumbnails={this.state.showThumbnails} showPreviewNavButtons={true} showNavButtonsOnPreviewHover={true}
                        numVisible={5} circular={true} autoPlay={true} transitionInterval={3000}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate} footer={footer}
                        style={{ maxWidth: '520px' }} className={galleriaClassName} />
                </div>
            </div>
        );
    }
}
export default Artwork