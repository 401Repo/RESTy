import React from 'react';
// from node modules


function Form() {

    return (

    <div class='form-div'>
    <form>
    <fieldset>
    <div class="form-group">

    <input type="text" id="path" class="form-control" placeholder="home/etc/" />
    </div>

    <button type="submit" class="btn btn-primary form-btn">Get</button>
    <button type="submit" class="btn btn-primary form-btn">Post</button>
    <button type="submit" class="btn btn-primary form-btn">Put</button>
    <button type="submit" class="btn btn-primary form-btn">Delete</button>

    </fieldset>
    </form>
    </div>

)

}

export default Form;