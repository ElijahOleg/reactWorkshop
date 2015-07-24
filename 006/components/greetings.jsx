var Greetings = React.createClass({
  render: function() {
    var userLis = this.props.users.map(function(user, i) {
      return <OneUserGreeting user={user} key={i} />
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
