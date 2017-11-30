const React = require('react');
const WeatherCore = require('WeatherCore');

const Weather = React.createClass({
  render: function() {
    return (
      <div>
        <WeatherCore />
      </div>
    )
  }
})

module.exports = Weather;
