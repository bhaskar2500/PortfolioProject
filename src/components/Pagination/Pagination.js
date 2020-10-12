import React, {useState} from 'react'

function Pagination(props){
        const [notesData]= useState(props.data);
        const PAGE_NUM = 1;
        const MAX_COUNT = 5;
        const paginationLength = parseInt(notesData.length/MAX_COUNT)+1;
        return (
        <div>
            {
                Array.from(Array(paginationLength)).map((val,idx) => {
                        return <button onClick={(event)=>{
                            props.handleClick(PAGE_NUM*(idx+1),MAX_COUNT);
                        }} >{idx+1}</button>
                })
            }    
        </div>
        )
}

export default Pagination;