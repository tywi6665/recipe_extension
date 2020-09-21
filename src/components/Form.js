import React from 'react';

const Form = () => {
    return (
        <form className="form">
            <div>
                <label>Title</label>
                <input type="text" />
            </div>
            <div>
                <label>Description</label>
                <input type="text" />
            </div>
            <button>Submit</button>
        </form>
    );
}

export default Form;