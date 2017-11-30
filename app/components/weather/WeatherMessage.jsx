const React = require('react');

const WeatherMessage = ({degree, city}) => (
  <h3 className="text-center">Its {degree} in {city}</h3>
)

module.exports = WeatherMessage;
