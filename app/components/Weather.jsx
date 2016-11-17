var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (loc) {
    var that = this;
    this.setState({isLoading: true});
    
    OpenWeatherMap.getTemp(loc).then( function (temp) {
      that.setState({
        loc: loc,
        temp: temp,
        isLoading: false
      });
    } , function (errorMessage) {
      that.setState({ isLoading: false });
        alert(errorMessage);
    });
  },
  render: function () {
    var {isLoading, loc, temp} = this.state;
      
    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather..</h3>;
      } else if( temp && loc ){
        return <WeatherMessage temp={temp} loc={loc}/>;
      }
    }

    return(
      <div>
        <h1 className="text-center">Weather Component</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
