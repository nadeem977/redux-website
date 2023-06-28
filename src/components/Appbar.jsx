import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {Button} from '@mui/material'


const linstyle = {
  textDecoration:'none',
  color:'white'
}
const Appbar = () => {

  const cardProduct = useSelector((state) => state.card);
  return (
    <>
      <Navbar expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand className="mt-2">
            <Link to='/' style={linstyle}>REDUX</Link>
          </Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Link  to="/" style={linstyle}>Home</Link >
           &nbsp; &nbsp;
           <Link  to="/About" style={linstyle}>About</Link >
           &nbsp; &nbsp;
           <Link  to="/Image/:id" style={linstyle}>Image</Link >
           &nbsp; &nbsp;
           <Link  to="/Gallery" style={linstyle}>Gallery</Link >
           &nbsp; &nbsp;
           <Link  to="/TodoApp" style={linstyle}>TODO</Link >
           &nbsp; &nbsp;
           <Link  to="/Voice" style={linstyle}> TextToVoice</Link >
           &nbsp; &nbsp;
           <Link  to="/VoiceToText" style={linstyle}>VoiceToText</Link >
           &nbsp; &nbsp;
          </Nav>
          <div>
            <Link to="/card"><Button variant="contained" >MY Bag {cardProduct.length}</Button></Link>
          </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Appbar;
