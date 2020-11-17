import React from 'react';
// from node modules


class Form extends React.Component {

    constructor(){
        super();
        this.state = {
            url: '',
            method: '',
        }
    }

    handleClick = async (e) => {
        const method = e.target.value;
        await this.setState({method});
        console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render(){
    return (

    <div class='form-div'>
    <form onSubmit={this.handleSubmit}>
    <fieldset>
    <h2>The method: {this.state.method}</h2>
    <div class="form-group">
    <input type="text" id="path" class="form-control" placeholder="home/etc/"  />
    <button value='GET' onClick={this.handleClick} class="btn btn-primary form-btn">Get</button>
    <button value='POST' onClick={this.handleClick} class="btn btn-primary form-btn">Post</button>
    <button value='PUT' onClick={this.handleClick} class="btn btn-primary form-btn">Put</button>
    <button value='DELETE' onClick={this.handleClick} class="btn btn-primary form-btn">Delete</button>
    </div>
    </fieldset>
    </form>
    </div>
        )
    }
}

export default Form;