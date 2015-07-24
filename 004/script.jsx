var OneUserGreeting = React.createClass({
  render: function(){
    return(<li>Hello {this.props.name}</li>);
  }
})


var FormComponent = React.createClass({
  handleSubmit: function(event){
    event.preventDefault();
    this.props.greet(this.refs.name2greet);
  },
  render: function(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input placeholder="name" ref="name2greet"/>
        <button type="button">Greet</button>
      </form>
    );
  }
});


var Greetings = React.createClass({
  render: function() {
    var userLis = this.props.users.map(function(name, i) {
      return <OneUserGreeting name={name} key={i} />
    })
    return (
    <div>
      <ul>
        {userLis}
      </ul>
    </div>
    )

  }
})


var App = React.createClass({
  getInitialState: function() {
    return {users: ["Son", "Elijah"]};
  },
    // this.refs.name2greet
  greet: function(nameInput) {
    this.setState({
      users: this.state.users.concat(nameInput.value)
    }, function() {
        nameInput.value = '';
      }
    );
  },
  render: function() {
    return (
      <div>
        <FormComponent greet={this.greet} />
        <hr />
        <Greetings users={this.state.users} />
      </div>
    )
  }
})


React.render(<App/>, document.getElementById("root"));
