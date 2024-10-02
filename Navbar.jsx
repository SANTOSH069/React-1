import  "./Navbarstyles.css";


const Navbar = () => {
  
  return (
<nav className="NavbarItems">
<h1 className="navbar-logo">E-Cell</h1>

<ul className="nav-menu">
    <li>
    <a className="nav-links" href="/">
    <i className="fa-solid fa-house-user"></i>Home
    </a>
</li>
<li>
    <a className="nav-links" href="/About.jsx">
    <i className="fa-solid fa-circle-user"></i>About Us
    </a>
</li>
<li>
    <a className="nav-links" href="/Events.jsx">
    <i className="fa-solid fa-calendar-days"></i>Events
    </a>
</li>
<li>
    <a className="nav-links" href="/Contact.jsx">
    <i className="fa-solid fa-address-book"></i>Contact Us
    </a>
</li>
<li>
   
    <a href="/SignIn.jsx"><button className="button-link">Sign Up</button>
    </a>
    
    
</li>


</ul>
</nav>
  )
}

export default Navbar
