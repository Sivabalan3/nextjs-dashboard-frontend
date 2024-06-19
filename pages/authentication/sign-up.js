import React,{useState} from "react";
import axios from "axios";
// import node module libraries
import { Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import Link from "next/link";

// import authlayout to override default layout
import AuthLayout from "layouts/AuthLayout";

const SignUp = () => {
  const [input,setinput]=useState({username:"",email:"",password:""})
  
  const onSubmitData = (e) => {
    e.preventDefault(); // Prevent the default form submit action
    setinput({ ...input, [e.target.name]: e.target.value });
  
    // Prepare the data to be sent in the POST request
    const postData = {
      username: input.username,
      email: input.email,
      password: input.password,
    };
  
    // Send a POST request to the server endpoint
    axios.post('http://localhost:5001/api/register', postData)
      .then(response => {
        console.log(response.data); // Handle the response from the server
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };
  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="https://ultraflysolutions.com/assets/images/company-logo/ultrafly_logo_recreate.png"
                  className="mb-2"
                  alt=""
                  style={{width:"120px",height:"60px",margin:'auto' ,display:'flex'}}
                />
              </Link>
             
            </div>
            {/* Form */}
            <Form onSubmit={onSubmitData}>
              {/* Username */}
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="User Name"
                  required=""
                  value={input.username}
                  onChange={(e)=>setinput({...input,username:e.target.value})}
                />
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter address here"
                  required=""
                  value={input.email}
                  onChange={(e)=>setinput({...input,email:e.target.value})}
                />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="**************"
                  required=""
                  value={input.password}
                  onChange={(e)=>setinput({...input,password:e.target.value})}
                />
              </Form.Group>

              {/* Confirm Password */}
              <Form.Group className="mb-3" controlId="confirm-password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirm-password"
                  placeholder="**************"
                  required=""
                />
              </Form.Group>

              {/* Checkbox */}
              <div className="mb-3">
                <Form.Check type="checkbox" id="check-api-checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label>
                    I agree to the <Link href="#"> Terms of Service </Link> and{" "}
                    <Link href="#"> Privacy Policy.</Link>
                  </Form.Check.Label>
                </Form.Check>
              </div>

              <div>
                {/* Button */}
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Create Free Account
                  </Button>
                </div>
                <div className="d-md-flex justify-content-between mt-4">
                  <div className="mb-2 mb-md-0">
                    <Link href="/authentication/sign-in" className="fs-5">
                      Already member? Login{" "}
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/authentication/forget-password"
                      className="text-inherit fs-5"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

SignUp.Layout = AuthLayout;

export default SignUp;
