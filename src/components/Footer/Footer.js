import React from 'react';
import './Footer.css';


class Footer extends React.Component {

    render() {


        var style = {
            backgroundColor:"rgb(65, 65, 65)",
            borderTop: "1px solid #E7E7E7",
            textAlign: "center",
            padding: "20px",
            position: "fixed",
            left: "0",
            bottom: "0",
            height: "60px",
            width: "100%",
            color:"white"
        }

        var phantom = {
            display: 'block',
            padding: '20px',
            height: '60px',
            width: '100%',
        }
        return <div>
            <div style={phantom} />
            <div style={style}>

                Copyright @Bhaskar Kaushal
            </div>
        </div>
    }

}


export { Footer }
