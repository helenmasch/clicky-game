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
  highscore: 0,
};

// adding on click function

//   this.onClick = this.onClick.bind(this);
// }
 

friendClicked = userClickId => {
 const originalFriends = friends

const newFriends = this.state.friends.map(friend=>{
    if(userClickId===friend.id){
            if(friend.clicked===false){
              friend.clicked=true
                 this.setState({
                   score: this.state.score + 1
                    
                 })

                 if(this.state.score>=this.state.highscore){
                   this.setState({
                     highscore: this.state.highscore + 1 
                   })
                 }
            }
            else{
              this.setState({
                score: 0
              })
            }
    }

  return friend
})

newFriends.sort(()=>Math.random() - 0.5)
this.setState({
  friends: newFriends
})

 if(this.state.score===0){
 // originalFriends.sort(()=>Math.random() - 0.5)
   this.setState({
     friends: originalFriends
   })
 } 
 
 

// filtering this.state.friends for friends with an id not equal to the id being removed
// const friends = this.state.friends.filter(friends => friends.id !==id);

// set this.state.friends equal to the new friends array
// this.setState({ friends });
// }

// if (friendClicked) {

// for loop to randomly match onclick function
  // for (let i = 0; i < array.length; i++) {
  // const element = array[i];
// }  

// increment the score by 1
// increaseScore = () => {
  //this.setState({ count: this.state.count + 1 });
}

  render(){
    return (
      <Wrapper>
          <Header  score={this.state.score}  highscore={this.state.highscore} />
          Click any image and don't match the same image unless you lose!
          <Card  friends={this.state.friends} friendClicked={this.friendClicked} />
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


