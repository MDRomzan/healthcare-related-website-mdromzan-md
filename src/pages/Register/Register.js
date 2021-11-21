import { Button } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';

const Register = () => {
    const location=useLocation();
    const history=useHistory();
    const redirect_url=location.state?.from || "/services"
    console.log()
    const handleGoogleSignIn=()=>{
        googleSignInAuth()
        .then(result => {
                // console.log(result.user);
                history.push(redirect_url);
                setUser(result.user)
            })
            .finally(() => setLoading(false))
            .catch(error => {
                setError(error.message);
            })
    }
    const handleRegisterFrom=()=>{
        handleRegister()
        .then(result => {
                history.push(redirect_url);
                const user = result.user
                setUser(result.user);
                setError("")
                console.log(user)
            })
            .catch(error => {
                setError(error.message)
            })
    }
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
        error,
        setLoading,
        setError,
        setUser,
        

    } = useAuth();
   
    return (
        <div className="d-flex justify-content-center mb-5 mt-5">
            <div>


    <Form onSubmit={handleRegisterFrom}>
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
<button onClick={handleGoogleSignIn} className="btn-button">GoogleSignIn</button>
<button onClick={githubSignInAuth} className="btn-contact">GitHubSignIn</button>
</div>

</div>
    );
};

export default Register;