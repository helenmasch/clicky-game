import React,{Component} from 'react';
import './App.css';
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import friends from './bravoimages.json'
import Card from './components/BravoCard'

class App extends Component {
state={
  friends: friends,
  score: 0,
  highscore: 0
}

  render(){
    return (
      <Wrapper>
          <Header   score={this.state.score}  highscore={this.state.highscore}   />
          <Card  friends={this.state.friends} />
      </Wrapper>
    );
  }

  
}

export default App;





/*
React={
Component
}
React.Component
-------destructing ----
Component

----------

obj={
  name:"phil",
  email:"ploy3_98@yahoo.com"
}

obj.name
obj.email

---destructing---
const {name, email}=obj

name
email

*/
// calling backing the wrapper and header once its finished


