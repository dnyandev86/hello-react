var Greeter = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Hello React World !!!</h1>
        <p>This is from react component</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
