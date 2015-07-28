var ToDoItem = React.createClass({
  getInitialState: function() {
    return {done: false};
  },

  handleClick: function() {
    if (this.state.done) {
      this.setState({done: false});
    } else {
      this.setState({done: true});
    }
  },

  render: function() {
    var liStyle;

    if (this.state.done) {
      liStyle = {
        textDecoration: 'line-through'
      };
    }

    return (
        <li style={liStyle} key={this.props.i} onClick={this.handleClick}>{this.props.value}</li>
    );
  }
});

var ToDoList = React.createClass({
  getInitialState: function(data) {
    return {data: data};
  },

  render: function() {
    var toDoList = this.props.data.map(function (item, i){
      return (
        <ToDoItem value={item.text} i={i} />
      );
    });

    return (
      <ul>
        {toDoList}
      </ul>
    );
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  handleSubmit: function(e) {
    if (e.which == 13) {
      var text = React.findDOMNode(this.refs.text);

      if (text.value == "") {return;}

      data = this.state.data;
      data.push({text: text.value});

      this.setState({data: data});

      text.value = "";
    }
  },

  render: function() {
    return (
      <div className="list">
        <h1>ToDoList</h1>
        <ToDoList data={this.state.data} />
        <input type="text" ref="text" onKeyPress={this.handleSubmit} />
      </div>
    );
  }
});

React.render(<App />, document.body);
