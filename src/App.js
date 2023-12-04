import './App.css';


const name = 'mass kalauni ';
const element = <form>
<h1>login form</h1>
<label  htmlFor="username">Username:</label>
<input type="text" className="username"/>
<label  htmlFor="password">Password:</label>
<input type="password" className="password"/>
<input type="submit" value="SignIn"/>
</form>;

function App() {
  return (
<>
<p>{element}</p>
</>
  );
}

export default App;
