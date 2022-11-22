import React, { useRef, useEffect } from 'react';
import { App, Panel, View, Page, Block, Navbar, Row, Col, Button, Link, NavLeft, NavRight, NavTitle, f7, f7ready, List, ListInput } from 'framework7-react';
import { ReCAPTCHA } from "react-google-recaptcha"


export default ({ f7router }) => {
    const captchaRef = useRef(null)
    const DoRegister = (e) => {
        e.preventDefault();
        const formData = f7.form.convertToData(e.target)
        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }
        localStorage.setItem("Auth",formData.Username);
        f7router.navigate('/imagelist/');
    }
    useEffect(() => {
        f7ready((f7) => {
            localStorage.removeItem("Auth"); 
            //window.location.reload();
        })
    }, []);
    return (<Page name="login">
        <Navbar>
            <NavLeft backLink="Back"></NavLeft>
            <NavTitle>PhotoAlbum</NavTitle>
            <NavRight>
                <Link panelOpen="left">
                    <span class="material-icons">
                        menu
                    </span>
                </Link>
            </NavRight>
        </Navbar>
        <div className="LoginIcon">
            <span class="material-icons">
                person
            </span>
        </div>
        <List noHairlinesMd form onSubmit={(e) => DoRegister(e)}>
            <ListInput
                outline
                label="Username"
                name="Username"
                floatingLabel
                type="text"
                placeholder="Username"
                validate
                clearButton
            >
            </ListInput>
            <ListInput
                outline
                label="Password"
                name="password"
                floatingLabel
                type="password"
                placeholder="Password"
                validate
                clearButton
            >
            </ListInput>
            <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} ref={captchaRef} />
            <Block>
                <Row>
                    <Col>
                        <Button fill type="submit">Login</Button>
                    </Col>
                </Row>
            </Block>
        </List>
    </Page>)
}