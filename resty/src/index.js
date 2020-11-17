import React from 'react';
// from node modules
import ReactDOM from 'react-dom';
import Section from './section-one'
import Header from './header.js';
import Footer from './footer.js'
import './app.scss'


class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            path: 'test Path',
            method: 'test Method'
        }
    }

    handler() {
        this.setState({
          path: 'some value'
        })
      }

    // allmost all react components need it
    render(){

        const path = this.state.path;
        // returns jsx
        return(

        <>
            <Header />

            <Section handler = {this.handler} path={this.state.path} method={this.state.method}/>
            <Footer />    
        </>
            )
    
    }

}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);