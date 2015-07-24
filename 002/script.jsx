
var Hello = React.createClass({
  render: function(){
    return(
      <div>
          {this.props.greet} {this.props.name}
      </div>
    )
  }
})

React.render(
  <Hello greet="Wutup" name="Bobby Shmurda"/>,
  document.getElementById("root")
);
