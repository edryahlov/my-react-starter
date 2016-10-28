var data = [
  {name: 'test1', age: 11},
  {name: 'test2', age: 12},
  {name: 'test3', age: 13}
];


var App = React.createClass({
  render: function() {
    
    var listPrint = (arg,i) => <li key={i}>{arg.name}, {arg.age} !!!</li>;

    
    return (
      <ul>{data.map(listPrint)}</ul>
    )
  }
});

ReactDOM.render(<App />,document.getElementById('app'));