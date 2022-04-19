import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    

    const handleSubmitForm = (event) => {
        event.PreventDefault();

    }
    return (
        <div className='container w-50 mt-5'>
                <h1>Welcome to Register</h1>
                <Form onSubmit={handleSubmitForm}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control  type="email" placeholder="Enter email" required/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control  type="text" placeholder="Your name" />
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control  type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                       Register
                    </Button>
                </Form>
                <p>Already have an account? <Link to='/login' className='text-danger text-decoration-none pe-auto' onClick={() => navigate('/login')}>Please login.</Link> </p>
            </div>
    );
};

export default Register;