var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'This is from compoment default props'
    };
  },
  render: function () {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name} !!!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

const firstName= "Dnyandev";

ReactDOM.render(
  <Greeter name={firstName} message="This is from props"/>,
  document.getElementById('app')
);
