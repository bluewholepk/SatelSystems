// class Component

import React, { Component} from 'react'

export default class Components extends Component {
    constructor(){
        super();
        this.state = {
            name : "Prashant",
            password : "hello"
        }
    }
  render() {
    return (
      <div>Hii , I am {this.state.name}!</div>
    )
  }
}

//Functional component

//rfc
// import React, {  useState  } from 'react'

// export default function Component() {
//     const [name,setName] = useState("Hii");
//     function changeName(){
//         setName("hello");
//     }
//   return (
//     <div>component {name}
// <button onClick={changeName}> changename</button>
//     </div>
//   )
// }
