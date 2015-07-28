var ToDoItem = React.createClass({
  getInitialState: function() {
    return {completed: false};
  },

  handleChange: function() {
    if (React.findDOMNode(this.refs.checkbox).checked) {
      this.setState({completed: true});
    } else {
      this.setState({completed: false});
    }
  },

  handleMouseOver: function() {
    $(React.findDOMNode(this.refs.item)).find("button").show();
  },

  handleMouseLeave: function() {
    $(React.findDOMNode(this.refs.item)).find("button").hide();
  },

  render: function() {
    return (
      <li ref="item" className={this.state.completed ? "completed" : ""} key={this.props.key} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
        <div>
          <input className="toggle" type="checkbox" ref="checkbox" onChange={this.handleChange} />
          <label>
            {this.props.value}
          </label>
          <button className="destroy"></button>
        </div>
      </li>
    );
  }
});

var ToDoList = React.createClass({
  render: function() {
    var toDoList = this.props.data.map(function (item, i){
      return (
        <ToDoItem value={item.text} key={i} />
      );
    }.bind(this));

    return (
      <ul className="todo-list">
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
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" type="text" ref="text" onKeyPress={this.handleSubmit} placeholder="What needs to be done?" />
        </header>
        <section className="main">
          <ToDoList data={this.state.data} />
        </section>
      </section>
    );
  }
});

React.render(<App />, document.body);
