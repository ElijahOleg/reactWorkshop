
var Hello = React.createClass({
  render: function(){
    var names = ["Gerald","Dan","Trey"];
    var greetings = ["Hello","Hi","hey there"];
    var hellos = [];
    for(i=0; i < names.length; i++){
      hellos.push(<h1>{greetings[i%greetings.length] + " " + names[i]}</h1>)
    }
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
