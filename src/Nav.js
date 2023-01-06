import logo from './logo.svg';
import './App.css';

export default function Nav(){
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