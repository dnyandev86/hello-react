var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'This is from compoment default props'
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name
    };
  },
  onButtonClick: function(event) {
    event.preventDefault();
    var nameRef = this.refs.name;
    var updatedName = nameRef.value;
    nameRef.value = '';

    if (typeof updatedName === 'string' && updatedName.length > 0) {
      this.setState({
        name:updatedName
      });
    } else {
      alert('please enter name');
    }
  },
  render: function () {
    return (
      <div>
        <h1>Hello {this.state.name} !!!</h1>
        <p>{this.props.message}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

const firstName= "Dnyandev";

ReactDOM.render(
  <Greeter name={firstName} message="This is from props"/>,
  document.getElementById('app')
);
