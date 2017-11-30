const React = require('react');
const Nav = require('Nav');

const Main = props => (
   <div>
    <Nav />
    <main className="row">
      <div className="columns medium-6 large-4 small-centered">
        {props.children}
      </div>
    </main>
   </div>
);

module.exports = Main;
