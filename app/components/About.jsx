var React = require('react');

var About = (props) => { 
  return( 
    <div>
      <h1 className="text-center">About Component</h1> 
      <p>This is a weather application build on ReactJS.</p>
      <p>Here are the tools I used:</p>

      <ul>
        <li>
          <a href="https://facebook.github.io/react/">ReactJS</a> - This was the Javascript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org/">Open Weather Map</a> - I used Open Weather Map to search weather by city name.
        </li>
      </ul>
    </div>
    )
};

module.exports = About;
