import { Button } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const {
        googleSignInAuth,
        githubSignInAuth,
        handleRegister,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        isLogin,
        handleResetPassword,
        handleNameChange,
        error

    } = useAuth();
    return (
        <div className="d-flex justify-content-center mb-5 mt-5">
            <div>


    <Form onSubmit={handleRegister}>
        <h2 className="text">Please {isLogin? "Login": "Register" } </h2>

           {! isLogin&& <Form.Group className="mb-3" controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control onBlur={handleNameChange} placeholder="your name" />
            </Form.Group>}
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
           
            </Form.Text>
        </Form.Group>
        <p className="text-center text-danger">{error}</p>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
        </Form.Group>
        
        <Form.Group onChange={toggleLogin} className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Already Register" />
        </Form.Group>
        <Button variant="primary" type="submit">
            {isLogin? "login": "Register"}
        </Button>
         <Button onClick={handleResetPassword} variant=" m-2 text-warning bg-primary" as = "input"
         type = "reset"
         value = "Reset Password" />
</Form> 
<br />
<button  onClick={googleSignInAuth} className="">GoogleSignIn</button>
<button onClick={githubSignInAuth} className="">GitHubSignIn</button>
</div>

</div>
    );
};

export default Register;