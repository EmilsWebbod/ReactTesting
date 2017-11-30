const React = require('react');
const {Link} = require('react-router');

const Examples = props => (
  <div>
    <h1 className="text-center">Examples</h1>
  <p>Here are a few examples locations to try out:</p>
  <ol>
    <li><Link to="/?location=Oslo">Oslo, Norway</Link></li>
    <li><Link to="/?location=Rio">Rio, Brazil</Link></li>
  </ol>
  </div>
)

module.exports = Examples;
