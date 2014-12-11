'use strict';

var React = require('react');

var boxStyle = {
  height: '100px',
  width: '100px'
};

var Box = React.createClass({
  getInitialState: function(){
    return {
      value: 'X'
    }
  },
  handleClick: function() {
    var oldValue = this.state.value;
    var newValue = oldValue === 'X' ? 'O': 'X';
    this.setState({
      value: newValue
    });
  },


  // componentWillMount: function(){
  //   var _this = this;
  //   this.timer = setInterval(function(){
  //     var oldValue = _this.state.value;
  //     var newValue = oldValue === 'X' ? 'O': 'X';
  //     _this.setState({
  //       value: newValue
  //     });
  //   }, 300);
  // },
  // componentWillUnmount: function(){
  //   clearInterval(this.timer);
  // },
  render: function(){
    return (
      <button style={this.props.style} onClick={this.handleClick}>{this.state.value}</button>
    )
  }
});


React.render(<Box style={boxStyle}/>, document.body);