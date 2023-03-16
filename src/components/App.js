import React from 'react'
import '../styles/App.css';

class App extends React.Component{
  
  handleClick(){
    if(this.state.flag){
      this.setState({count: this.state.count + 2,flag:false});
    }
    else this.setState({flag:true});
  }
  constructor(props){
    super(props)
    this.state = {count:0,flag:false}
    this.handleClick = this.handleClick.bind(this)
  }


  render(){
    {!this.state.flag && console.log(`Rendering with count:-${this.state.count}`)};
    return(
      <div>
        <span id="count">{this.state.count}</span>
        <button id="incr-btn" onClick={this.handleClick}>Increment</button>
      </div>
    )

  }
}

export default App;
