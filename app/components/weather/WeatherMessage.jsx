const React = require('react');

const WeatherMessage = ({degree, city}) => (
  <div>
    <p>Its {degree} in {city}</p>
  </div>
)

module.exports = WeatherMessage;
