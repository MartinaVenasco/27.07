
import './index.css';
import logo from '../../logo.svg'
const Navbar = () => {
  return (
    <div className="Navbar">
    <img className='logo' src={logo}></img>
      <ul className="Navbar__list">
       
        <li>
          <a href="#topS">My Friends</a>
        </li>
        <li>
          <a href="/">My Message</a>
        </li>
        <li>
          <a href="#topM">i</a>
        </li>
        
      </ul>
    </div>
  )
}

export default Navbar;