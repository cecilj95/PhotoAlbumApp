import React from 'react';
import { App, Panel, View, Page, Block, Navbar, Row, Col, Button, Link, NavLeft, NavRight, NavTitle } from 'framework7-react';

export default () => (
  <Page name="about">
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
  </Page>
)