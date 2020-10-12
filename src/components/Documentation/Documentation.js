import React from 'react';
import notesData from './notes.json';
import styles from './style.module.scss';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { Editor } from 'primereact/editor';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import Pagination from '../Pagination/Pagination';



class Documentation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: ''
            , displayCreateDialog: false
            , noteContent: ""
            , noteTitle: ""
            ,notesData:notesData
        }
    }
    componentDidMount(){
        this.onPaginationClick(0,5);
    }

    onEditClick(id) {
        let note = this.state.notesData.find(i => i.id === id);
        this.setState({ displayCreateDialog: true, noteContent: note.content, noteTitle: note.title });

    }
    onPaginationClick(PAGE_NUM,MAX_COUNT){
        this.setState({notesData: this.state.notesData.slice(PAGE_NUM,MAX_COUNT)});
    }
    onCreateClick(currentComponent) {
        // console.log(this)
        currentComponent.setState({noteContent:'',noteTitle:''})
        console.log(currentComponent)
        currentComponent.setState({ displayCreateDialog: true });
    }
    onNoteSave() {
        let content = this.state.noteContent;
        let title = this.state.noteTitle;
        let id = parseInt(this.state.notesData[this.state.notesData.length - 1].id) + 1;
        this.setState({notesData: notesData.push({ content: content, title: title, id: id })});
        this.setState({ displayCreateDialog: false });
    }
    onHide() {
        this.setState({
            'displayCreateDialog': false
        });
    }
    render() {

        const header = <span> <i className="fas fa-sticky-note" ></i> </span>;

        return (
        <div className={styles.container}>
            <Panel header="TODO notes">
                {
                    this.state.notesData.map((note) => {
                        console.log(note);
                        const footer = <span>
                            <Button label="Edit"  icon="pi pi-check" onClick={() => this.onEditClick(note.id)} />
                            <span className = {styles.pullLeft}> </span>
                            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" />
                        </span>;

                        return (
                            < Card title={`Note ${note.id} : ${note.title}`}  footer={footer} header={header} activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                                {note.content.split(' ').slice(0, 50).join(' ')}...
                            </Card>
                        )

                    })
                }
                <br />
                <Dialog header="Create a note" modal={true} visible={this.state.displayCreateDialog} style={{ width: '50vw' }} onHide={() => this.onHide()} >
                    <div>
                        <span className="p-float-label">
                            <InputText onChange={(e) => this.setState({ noteTitle: e.target.value })} />
                            <label htmlFor="in">Title</label>
                        </span>
                        <br />

                        <Editor style={{ height: '200px' }} value={this.state.noteContent} onTextChange={(e) => this.setState({ noteContent: e.textValue })}>
                        </Editor>

                    </div>
                    <Button label="Save" icon="pi pi-check" style={{ marginRight: '.25em' }} onClick={() => this.onNoteSave()} />
                    <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" onClick={() => this.setState({ displayCreateDialog: false })} />
                </Dialog>

                <Button label="Add a Note + " className="fas fa-sticky-note" onClick={() => this.onCreateClick(this)} ></Button>
            </Panel>
        <Pagination  handleClick={this.onPaginationClick.bind(this)} data={this.state.notesData}></Pagination>
        </div >
        )
    }

}


export default Documentation 
