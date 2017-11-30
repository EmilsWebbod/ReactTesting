const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    alert('Not yet wired up');
  },
  render: function () {
    return (
      <nav className="top-bar">
        <div className="top-bar-left">
          <ul className='menu'>
            <li className="menu-text">React Weahter App</li>
            <li><IndexLink to="/" >Get Weather</IndexLink></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="examples">Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" placeholder="Search weahter" /></li>
            <li><input type="submit" className="button" value="Get Weather" /></li>
            </ul>
          </form>
        </div>
      </nav>
    )
  }
})

module.exports = Nav;
