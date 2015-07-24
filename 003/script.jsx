
var Hello = React.createClass({
  getInitialState: function(){
    return { users: ["Soren","Todd","Son","James"]};
  },
  greet: function(){
    var ref = this.refs;
    var curretnUsers = this.state.users;
    curretnUsers.push(ref.name2greet.value);
    this.setState({
      users:  this.state.users.concat(this.refs.name2greet.value)
      },
      function(){
        this.refs.name2greet.value = '';
      }
    );
  },
  componentDidMount: function(){
    this.greet();
  },
  // componentWillMount: function(){
  //   this.greet();
  // },
  // componentWillUnmount: function(){
  //   this.greet();
  // },
  render: function(){
    return(
      <div>
        <input class="form" placeholder="name" ref="name2greet"/>
        <button id="btn" onClick={this.greet}>Greet</button>
        <br></br>
        {this.state.greeting} {this.state.users}
      </div>
    )
  }
})

var App = React.createClass({
  render: function(){
    return(
      <div>
        <Hello />
      </div>
    )
  }
})

React.render(
  <App />,
  document.getElementById("root")
);
