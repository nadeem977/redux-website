import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const linstyle = {
  textDecoration:'none',
  color:'white'
}
const Appbar = () => {

  const cardProduct = useSelector((state) => state.card);
  return (
    <>
      <Navbar bg="dark" variant="dark" className="fixed-top">
        <Container>
          <Navbar.Brand>
            <Link to='/' style={linstyle}>REDUX</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
    
            
              <Link to="/" style={linstyle}>Home</Link>
           
            &nbsp;&nbsp;&nbsp;
           
           
              <Link to="/About" style={linstyle}>About</Link>
           
            &nbsp;&nbsp;&nbsp;
            <Link to="/Image/:id" style={linstyle}>Image</Link>
            &nbsp;&nbsp;&nbsp;
           <Link to="/Gallery" style={linstyle}>Gallery</Link>
           &nbsp;&nbsp;&nbsp;
           <Link to="/TodoApp" style={linstyle}>TODO</Link>
          </Nav>
          <div>
        
            <Link to="/card">
              <button className="btn btn-primary m-1">
                MY Bag {cardProduct.length}
              </button>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Appbar;
