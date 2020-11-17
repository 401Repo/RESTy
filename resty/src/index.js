import React from 'react';
// from node modules
import ReactDOM from 'react-dom';
import Section from './section-one'
import Header from './header.js';
import Footer from './footer.js'
import './app.scss'


class App extends React.Component{

    constructor(){
        super();
        this.state = {
            path: '',
            method: ''
        }
    }

    // allmost all react components need it
    render(){


        // returns jsx
        return(

        <>
            <Header />

            <Section />
            <Footer />    
        </>
            )
    
    }

}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);