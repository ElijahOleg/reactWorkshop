
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
    var collection = {
      gerald: 'hi',
      ryan: 'hello',
      trey: "yo"
    }
    var greets = [];
    for(var name in collection){
      greets.push(<Hello greet={name} name={collection[name]}/>)
    }
    return(
      <div>
      <h1> React example</h1>
      {greets}
      </div>
    )
  }
})

React.render(
  <App />,
  document.getElementById("root")
);
