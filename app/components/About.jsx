var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About Component</h1>
      <p>About Paragraph</p>
      <p>
        Tools:
      </p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a>-- JavaScript Framework</li>
        <li><a href="https://openweathermap.org">Open Weather Map</a>-- API</li>
      </ul>
    </div>
  )
};

module.exports = About;
