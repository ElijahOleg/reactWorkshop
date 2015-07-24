
var Hello = React.createClass({
  render: function(){
    var names = ["Gerald","Dan","Trey"];
    var greetings = ["Hello","Hi","hey there"];
    var hellos = names.map(function(name, index){
       return <h1>{greetings[index]} {name}</h1>
    })
    return(
      <div>
          {hellos}
      </div>
    )
  }
})

React.render(
  <Hello />,
  document.getElementById("root")
);
