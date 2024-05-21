import { Navbar, Nav, Container, Row, Col, Dropdown } from 'react-bootstrap';
import './App.css';
import { useEffect, useState } from 'react';
import axios from './api/axios';
import Szavak from './components/Szavak';

function App() {

  // const {temak, getTemak} = useApiContext();
  const [temak, setTemak] = useState([]);
  const [szavak, setSzavak] = useState([]);

  useEffect(()=>{
    axios.get("/api/tema")
    .then(res => {
      console.log(res)
      console.log(res.data)
      setTemak(res.data)
    })
    .catch(err => {
      console.error(err); 
    })
  },[])

  useEffect(()=>{
    axios.get("/api/szavak")
    .then(res => {
      console.log(res.data)
      setSzavak(res.data)
    })
    .catch(err => {
      console.error(err); 
    })
  },[])

  return (
    <div className="App">
    <Navbar bg="light" data-bs-theme="light">
      <Nav.Item>
      Szótár
      </Nav.Item>
    </Navbar>
    <Container fluid className='cim'>
    <strong>Szavak</strong>
    </Container>
    <Container>
      <Row >
         <Col lg={2}><Dropdown>
         <Dropdown.Toggle variant="light" id="dropdown-basic">
           Válassz Témát!
         </Dropdown.Toggle>
    
         <Dropdown.Menu>
          {
            temak.map((tema, index)=>{
              return(
                <Dropdown.Item eventKey={index}>{tema.temanev}</Dropdown.Item>
              )
            })
          }
         </Dropdown.Menu>
       </Dropdown></Col>
      </Row>
      <Row className='fejlec'>
        <Col lg={4}><strong>ANGOL</strong></Col>
        <Col lg={4}><strong>MAGYAR</strong></Col>
        <Col lg={4}>visszajelzés</Col>
      </Row>
      {
        szavak.map((szo, index)=>{
          return(
            <Szavak key={index} element = {szo}></Szavak>
          )
        })
      }
      <Row>
        <Col lg={6}>Eredmény:</Col>
        
      </Row>
    </Container>
    </div>
  );
}

export default App;
