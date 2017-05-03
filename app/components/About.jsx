var React = require('react');

var About = (props) => {
  return(
    <div>
      <h1 className="text-left">About</h1>
      <p>
        This is the weather appliation built on react. I have built this
        following the complete react web app developer course. I have learned
        a lot of following this tutorial.
      </p>
      <p>Things I learned:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> -The javascript
          framework.
        </li>
        <li>
          <a href="http://openweathermap.org">Fetching api</a> - I learned to
          fetch api from website (in this case open weather map) and utilize
          in this web application.
        </li>
        <li>
          <a href="https://www.heroku.com">Heroku</a> - I learned to deploy the
          application in the web using this cloud application platform.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
