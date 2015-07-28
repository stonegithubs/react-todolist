var ToDoItem = React.createClass({
  getInitialState: function() {
    return {done: false};
  },

  handleClick: function() {
    var checkbox = React.findDOMNode(this.refs.checkbox);
    if (this.state.done) {
      this.setState({done: false});
      checkbox.checked = false;
    } else {
      this.setState({done: true});
      checkbox.checked = true;
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
      <li style={liStyle} key={this.props.key} onClick={this.handleClick}>
        <input type="checkbox" ref="checkbox" />
        {this.props.value}
      </li>
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
        <ToDoItem value={item.text} key={i} />
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
