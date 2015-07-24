var FormComponent = React.createClass({
  handleSubmit: function(event){
    event.preventDefault();
    this.props.greet({ name: this.refs.name2greet.value, email: this.refs.email.value});
      this.refs.userForm.reset();

  },
  render: function(){
    return(
      <form onSubmit={this.handleSubmit} ref="userForm">
        <input placeholder="name" ref="name2greet"/>
        <input type="email" placeholder="email" ref="email"/>
        <button type="submit">Greet</button>
      </form>
    );
  }
});
