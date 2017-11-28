const React = require('react');
const WeatherForm = require('./WeatherForm');
const WeatherMessage = require('./WeatherMessage');
const OpenWeahterMap = require('./openWeather');
const WeatherCore = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleFormSubmit: function(city) {
    const that = this;

    this.setState({isLoading: true});

    OpenWeahterMap.getTemp(city).then(temp => {
      that.setState({
        city: city,
        degree: temp,
        isLoading: false
      })
    }, err => {
      this.setState({isLoading: false});
      alert(err);
    })
  },
  render: function() {
    const {isLoading, degree, city} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Loading...</h3>;
      } else if (degree && city) {
        return <WeatherMessage city={city} degree={degree}/>;
      } else {
        return ''
      }
    }
    return (
      <div>
        <h2>Get Weather</h2>
        <WeatherForm onSubmit={this.handleFormSubmit}/>
        {renderMessage()}
      </div>
    )
  }
})

module.exports = WeatherCore;
