import React from 'react';
import styles from '../Projects/style.module.scss'
import { Panel } from 'primereact/panel';
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { ProgressSpinner } from 'primereact/progressspinner';

import { getSummarizedData } from '../../apis/ResumeService';

class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            isSummarized: true,
            summarizedText: "",
            textToSummarize: "",
            activeItem: "",
            visible: false,
        }
    }

    OnSummarizeClick(data) {
        this.setState({ isSummarized: false });
        getSummarizedData(data).then((res) => {
            res.json().then(json => {
                this.setState({
                    summarizedText: json.summarizedText
                    , visible: true
                    , isSummarized: true
                })
            })
        }).catch((ex) => {
            this.setState({
                summarizedText: "OOPS ! Something went wrong .Please try again!!"
                , visible: false
                , isSummarized: false
            })
        })
    }

    render() {
        console.log(styles,'---->');
        return (
            <div>
                <div className={styles.container}>
                    <Panel header="Project 1 - Basic Summarization of text">
                        <div>
                            {this.state.isSummarized ? null : <ProgressSpinner />}

                        </div>
                        <Editor style={{ height: '320px' }} onTextChange={(e) => this.setState({textToSummarize : e.textValue})} value={this.state.text} >
                        </Editor>
                    </Panel>
                </div>
                <div>
                    <Button label="Summarize Text" className="btnSummary" onClick={(e) => this.OnSummarizeClick(this.state.textToSummarize)} ></Button>

                </div>
                <div>
                    < Dialog header="Summarized Text" visible={this.state.visible} style={{ width: '50vw' }} modal={true} onHide={() => this.setState({ visible: false })} >
                        {this.state.summarizedText}
                    </Dialog>
                </div>
            </div>
        )
    }


}

export default Projects 