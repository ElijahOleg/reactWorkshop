
var Hello = React.createClass({
  getInitialState: function(){
    return { greeting: 'Welcome', name: "State"};
  },
  greet: function(){
    var ref = this.refs;
    this.setState(
      {greeting: "hello", name:ref.name2greet.value},
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
        {this.state.greeting} {this.state.name}
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
