
import React, { useState, useRef } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useHistory } from "react-router-dom";
import LOGO from "../../images/logo.png"
const NavBar = () => {
  const [showSubMenuAbout, setShowSubMenuAbout] = useState(false)
  const [showSubMenuServices, setShowSubMenuServices] = useState(false)
  const [showNavbarMobile, setShowNavbarMobile] = useState(false)
  const Navv = useRef(null);
  const Collapsed = useRef(null);
  const handleNav = () => {
    setShowNavbarMobile(false)
    Navv.current.classList.remove('show')
    Collapsed.current.classList.add('collapsed')
  }
  const history = useHistory();
  return (
    <Navbar className={(showNavbarMobile ? 'main-nav-bar show-navbar-mobile' : 'main-nav-bar hide-navbar-mobile')} fixed="top" collapseOnSelect expand="lg" variant="light" >
      <Navbar.Brand href=""><img onClick={() => { history.push('/') }} src={LOGO} className="logo " alt="logo" /></Navbar.Brand>
      <Navbar.Toggle onClick={() => { setShowNavbarMobile(!showNavbarMobile) }} ref={Collapsed} aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse ref={Navv} id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Link onClick={() => { handleNav() }} to="/" className="nav-item" style={{ fontSize: "15px", marginTop: "9px", marginRight: "15px", paddingBottom: "5px" }}>Home  </Link>
          <NavDropdown onClick={() => {
            setShowSubMenuAbout(!showSubMenuAbout)
            setShowSubMenuServices(false)
          }} className={(showSubMenuAbout ? 'show-sub-menu-about' : 'hide-sub-menu-about')} title="About Us" id="collasible-nav-dropdown">
            <HashLink onClick={() => { handleNav() }} className=" dropdown-item" to="/about#our-Mission">    Our Mission  </HashLink>
            <HashLink onClick={() => { handleNav() }} className=" dropdown-item" to="/about#maintenance-and-User-Tips"> Maintenance and User Tips    </HashLink>
            <HashLink onClick={() => { handleNav() }} className=" dropdown-item" to="/about#partnership">   Partnership </HashLink>
            <div className="dropdown-divider"></div>
            <HashLink onClick={() => { handleNav() }} className=" dropdown-item" to="/about#location-Rates"> Alberta  Location Rates   </HashLink>
            <HashLink onClick={() => { handleNav() }} className=" dropdown-item" to="/about#location-Rates">  Chestermere   </HashLink>
            <HashLink onClick={() => { handleNav() }} className=" dropdown-item" to="/about#location-Rates">  Cochrane    </HashLink>
            <a onClick={() => { handleNav() }} target="_blank" rel="noopener noreferrer" className=" dropdown-item" href="https://errorcodeappliancerepair.ca/">     Okotoks     </a>
            <HashLink onClick={() => { handleNav() }} className=" dropdown-item" to="/about#location-Rates">     Canmore     </HashLink>
            <HashLink onClick={() => { handleNav() }} className=" dropdown-item" to="/about#location-Rates">   Airdrie      </HashLink>
            <div className="dropdown-divider"></div>
            <HashLink onClick={() => { handleNav() }} className=" dropdown-item" to={"/about#brands"}  >   Brands  </HashLink>
          </NavDropdown>
          {/* <NavDropdown onClick={() => {
            setShowSubMenuServices(!showSubMenuServices)
            setShowSubMenuAbout(false)
          }} className={(showSubMenuServices ? 'show-sub-menu-services' : 'hide-sub-menu-services')} title="            Services" id="collasible-nav-dropdown">
            <HashLink onClick={() => { handleNav() }} className=" dropdown-item" to="/services#washer-Repair">Washer Repair   </HashLink>
            <HashLink onClick={() => { handleNav() }} className=" dropdown-item" to="/services#dryer-Repair">Dryer Repair </HashLink>
            <HashLink onClick={() => { handleNav() }} className=" dropdown-item" to="/services#dishwasher-Repair"> Dishwasher Repair</HashLink>
            <HashLink onClick={() => { handleNav() }} className=" dropdown-item" to="/services#range-or-Oven-Repair"> Range or Oven Repair</HashLink>
            <HashLink onClick={() => { handleNav() }} className=" dropdown-item" to="/services#refrigerator-Repair"> Refrigerator Repair</HashLink>
            <HashLink onClick={() => { handleNav() }} className=" dropdown-item" to="/services#microwave-Repair">Microwave Repair </HashLink>
            <HashLink onClick={() => { handleNav() }} className=" dropdown-item" to="/services#installations"> Installations</HashLink>
            <HashLink onClick={() => { handleNav() }} className=" dropdown-item" to="/services#delivery">Delivery </HashLink>

          </NavDropdown> */}
          <NavDropdown onClick={() => {
            setShowSubMenuServices(!showSubMenuServices)
            setShowSubMenuAbout(false)
          }} className={(showSubMenuServices ? 'show-sub-menu-services' : 'hide-sub-menu-services')} title="            Services" id="collasible-nav-dropdown">
            <Link onClick={() => { handleNav() }} className=" dropdown-item" to="/services">Services   </Link>
            <div className="dropdown-divider"></div>
            <Link onClick={() => { handleNav() }} className=" dropdown-item" to="/services/washer-repair-calgary">Washer Repair   </Link>
            <Link onClick={() => { handleNav() }} className=" dropdown-item" to="/services/dryer-repair-calgary">Dryer Repair </Link>
            <Link onClick={() => { handleNav() }} className=" dropdown-item" to="/services/dishwasher-repair-calgary"> Dishwasher Repair</Link>
            <Link onClick={() => { handleNav() }} className=" dropdown-item" to="/services/range-or-oven-repair-calgary"> Range or Oven Repair</Link>
            <Link onClick={() => { handleNav() }} className=" dropdown-item" to="/services/refrigerator-repair-calgary"> Refrigerator Repair</Link>
            <Link onClick={() => { handleNav() }} className=" dropdown-item" to="/services/microwave-repair-calgary">Microwave Repair </Link>
          </NavDropdown>

          <Link onClick={() => { handleNav() }} className="nav-item" style={{ fontSize: "15px", marginTop: "9px", marginRight: "15px", paddingBottom: "5px" }} to="/estimates">Estimates</Link>
          <Link onClick={() => { handleNav() }} className="nav-item" style={{ fontSize: "15px", marginTop: "9px", marginRight: "15px", paddingBottom: "5px" }} to="/contact">Contact</Link>
          <Link onClick={() => { handleNav() }} className="nav-item" style={{ fontSize: "15px", marginTop: "9px", marginRight: "15px", paddingBottom: "5px" }} to="/blogs">Blogs</Link>
          <Link onClick={() => { handleNav() }} className="nav-item" style={{ fontSize: "15px", marginTop: "9px", marginRight: "15px", paddingBottom: "5px" }} to="/getDiscount">   Booking    </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar >

  );
}

export default NavBar;