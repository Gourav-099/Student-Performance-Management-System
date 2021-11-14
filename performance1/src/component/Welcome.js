import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Container , Paper} from '@mui/material';

export default function Login() {
    const paperStyle={padding:'50px 20px', width:800,margin:"20px auto"}
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

function validateForm() {
return email.length > 0 && password.length > 0;
}

function handleSubmit(event) {
event.preventDefault();
const  loginId={email,password}
console.log(loginId)

}

return (
<Container>
 <Paper elevation={3} style={paperStyle}>  
 <h1 style={{color:"blue"}}><i>STUDENT LOGIN</i></h1>
<div className="Login">
<Form onSubmit={handleSubmit}>
<Form.Group size="lg" controlId="email">
<Form.Label>Email</Form.Label>
<Form.Control
autoFocus
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
</Form.Group>
<Form.Group size="lg" controlId="password">
<Form.Label>Password</Form.Label>
<Form.Control
type="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
</Form.Group>
<Button block size="lg" type="submit" disabled={!validateForm()}>
Login
</Button>
</Form>
</div>
</Paper>
</Container>
);
}