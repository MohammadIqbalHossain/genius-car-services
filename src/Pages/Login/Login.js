
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Login = () =>  {
        const emailRef = useRef('');
        const passwordRef = useRef('');
        const navigate = useNavigate();
    
        const handleSubmit = (event) => {
            event.preventDefault();
             
            const email =  emailRef.current.value;
            const password = passwordRef.current.value;
            console.log(email, password);
      
        } 

        
    
        return (
            <div className='container w-50 mt-5'>
                <PageTitle title="Login"></PageTitle>
                <h1>Welcome to login</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email"  required/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <p>Are a new? <Link to='/register' className='text-danger text-decoration-none pe-auto' onClick={() => navigate('/register')}>Register first</Link> </p>
            </div>
        );
    };
    

export default Login;