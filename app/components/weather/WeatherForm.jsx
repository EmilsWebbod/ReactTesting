const React = require('react');

const WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    const cityRef = this.refs.city;
    const city = cityRef.value;
    if (typeof city === 'string' && city.length > 0) {
      cityRef.value = '';
      this.props.onSubmit(city)
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="search" ref="city" placeholder="City name" />
        <input type="submit" className="button expanded hollow" value="Get Weather"/>
      </form>
    )
  }
})

module.exports = WeatherForm;
