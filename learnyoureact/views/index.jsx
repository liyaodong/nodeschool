var React = require('react');
var _ = require('underscore');

var TodoBox = React.createClass({
  getInitialState: function () {
    return {
      data: this.props.data
    };
  },
  render: function() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data = {this.state.data}/>
        <TodoForm/>
      </div>
    );
  }
});

var TodoList = React.createClass({
  getDefaultProps: function() {
    return {
      onDelete: this.deleteTodo
    };
  },
  getInitialState: function() {
    return {
      data: this.props.data,
      titleValue: '',
      detailValue: ''
    };
  },
  changeTitle: function(e) {
    this.setState({
      titleValue: e.target.value
    });
  },
  changeDetail: function(e) {
    this.setState({
      detailValue: e.target.value
    });
  },
  addTodo: function() {
    if(this.state.titleValue.length && this.state.detailValue.length) {
      this.setState({
        data: this.state.data.concat({
          title: this.state.titleValue,
          detail: this.state.detailValue
        })
      });
    }
  },
  deleteTodo: function (title) {
    this.setState({
      data: this.state.data.filter(function (item) {
        return item.title !== title;
      })
    });
  },
  render: function() {
    var todo = this.state.data.map(function(obj) {
      return <Todo key={obj.title} title={obj.title} onDelete={this.deleteTodo}>{obj.detail}</Todo>;
    }.bind(this));

    return (
      <div className = "todoList">
        <div>
          Title:<input type="text" value={this.state.titleValue} onChange={this.changeTitle} />
          Detail:<input type="text" value={this.state.detailValue} onChange={this.changeDetail} />
          <button onClick={this.addTodo}>Add</button>
        </div>
        <table style={{border: '2px solid black'}}>
          <tbody>
            {todo}
          </tbody>
        </table>
      </div>
    );
  }
});

var Todo = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    onDelete: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      checked: false
    };
  },
  handleChange: function(e) {
    this.setState({
      checked: e.target.checked
    });
    console.log(e.target.checked);
  },
  _onDelete: function () {
    this.props.onDelete(this.props.title);
  },
  render: function() {
    var trStyle = this.state.checked ? style.checkedTodo : style.notCheckedTodo;
    return (
      <tr style={trStyle}>
        <td style={style.tableContent}><button onClick={this._onDelete}>X</button></td>
        <td style={style.tableContent}>
          <input checked={this.state.checked} onChange={this.handleChange} type="checkbox"/>
        </td>
        <td style={style.tableContent}>{this.props.title}</td>
        <td style={style.tableContent}>{this.props.children}</td>
      </tr>
    );
  }
});

var TodoForm = React.createClass({
  render: function() {
    return (
      <div className="todoForm">
        I am a TodoForm.
      </div>
    );
  }
});

var style = {
  checkedTodo: {
    textDecoration: 'line-through'
  },
  notCheckedTodo: {
    textDecoration: 'none'
  },
  tableContent: {
    border: '1px solid black'
  }
};

module.exports = TodoBox;
