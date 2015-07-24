var OneUserGreeting = React.createClass({
  render: function(){
    return(
      <li>
        <a href={"mailto:" + this.props.user.email}>Hello {this.props.user.name}</a>
      </li>
    );
  }
})


var FormComponent = React.createClass({
  handleSubmit: function(event){
    event.preventDefault();
    this.props.greet({ name: this.refs.name2greet.value, email: this.refs.email.value});
      this.refs.name2greet.value = "";
      this.refs.email.value = "";

  },
  render: function(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input placeholder="name" ref="name2greet"/>
        <input type="email" placeholder="email" ref="email"/>
        <button type="submit">Greet</button>
      </form>
    );
  }
});


var Greetings = React.createClass({
  render: function() {
    var userLis = this.props.users.map(function(user, i) {
      return <OneUserGreeting user={user} key={i} />
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
    return {users: []};
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
        <FormComponent greet={this.greet} />
        <hr />
        <Greetings users={this.state.users} />
      </div>
    )
  }
})


React.render(<App/>, document.getElementById("root"));
