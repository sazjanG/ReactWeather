var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-left page-title">Examples</h1>
      <p>Here are few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Melbourne'>Melborne</Link>
        </li>
        <li>
          <Link to='/?location=Kathmandu'>Kathmandu, Nepal</Link>
        </li>
      </ol>
    </div>
  )
};
module.exports = Examples;
