import React from 'react';

import Widgets from './widgets';


export default class WidgetContainer extends React.Component {
  constructor () {
    super();
    this.state = {
      widgetData: [ 'one', 'two', 'three' ],
    };
  }

  render () {
    return (<Widgets widgetData={this.state.widgetData} />);
  }
}
