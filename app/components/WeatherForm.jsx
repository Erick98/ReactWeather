var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit:  function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" placeholder="Enter city name" ref="location" />
          <button className="button expanded hollow">Presiona Estas</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
