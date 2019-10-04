import React from 'react';
import axios from 'axios';
import PlayerCards from './PlayerCards'
import Form from './Form'

class Players extends React.Component{
  constructor(){
    super();
    this.state = {
      playerInfo: []
    }
  }

  componentDidMount(){
    axios
    .get(`http://localhost:5000/api/players`)
    .then(response => {
      this.setState({
        playerInfo: response.data
      })
    })
    .catch(error => {
      console.log('Error', error)
    })
  }


  render(){
    return(
      <div>
        <h1>Women's World Cup 2019 Players</h1>
        <Form />
        {
          this.state.playerInfo.map(item => {
            return(
            <PlayerCards 
            key={item.id}
            name={item.name}
            country={item.country}
            />
            )
          })
        }
      </div>
    )
  }
}

export default Players