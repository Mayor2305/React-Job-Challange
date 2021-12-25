import React, { useState } from 'react';
import App from '../App.js'
import '../index.css';



const Search = ({ getQuery })=>{
    const [text, setText] = useState('');

    const onChange=(q) => {
        setText(q)
        getQuery(q)
    }

    return(
        <form>
            <input type='text' value={text} onChange={(e)=> onChange(e.target.value)} autoFocus/>
        </form>
    )
}




// class NameForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//        const z = this.state.value[0]
//        event.preventDefault();
      
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }
  

export default Search;



