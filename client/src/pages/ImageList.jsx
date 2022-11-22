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
            htmlres += `<a href="/imageedit/` + data[q].PhotoAlbum_ID + `/" class="item-inner NoRightPadding DataItem" data-title="` + data[q].Title + `">
            <div class="card">
            <div class="card-header">`+ data[q].Title + `</div>
            <div class="card-content card-content-padding"><img class="PhotoAlbum" src="`+ process.env.REACT_APP_SERVERIP + data[q].PhotoImageUrl + `"/></div></div></a>`;
          }
          //alert(htmlres)
          $('.search-list').html(htmlres);
          //$('.search-list .item-inner').hide(); $('[data-status="active"]').show();
        });
    });
  }, []);

  const DoSearch = () => {
    if ($('#Searchinput').val() == '') {
      $('.DataItem').show();
    }
    else {
      $('.DataItem').hide();
      $('.DataItem[data-title*="' + $('#Searchinput').val() + '"]').show();
    }
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
      <div class="SearchInputBox">
        <input type="text" placeholder='Search ...' id='Searchinput' onKeyDownCapture={(e) => { DoSearch() }}></input>
      </div>
      <List className="search-list searchbar-found">
      </List>
    </Page>
  )
}