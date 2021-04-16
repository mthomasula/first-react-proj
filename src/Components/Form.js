import React, { useState, useRef, useEffect } from 'react'

const Form = (props) => {

    const [inputValue, setInputValue] = useState("");
    const ref = useRef();

    const onInputChange = (e) => {
        setInputValue(e.target.value);
        
    };

    const onSubmitText = (e) => {
        e.preventDefault();
        props.onSubmitTodo(inputValue) // calls the custom handler by the same name in App.js and ships the input value
        setInputValue("")  //clears the input after form is submitted 
    };


    useEffect( () => {
        ref.current.focus();
    }, );

    return (
        <div className="ui container">
            <div className= "">
                <form className="ui form" onSubmit={onSubmitText}>
                    <input type="text"
                        placeholder={'Add To-Do'}
                        ref={ref}
                        value={inputValue}
                        onChange={onInputChange}
                    />
                    <p></p>
                    <button className="ui primary button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form; 

