import React from 'react';
import { Page, Navbar, Link, NavLeft, NavRight, NavTitle, List, ListInput, Button, Block, Col, Row, f7 } from 'framework7-react';
import { useState } from 'react';



export default ({ f7router }) => {
    const [imagedata, Setimagedata] = useState();
    const DoAddNewImage = (e) => {
        e.preventDefault();
        const formData = f7.form.convertToData(e.target);
        const Username = localStorage.getItem("Auth");
        formData.Username = Username;
        formData.PhotoAlbumImage = imagedata;
        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }
        fetch(process.env.REACT_APP_ADDPHOTO, opts).then(() => {
            f7.dialog.alert("New Image Added", "Photo Album");
            f7router.navigate('/imagelist/');
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
        <List noHairlinesMd form onSubmit={(e) => DoAddNewImage(e)}>
            <div className='ImageUploader' style={{ backgroundImage:"url("+imagedata+")" }}>
                <input type="file" onChange={(e) => ReadImageFile(e) }></input>
            </div>
            <ListInput
                outline
                label="Title"
                name="title"
                floatingLabel
                type="text"
                placeholder="Title"
                validate
                clearButton
            >
            </ListInput>
            <Block>
                <Row>
                    <Col>
                        <Button fill type="submit">Add Image</Button>
                    </Col>
                </Row>
            </Block>
        </List>
    </Page >)
}