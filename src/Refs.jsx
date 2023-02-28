import React, { Component ,createRef} from 'react'

export default class  extends Component {
    constructor()
    {
        super()

        this.state ={userName:"mokshi"}
        this.btnref = createRef()
    }

    changeName=()=>
    {
      this.setState({userName:"Srinivas"})
    }
 

  render() {
    return (
      <div>
        <h1>{this.state.userName}</h1>
        <button ref={this.btnref} onClick={this.changeName}>Submit</button>
      </div>
    )
  }
}
