const React = require('react');

const About = props => (
<div>
  <h1 className="text-center">About</h1>
  <p>Thisi is a weather application built on React. I have built this for the Complete React App Developer Course</p>
  <p>
    Here are some of the tools I used:
  </p>
  <ul>
    <li>
      <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used
    </li>
    <li>
      <a href="http://openweatherapp.org">Open Weather Map</a> - I used Open Weather map to search for weather data by city name
    </li>
  </ul>
</div>
)

module.exports = About;
