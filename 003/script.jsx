
var Hello = React.createClass({
  getInitialState: function(){
    return { greeting: 'Welcome', name: "State"};
  },
  greet: function(){
    var ref = this.refs;
    console.log(ref);
    this.setState(
      {greeting: "hello", name:ref.name2greet.value}
    );
  },
  componentDidMount: function(){
    this.greet()
  },
    render: function(){
    return(
      <div>
        <input placeholder="name" ref="name2greet"/>
        <button onClick={this.greet}>Greet</button>
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
