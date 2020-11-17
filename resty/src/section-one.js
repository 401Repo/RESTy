import React from 'react';
import Form from './form'
import TextBox from './text-box'

function Section(props){

    return(

        <section>
            <h1>Let take in a path and a method:</h1>
            <Form  />
            <TextBox path={props.path} method={props.method} />
        </section>

    )

}

export default Section;