import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props)=>{
    console.log("Running from demoOutput")
    return <MyParagraph>{props.show ? "This is paragraph to show!!" : "" }</MyParagraph>
}

export default React.memo(DemoOutput);      // React.memo allow to not to reevalue the compnent if
                                            // if the curr props are diffeer from the prev one