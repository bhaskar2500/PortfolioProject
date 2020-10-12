import React, { Component, useState } from 'react'

function Pagination(props){
        const [notesData,setNotesData]= useState(props.data);
        console.log(props,'--------');
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