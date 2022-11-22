import React, { useEffect, useState } from 'react';
import { App, Panel, View, Page, Block, Navbar, Row, Col, Button, Link, NavLeft, NavRight, NavTitle, Card, Segmented, Subnavbar, Searchbar, List, theme, ListItem } from 'framework7-react';
import { f7ready } from "framework7-react";
import $ from 'jquery'

export default () => {
    useEffect(() => {
        f7ready((f7) => {
            const opts = {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }
            const Username = localStorage.getItem("Auth");
            fetch(process.env.REACT_APP_GETIMAGE + Username,
                opts)
                .then(response => response.json())
                .then(data => {
                    let htmlres = "";
                    for (let q = 0; q < data.length; q++) {
                        htmlres += `<div class="mySlides fade">
                        <img src="`+ process.env.REACT_APP_SERVERIP + data[q].PhotoImageUrl + `" style="width:100%" />
                        <div class="text">` + data[q].Title + `</div>
                    </div>`;
                    }
                    $('.slideshow-container').html(htmlres);
                    showSlides();
                });
        });
    }, []);

    let slideIndex = 0;

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

    return (
        <Page name="tasks">
            <Navbar>
                <NavLeft backLink="Back"></NavLeft>
                <NavTitle>Photo Album</NavTitle>
                <NavRight>
                    <Link panelOpen="left">
                        <span class="material-icons">
                            menu
                        </span>
                    </Link>
                </NavRight>

            </Navbar>
            <List className="search-list searchbar-found">

                <div class="slideshow-container">

                </div>
            </List>
        </Page>
    )
}