import {Navbar, Nav, NavDropdown} from 'react-bootstrap'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.scss';
import {Link} from 'react-router-dom';
import CartIcon from './CartIcon';

const BarraNav = () => {
      return(        
        <>        
        <Navbar bg="light"expand="md" className="mb-3">
          <Navbar.Brand href="#home">
            <CartIcon/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to={'/'}><Nav.Link href="#home">Home</Nav.Link></Link>
              <Nav.Link href="#link">Quienes Somos</Nav.Link>
              <NavDropdown title="Servicios" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>                
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Contacto</Nav.Link>
            </Nav>            
          </Navbar.Collapse>
      </Navbar>      
        </>
     )
      
}; 
    
  

  export default BarraNav;
  