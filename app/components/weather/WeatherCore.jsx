const React = require('react');
const WeatherForm = require('./WeatherForm');
const WeatherMessage = require('./WeatherMessage');
const OpenWeahterMap = require('./openWeather');
const ErrorModal = require('ErrorModal');
const WeatherCore = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  componentDidMount: function() {

  },
  componentWillReceiveProps: function(newProps) {
    const location = newProps.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  handleSearch: function(city) {
    const that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      city: undefined,
      degree: undefined
    });

    OpenWeahterMap.getTemp(city).then(temp => {
      that.setState({
        city: city,
        degree: temp,
        isLoading: false
      })
    }, err => {
      this.setState({
        isLoading: false,
        errorMessage: err
      });
    })
  },
  render: function() {
    const {isLoading, degree, city, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Loading...</h3>;
      } else if (degree && city) {
        return <WeatherMessage city={city} degree={degree}/>;
      } else {
        return ''
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return <ErrorModal title="Error with location" message={errorMessage}/>
      } else {
        return ''
      }
    }
    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSubmit={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
})

module.exports = WeatherCore;
