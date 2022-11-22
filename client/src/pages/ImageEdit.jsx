import React, { useState, useEffect } from 'react';
import { Page, Navbar, Link, NavLeft, NavRight, NavTitle, List, ListInput, Button, Block, Col, Row, f7 } from 'framework7-react';
import { f7ready } from "framework7-react";


export default (props) => {

  const [imagetitle, Setimagetitle] = useState();
  const [imagedata, Setimagedata] = useState();
  useEffect(() => {
    f7ready((f7) => {
      const Username = localStorage.getItem("Auth");
      fetch(process.env.REACT_APP_GETONEIMAGE + "Username=" + Username + "&" + "ImageID=" + props.imageid)
        .then((response) => response.json())
        .then((data) => {
          //alert(data.Title);
          Setimagetitle(data.Title);
          Setimagedata(process.env.REACT_APP_SERVERIP+data.PhotoImageUrl);
        });
    });
  }, []);
  const DoUpdateImage = (e) => {
    e.preventDefault();
    const formData = f7.form.convertToData(e.target);
    var imageid = props.imageid;
    const Username = localStorage.getItem("Auth");
    formData.PhotoAlbum_ID = imageid;
    formData.Username = Username;
    formData.PhotoAlbumImage = imagedata;
    const opts = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    }
    fetch(process.env.REACT_APP_UPDATEPHOTO, opts).then(() => {
      f7.dialog.alert("Image updated", "Photo Album");
    });
  }
  const ReadImageFile = (e) => {
    let files = e.target.files;
    let f = files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      Setimagedata(e.target.result);
    };
    reader.readAsDataURL(f);
  }
  const DoRemoveImage = (e) => {
    var imageid = props.imageid;
    const Username = localStorage.getItem("Auth");
    const opts = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }
    fetch(process.env.REACT_APP_REMOVE + "ImageID=" + imageid + "&Username=" + Username, opts).then(() => {
      f7.dialog.alert("Image removed", "Photo Album");
    });
  }
  return (<Page name="newtask">
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
    <List noHairlinesMd form onSubmit={(e) => DoUpdateImage(e)}>
      <div className='ImageUploader' style={{ backgroundImage: "url(" + imagedata + ")" }}>
        <input type="file" onChange={(e) => ReadImageFile(e)}></input>
      </div>
      <ListInput
        outline
        label="Title"
        name="title"
        floatingLabel
        type="text"
        value={imagetitle}
        onChange={(e)=>Setimagetitle(e.target.value)}
        placeholder="Title"
        validate
        clearButton
      >
      </ListInput>
      <Block>
        <Row>
          <Col>
            <Button fill type="submit">Change Image</Button>
            <br></br>
            <Button fill colorTheme='red' onClick={(e) => { DoRemoveImage() }}>Remove Image</Button>
          </Col>
        </Row>
      </Block>
    </List>
  </Page >)
}