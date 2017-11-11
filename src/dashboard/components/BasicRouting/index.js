import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';


export default class BasicRouting extends Component {
  render() {
    return (
      <div>
      <h1>BasicRouting</h1>
      <p>With the help of "Match" Component we can specify the Component we want to render for a particular pattern of the App location/window.pathname.</p>
      <p>Select a level from Left Navigation to view the content, also notice the change in URL.</p>
      <div className="rightContent">
      	<p>Second Level Content will appear here:</p>
      </div>
      </div>
    )
  }
}
