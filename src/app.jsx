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
  render: function(){
    return (
      <button style={boxStyle}>
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
  render: function(){
    var boxes = this.state.rowValues.map(function(value, index){
      return (
        <Box value={value} key={index} rowIndex={index} />
      );
    });
    return (
      <div>
        {boxes}
      </div>
    );
  }
})

React.render(<Row/>, document.body);
// React.render(<Box style={boxStyle}/>, document.body);