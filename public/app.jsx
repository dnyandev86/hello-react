var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'This is from compoment default props'
    };
  },
  render: function () {
    const {name, message} = this.props;

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
