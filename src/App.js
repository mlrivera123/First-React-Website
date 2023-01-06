import logo from './logo.svg';
import './App.css';


function Nav(){
  return(
  <nav className="nav">
  <img src={logo} className="App-logo" alt="logo" />
  <ul className="nav-item">
    <li>Pricing</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>
  )
}

function Header(){
  return(
    <header className="head">
    <h1>Reasons I'm Excited to Learn React</h1>
    </header>
  )
}


function Body(){
  return(
    <ol className="list">
      <li>It's a popular library so i'll fit in with the cool kids!</li>
      <li>I'm more likely to get a job as a developer if I know react.</li>
      <li>It is actually pretty fun to learn!</li>
    </ol>
  )
}

function Footer(){
  return(
    <footer className="foot">
      <small>© 2023 Max Rivera development. All rights reserved.</small>
    </footer>
  )
}

function App() {
  return (
    <div>
    <Nav/>
    <Header/>
    <Body/>
    <Footer/>
    </div>
  );
}

export default App;
