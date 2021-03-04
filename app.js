const title = <h1>My First Reach Element!</h1>

const desc = <p>I just learned how to creat a React node and render it into</p>


const header = React.createElement(
  'header',
  null,
  title,
  desc
);

ReactDOM.render(
  header,
  document.getElementById('root')
);