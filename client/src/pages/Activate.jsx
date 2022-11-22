import React, { useEffect } from 'react';
import { App, Panel, View, Page, Block, Navbar, Row, Col, Button, Link, NavLeft, NavRight, NavTitle } from 'framework7-react';
import { f7ready } from 'framework7-react';

export default () => {
    useEffect(() => {
        f7ready((f7) => {
            
        })
    }, []);
    return (
        <Page name="activate">
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
            <div className="CenterScreen">
                <span class="material-icons">
                    check_circle
                </span>
                <span class="ActivateScreen">
                    Account Activated
                </span>
            </div>
        </Page>);
}