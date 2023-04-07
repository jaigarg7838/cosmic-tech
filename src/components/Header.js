import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';

class Header extends Component {
  constructor(props){
    super(props)
  
    this.toggleNav = this.toggleNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.state= {
        isNavOpen: false
    }
  }

  toggleNav(){
    this.setState({
        isNavOpen: !this.state.isNavOpen
    })
  }

  closeNav(){
    this.setState({
        isNavOpen: false
    })
  }

    render() {
        return (
            <>
                <div>
             
                 <Navbar expand="lg" className="navigation fixed-top headerNavContent d-flex align-items-center justify-content-center">
                            <div className="container-md my-2">
                                <div className="row">  
                                    <div className="col-lg-2">
                                    <NavbarToggler onClick={this.toggleNav}/>
                                    <NavbarBrand className="mr-auto navbarHeading" href="/" >
                                        <img src="./assets/img/header/logo8r.png" className="logoImg" alt="Cosmic Technologies"/>
                                     </NavbarBrand>
                                     </div>
                                     <div className=" col-lg-10">
                                    <Collapse isOpen={this.state.isNavOpen} navbar onClick={this.closeNav} className="NavbarColap collapse navbar-collapse">
                                    <Nav navbar className="navclass">
                                        <NavItem>
                                            <NavHashLink className="nav-link" to='/#home'>Home</NavHashLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavHashLink className="nav-link" to='/#aboutus'>About</NavHashLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavHashLink className="nav-link" to='/#services'>Services</NavHashLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavHashLink className="nav-link" to='/#faq'>Faq</NavHashLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavHashLink className="nav-link" to='/#testimonial'>Testimonial</NavHashLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavHashLink className="nav-link" to='/#techstack'>Tech Stack</NavHashLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavHashLink className="nav-link" to='/#portfolio'>Portfolio</NavHashLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavHashLink className="nav-link" to='/#contactus'>Contact Us</NavHashLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavHashLink className="nav-link" to='/career#career'>Career</NavHashLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavHashLink className="nav-link" to='/blog#blog'>Blog</NavHashLink>
                                        </NavItem>

                                        <NavItem>
                                        <Button type="button" className="bg bg-primary btn-nav-link"><NavHashLink to="/#aboutus" className="nav-get-start">Get Started</NavHashLink></Button>
                                        </NavItem>
                                    </Nav>
                                    </Collapse>
                                    </div>
                                    </div>
                                    </div>
                        </Navbar> 
                </div>
            </>
        );
    }
   
}

export default Header;