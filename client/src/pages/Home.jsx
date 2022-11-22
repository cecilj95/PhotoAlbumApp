import React from 'react';
import { App, Panel, View, Page, Block, Navbar, Row, Col, Button, Link, NavLeft, NavRight, NavTitle } from 'framework7-react';
import { useLocation } from "react-router-dom";

export default ({ f7router }) => {
  const search = window.location.search;
  const token = new URLSearchParams(search).get('token');
  const opts = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }
  if (token)
    fetch(`http://localhost:5000/activate?token=${token}`, opts).then(respone => {
      f7router.navigate('/activate/');
    });
  return (<Page id="panel-page">
    <Navbar>
      <NavTitle>Photo Album</NavTitle>
      <NavRight>
        <Link panelOpen="left">
          <span class="material-icons">
            menu
          </span>
        </Link>
      </NavRight>
    </Navbar>
    <div class="IntroTitle">Photo Album</div>
    <div class="IntroImage"><span class="material-icons">
      lock
    </span></div>
    <div class="IntroLoginBtn"><a href="/login/" class="button button-round button-fill">Login</a></div>
    <div class="IntroSignupBtn">Not registered yet ? <a href="/signup/">Signup</a> now for free.</div>
    <div class="IntroCopyright">Copyright 2022 A2Group3. All Rights Reserved.</div>
  </Page>);
}