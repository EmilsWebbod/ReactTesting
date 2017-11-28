const React = require('react');
const WeatherCore = require('WeatherCore');

const Weather = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherCore />
      </div>
    )
  }
})

module.exports = Weather;
