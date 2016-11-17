var React = require('react');

var WeatherMessage = ({loc, temp}) => {
  return(
    <h3 className="text-center">It is {temp} in {loc}.</h3>
  )
};

module.exports = WeatherMessage;
