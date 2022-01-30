import React from 'react';

const MyParagraph = (props)=>{
    console.log("Running from MyParagraph")
    return <p>{props.children}</p>
}

export default MyParagraph;