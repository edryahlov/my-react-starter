'use strict';

var data = [{ name: 'test1', age: 11 }, { name: 'test2', age: 12 }, { name: 'test3', age: 13 }];

var App = React.createClass({
  displayName: 'App',

  render: function render() {

    var listPrint = function listPrint(arg, i) {
      return React.createElement(
        'li',
        { key: i },
        arg.name,
        ', ',
        arg.age,
        ' !!!'
      );
    };

    return React.createElement(
      'ul',
      null,
      data.map(listPrint)
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));