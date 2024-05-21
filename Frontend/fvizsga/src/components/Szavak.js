import { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

export default function Szavak(props){

    const [magyarul, setMagyarul] = useState("");

    return(
        <Row>
            <Col lg={4} className='szo'>{props.element.angol}</Col>
            <Col lg={4} className='szo'><Form>
            <Form.Control type="text" placeholder="magyarul" value={magyarul} onChange={(e)=>{
                setMagyarul(e.target.value)
            }}/>
            </Form></Col>
            <Col lg={4} className='radio'>
            {props.element.magyar === magyarul ? <p>Helyes válasz!</p>:<p>Helytelen válasz!</p>}
            </Col>
        </Row>
    )
}