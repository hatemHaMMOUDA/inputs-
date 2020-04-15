import React, { Component } from 'react'

export class Test extends Component {
constructor(props) {
super(props)

this.state = {

}
}

getValueFromInputText=(e)=>{ 
this.setState({[e.target.name]:e.target.value})
}

render() {
return (
<div className="d-flex flex-column  " >
<input  name="Email" style={{ width: 200 }} type="text" onChange={this.getValueFromInputText} />
<input name="age" style={{ width: 200 }} type="text" onChange={this.getValueFromInputText} /> 
<div className="d-flex flex-column">    
<div className="my-1">Email :  <strong>{this.state.Email}</strong></div>
<div className="my-1"> Age: <strong>{this.state.age}</strong></div> 
</div>
</div>
)
}
}

export default Test;
