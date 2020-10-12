import React from 'react';
import { Panel } from 'primereact/panel';
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import { Suspense } from 'react'
import useFetch from 'fetch-suspense'
import Loading from '../Loading/Loading'
// import { getResumeData } from '../../apis/ResumeService';
import text from './text.js'; // Relative path to your File
import './Resume.css';
import ResumePDF from  './Resume.docx';

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
        this.setState({ resumeHtmlValue: text });
        // storeResumeData()
        // onTextChange={(e) => this.resumeTextChange()}
    }

    onResumeEdit(e) {
        // console.log(e.htmlValue)

    }

    render() {
        // const data= useFetch("https://jsonplaceholder.typicode.com/todos/");
        return (
            <div>
                <div>
                    <br></br>
                    <br></br>
                    <Panel header="Resume">
                        <a href= {ResumePDF} target="_blank" rel="noopener noreferrer" download>
                            <Button className="fas fa-download" label="Download File"  title="Download Resume">
                                {/* <i /> */}
                        </Button>
                        </a>
                        <br></br>
                        <br></br>

                        <Editor readonly={true} style={{ height: '1000px' }} onTextChange={this.onResumeEdit} value={this.state.resumeHtmlValue} >
                        </Editor>
                    </Panel>
                </div>
            </div>
        )
    }

}
function ResumeContainer(props) {
    return (
      <Suspense fallback={<Loading />}>
        <Resume {...props} />
      </Suspense>
    )
}
export default ResumeContainer