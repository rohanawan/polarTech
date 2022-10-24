

import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Link } from "react-router-dom";

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.span`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition  
`;


export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
 ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

 img {
  ${tw`w-10 mr-3`}
 }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion.custom(styled.div`
 ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
 ${NavLinks} {
  ${tw`flex flex-col items-center`}
 }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;
export default function Light({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg" }) {
    const [showService, setShowService] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const toggleServices = () => {
        // setTimeout(() => {
        setShowService(!showService)
        // }, 1000);
    };
    const toggleAbout = () => {
        // setTimeout(() => {
        setShowAbout(!showAbout)
        // }, 1000);
    }
    const defaultLinks = [
        <NavLinks className="nav-links  d-flex" key={1}>
            <NavLink>
                <Link to="/" style={{ fontSize: "15px" }}>Home  </Link>
            </NavLink>
            <Dropdown className="about-serverices-nav light__NavLink-lj69nl-2 ehAZXp" nav isOpen={showAbout} toggle={toggleAbout}>
                <DropdownToggle className="zIndex-max" style={{ fontSize: "15px" }} nav caret>
                    About Us
          </DropdownToggle>
                <DropdownMenu className=""  >
                    <DropdownItem header><Link className="zIndex-max" to="/about#our-Mission">    Our Mission  </Link>     </DropdownItem>
                    {/* <DropdownItem divider /> */}
                    <DropdownItem> <Link className="zIndex-max" to="/about#maintenance-and-User-Tips"> Maintenance and User Tips    </Link>       </DropdownItem>
                    <DropdownItem> <Link className="zIndex-max" to="/about#partnership">   Partnership </Link>  </DropdownItem>
                    <DropdownItem><Link className="zIndex-max" to="/about#location-Rates  ">   Location Rates   </Link>     </DropdownItem>
                    <DropdownItem><Link className="zIndex-max" to="/about#brands">  Brands  </Link>  </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown className="about-serverices-nav light__NavLink-lj69nl-2 ehAZXp" nav isOpen={showService} toggle={toggleServices}>
                <DropdownToggle className="zIndex-max" style={{ fontSize: "15px" }} nav caret>
                    Services
          </DropdownToggle>
                <DropdownMenu className=""  >
                    <DropdownItem header><Link className="zIndex-max" to="/services#washer-Repair"> Washer Repair</Link>  </DropdownItem>
                    <DropdownItem><Link className="zIndex-max" to="/services#dryer-Repair">Dryer Repair </Link></DropdownItem>
                    <DropdownItem><Link className="zIndex-max" to="/services#dishwasher-Repair"> Dishwasher Repair</Link></DropdownItem>
                    <DropdownItem><Link className="zIndex-max" to="/services#range-or-Oven-Repair"> Range or Oven Repair</Link> </DropdownItem>
                    <DropdownItem><Link className="zIndex-max" to="/services#refrigerator-Repair"> Refrigerator Repair</Link> </DropdownItem>
                    <DropdownItem><Link className="zIndex-max" to="/services#microwave-Repair">Microwave Repair </Link>  </DropdownItem>
                    <DropdownItem><Link className="zIndex-max" to="/services#installations"> Installations</Link>  </DropdownItem>
                    <DropdownItem><Link className="zIndex-max" to="/services#delivery">Delivery </Link>  </DropdownItem>
                </DropdownMenu>
            </Dropdown>

            <NavLink>
                <Link to="/estimates">Estimates</Link>
            </NavLink>
            <NavLink>
                <Link to="/contact">Contact</Link>
            </NavLink>
            {/* <NavLink>
        <Link to="/bookings">New Booking</Link>
      </NavLink> */}
            <NavLink>
                <Link to="/blogs">Blogs</Link>
            </NavLink>
            <NavLink>
                <Link to="/getDiscount">   Booking    </Link>
            </NavLink>
        </NavLinks>,
    ];

    const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
    const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

    const defaultLogoLink = (
        <LogoLink >
            <Link className="logo-container" to="/">
                {/* style={{ float: "left", width: '283px!important', height: '76px!important' }} */}
                <img src={require('../../images/logo.png')} className="logo " alt="logo" />
            </Link>
        </LogoLink>
    );

    logoLink = logoLink || defaultLogoLink;
    links = links || defaultLinks;

    return (
        <Header className={"header-light container sticky-nav  "}>
            <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
                {logoLink}
                {links}
            </DesktopNavLinks>
            <MobileNavLinksContainer className="  " css={collapseBreakpointCss.mobileNavLinksContainer}>
                {logoLink}
                <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
                    {links}
                </MobileNavLinks>
                <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
                    {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
                </NavToggle>
            </MobileNavLinksContainer>
        </Header>
    );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
    sm: {
        mobileNavLinks: tw`sm:hidden`,
        desktopNavLinks: tw`sm:flex`,
        mobileNavLinksContainer: tw`sm:hidden`,
    },
    md: {
        mobileNavLinks: tw`md:hidden`,
        desktopNavLinks: tw`md:flex`,
        mobileNavLinksContainer: tw`md:hidden`,
    },
    lg: {
        mobileNavLinks: tw`lg:hidden`,
        desktopNavLinks: tw`lg:flex`,
        mobileNavLinksContainer: tw`lg:hidden`,
    },
    xl: {
        mobileNavLinks: tw`lg:hidden`,
        desktopNavLinks: tw`lg:flex`,
        mobileNavLinksContainer: tw`lg:hidden`,
    },
};

