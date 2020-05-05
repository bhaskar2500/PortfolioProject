import React from 'react';
import { Panel } from 'primereact/panel';
import { Editor } from 'primereact/editor';
import { getResumeData } from '../../apis/ResumeService';
import text  from './text.js'; // Relative path to your File

class Resume extends React.Component {
    constructor() {
        super();
        this.state = {
            resumeHtmlValue: ""
        }
    }
    componentDidMount() {
        // getResumeData().then((data) => {
        //     data.json().then((json) => {
        //         this.setState({ resumeHtmlValue: json.data });
        //     })
        // })
        this.setState({resumeHtmlValue:text});
        // storeResumeData()
        // onTextChange={(e) => this.resumeTextChange()}
    }

    render() {
        return (
            <div>
                <div>
                    <Panel header="Resume">
                        <Editor readonly={true} style={{ height: '1000px' }} value={this.state.resumeHtmlValue} >
                        </Editor>
                    </Panel>
                </div>
            </div>
        )
    }

}
export default Resume