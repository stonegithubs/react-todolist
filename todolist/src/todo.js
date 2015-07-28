var AddInput = React.createClass({
  handleSubmit: function(e) {
    if (e.which == 13) {
      var text = React.findDOMNode(this.refs.text);

      $("#list").append("<li>"+text.value.trim()+"</li>");

      text.value = "";
    }
  },

  render: function() {
    return (
      <input type="text" ref="text" onKeyPress={this.handleSubmit} />
    );
  }
});

var ToDoList = React.createClass({
  render: function() {
    return (
      <div className="list">
        <h1>ToDoList</h1>
        <ul id="list"></ul>
        <AddInput />
      </div>
    );
  }
});

React.render(<ToDoList />, $("body")[0]);
