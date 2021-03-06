const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const Main = require('Main');
const WeatherCore = require('WeatherCore');
const About = require('About');
const Examples = require('Examples');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!sass!applicationStyles');
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Router path="examples" component={Examples} />
    <IndexRoute component={WeatherCore} />
    </Route>
  </Router>,
  document.getElementById('app')
);
