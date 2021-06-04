import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';
const APIKey = 'c9af263f312b307e6997b2985525fe7a'

class App extends Component {
  state = {
    value: "",
    date: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    error: false,
  }
 
  handleCityChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = e => {
    e.preventDefault()
    console.log('Działa');
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`
    
    fetch(API)
      .then(response => {
        if(response.ok) {
          return response
        }
        throw Error("Something went wrong...")
      })
      .then(response => response.json())
      .then(data => {
        const date = new Date().toLocaleString()
        this.setState(prevState => ({
        error: false,
        date: date,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        city: prevState.value,
      }))})
      .catch(error => {
        console.log(error)
        this.setState( state => ({
          error: true,
          city: state.value
        }))
      }
      )

  }
  
  render() {
  return (
    <div className="App">
      <Form value={this.state.value} change={this.handleCityChange} submit={this.handleCitySubmit}/>
      <Result 
        weather = {this.state}
      />
    </div>
    );
  }
}

export default App;
