
var Hello = React.createClass({
  render: function(){
    return(
      <div>
          {this.props.greet} {this.props.name}
      </div>
    )
  }
})

var App = React.createClass({
  render: function(){
    return(
      <div>
      <Hello greet="Wutup" name="Bobby Shmurda"/>
      <h1> React example</h1>
      </div>
    )
  }
})

React.render(
  <App />,
  document.getElementById("root")
);
