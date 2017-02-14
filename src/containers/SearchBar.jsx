import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FetchWeather from '../actions/FetchWeatherAction';
import { getWeather } from '../actions/FetchWeatherAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: ''
    }
    this.changeZipCode = this.changeZipCode.bind(this)
    this.getWeather = this.getWeather.bind(this)
  }

  getWeather(event){
    event.preventDefault();
    console.log(this.state.zipCode)
  }

  changeZipCode(event){
    console.log(event.target.value)
    this.setState({
      zipCode: event.target.value
    })
  }


  render() {
    return (
      <form onSubmit={this.getWeather}>
        <input placeholder="Enter Zip Code" value={this.state.zipCode} onChange={this.changeZipCode} />
        <button type="submit" className="btn btn-primary">Get the Weather</button>
      </form>
    );
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({FetchWeather}, dispatch)
}

// export default connect(null, mapDispatchToProps)(SearchBar);
export default SearchBar;
