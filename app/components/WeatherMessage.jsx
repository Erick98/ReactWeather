var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return(
    <h3>Lugar {location} a una temperatura de {temp} </h3>
  );
};

module.exports = WeatherMessage;
