var App = React.createClass({
  getInitialState: function() {
    return {users: []};
  },
  handleDelete: function(userName){

  },
    // this.refs.name2greet
  greet: function(user) {
    this.setState({
      users: this.state.users.concat(user)
    });
  },
  render: function() {
    return (
      <div>
        <FormComponent delete={this.handleDelete} greet={this.greet} />
        <hr />
        <Greetings users={this.state.users} />
      </div>
    )
  }
})


React.render(<App/>, document.getElementById("root"));
