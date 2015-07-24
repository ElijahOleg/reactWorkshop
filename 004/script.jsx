


var OneUserGreeting = React.createClass({
  render: function(){
    return <li>Hello {this.props.name}</li>
  }
})

var formComponent = React.createClass({
  render: function(greet){
    <form>
      <input  placeholder="name" ref="name2greet"/>
      <button onClick={greet}>Greet</button>
    </form>
  }

})


var Greetings = React.createClass({
  getInitialState: function() {
    return {
      users: [
        "Soren", "Todd", "Son", "James"
      ]
    };
  },
  greet: function() {
    var ref = this.refs;
    // var currentUsers = this.state.users;
    // curretnUsers.push(ref.name2greet.value);
    this.setState({
      users: this.state.users.concat(this.refs.name2greet.value)
    }, function() {
      this.refs.name2greet.value = '';
    });
  },
  // componentDidMount: function() {
  // },
// componentWillMount: function(){
//   this.greet();
// },
// componentWillUnmount: function(){
//   this.greet();
// },
  render: function() {
    var userLis = this.state.users.map(function(name, i) {
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
  render: function() {
    return (
      <div>
        <formComponent />
        <hr />
        <Greetings />
      </div>
    )
  }
})
React.render(<App/>, document.getElementById("root"));
