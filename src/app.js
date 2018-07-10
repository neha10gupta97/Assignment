import React, { Component } from 'react';

export default class App extends Component {

  componentDidMount(){
    $('.msg').html('Hello World :)');
  }

  render() {
    return (
      <div className="msg">React simple starter</div>
    );
  }
}
