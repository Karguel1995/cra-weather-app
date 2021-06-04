import React from 'react';
const Form = (props) => {
    return ( 
        <form onSubmit={props.submit}>
            <input type="text" placeholder="Enter city" value={props.value} onChange={props.change}/>
            <button>Search City</button>

        </form>
     );
}
 
export default Form;