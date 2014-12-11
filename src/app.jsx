'use strict';

var React = require('react');

var boxStyle = {
  height: '100px',
  width: '100px'
};

var Box = React.createClass({
  // getInitialState: function(){
  //   return {
  //     value: '-'
  //   }
  // },
  // handleClick: function() {
  //   var oldValue = this.state.value;
  //   var newValue = oldValue === 'X' ? 'O': 'X';
  //   this.setState({
  //     value: newValue
  //   });
  // },
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
  handleClick: function() {
    this.props.handleClick(this.props.rowIndex);
  },
  render: function(){
    return (
      <button style={boxStyle}
      onClick={this.handleClick}>
        {this.props.value}
      </button>
    );
  }
});

var Row = React.createClass({
  getInitialState: function(){
    return {
      clicks: 0,
      rowValues: ['-', '-', '-']
    };
  },
  handleClick: function(index) {
    var newValue = 'X';
    if (this.state.clicks % 2 === 0) {
      newValue = 'O';
    }
    var rowValues = this.state.rowValues;
    rowValues[index] = newValue;
    this.setState({
      rowValues: rowValues,
      clicks: this.state.clicks + 1
    });
  },
  render: function(){
    var boxes = this.state.rowValues.map(function(value, index){
      return (
        <Box value={value} key={index} rowIndex={index} handleClick={this.handleClick}/>
      );
    }.bind(this));
    return (
      <div>
        {boxes}
      </div>
    );
  }
})

React.render(<Row/>, document.body);
// React.render(<Box style={boxStyle}/>, document.body);