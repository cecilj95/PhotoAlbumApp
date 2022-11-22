import React from 'react';
import { Page, Navbar, Link, NavLeft, NavRight, NavTitle, List, ListInput, Button, Block, Col, Row, f7 } from 'framework7-react';



export default ({ f7router }) => {
    const DoRegister = (e) => {
        e.preventDefault();
        const formData = f7.form.convertToData(e.target)
        if (formData.confirmPassword === formData.password) {
            // /register 
            const opts = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            }
            fetch("http://localhost:5000/user/register", opts).then(response => response.json()).then(data=> {
                f7.dialog.alert(data.message, "Authentication App")
                if (data.user) {
                    f7router.navigate('/login/');
                }                
            });
        }
        else {
            f7.dialog.alert("Passwlord does not match the Confirm Password", "Authentication App")
            //f7.dialog.alert(JSON.stringify(formData), "Authentication App")
        }
    }
    return (<Page name="signup">
        <Navbar>
            <NavLeft backLink="Back"></NavLeft>
            <NavTitle>ToDo App</NavTitle>
            <NavRight>
                <Link panelOpen="left">
                    <span class="material-icons">
                        menu
                    </span>
                </Link>
            </NavRight>
        </Navbar>
        <List noHairlinesMd form onSubmit={(e) => DoRegister(e)}>
            <ListInput
                outline
                label="Name"
                name="name"
                floatingLabel
                type="text"
                placeholder="Name"
                validate
                clearButton
            >
            </ListInput>
            <ListInput
                outline
                label="Username"
                name="username"
                floatingLabel
                type="text"
                placeholder="Username"
                validate
                clearButton
            >
            </ListInput>
            <ListInput
                outline
                label="Email"
                name="email"
                floatingLabel
                type="email"
                placeholder="Email"
                validate
                clearButton
            >
            </ListInput>
            <ListInput
                outline
                label="Mobile"
                name="mobileNumber"
                floatingLabel
                type="number"
                placeholder="Mobile"
                validate
                clearButton
            ></ListInput>
            <ListInput
                outline
                label="Image URL"
                name="userImage"
                floatingLabel
                type="text"
                placeholder="Image URL"
                validate
                clearButton
            ></ListInput>
            <ListInput
                outline
                label="Password"
                name="password"
                floatingLabel
                type="password"
                placeholder="Password"
                validate
                clearButton
            ></ListInput>
            <ListInput
                outline
                label="Confirm Password"
                name="confirmPassword"
                floatingLabel
                type="password"
                placeholder="Confirm Password"
                validate
                clearButton
            ></ListInput>
            <Block>
                <Row>
                    <Col>
                        <Button fill type="submit">Signup</Button>
                    </Col>
                </Row>
            </Block>
        </List>
    </Page >)
}