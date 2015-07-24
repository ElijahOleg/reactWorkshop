
var Hello = React.createClass({
  render: function(){
    var name = "Gerald";
    return(
      <div>
          Hello {name}
      </div>
    )
  }
})

React.render(
  <Hello />,
  document.getElementById("root")
);
