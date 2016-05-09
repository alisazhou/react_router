import React from 'react';


export default class Widgets extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className="widgets-page">
        <h1>App: Widgets</h1>
        <ul>
          {this.props.widgetData.map((val, i) => {
            return (<li key={i}>{val}</li>);
          })}
        </ul>
      </div>
    );
  }
}
