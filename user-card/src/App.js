import React  from 'react';
import { Reset } from 'styled-reset';
import Axios from 'axios';
import './App.css';
import UserCard from "./components/Usercard";
import FollowersSection from "./components/FollowersSection";
import FindUser from "./components/FindUser";
import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;
  }`;

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
    }
  }

  componentDidMount () {

    const getUser = () => {
      Axios.get("https://api.github.com/users/Aaroneld")
      .then(response => {
        let data = response.data;
        this.setState({user: data});
        console.log(data);
      })
      .catch(error => { 
        console.log(error)
      })
    };

    const getFollowers = () => {
      Axios.get("https://api.github.com/users/Aaroneld/followers")
      .then(response => {
        let data = response.data;
        this.setState({followers: data});
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      })};
    
    getUser();
    getFollowers();
  }

 submitHandler = event => {

  const getUser = (user) => {
    Axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
      let data = response.data;
      this.setState({user: data});
      console.log(data);
    })
    .catch(error => { 
      console.log(error)
    })
  };

  const getFollowers = (user) => {
    Axios.get(`https://api.github.com/users/${user}/followers`)
    .then(response => {
      let data = response.data;
      this.setState({followers: data});
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    })};


      event.preventDefault();
      getUser(event.target[0].value);
      getFollowers(event.target[0].value);
      console.log(event.target[0].value);
  }



render () {  return (
      <div className="App">
        <Reset />
        <GlobalStyles />
        <FindUser submit={this.submitHandler}/>
        <UserCard user={this.state.user} />
        <FollowersSection followers={this.state.followers} />
      
      </div>
    );
  }
}

export default App;
