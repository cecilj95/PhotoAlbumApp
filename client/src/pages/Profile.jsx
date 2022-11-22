import React, { useEffect, useState } from "react";
import {
  Page,
  Navbar,
  Link,
  NavLeft,
  NavRight,
  NavTitle,
  List,
  ListInput,
  Button,
  Block,
  Col,
  Row,
  f7,
} from "framework7-react";
import { f7ready } from "framework7-react";

var Password;
const DoRegister = (e) => {
  e.preventDefault();
  const formData = f7.form.convertToData(e.target);
  // if (formData.confirmPassword == formData.password) {
  // /update-details
  const UserDate = {
    _id: localStorage.getItem("Auth"),
    name: formData.name,
    username: formData.username,
    email: formData.email,
    mobileNumber: formData.mobileNumber,
    userImage: formData.userImage,
    password: Password,
  };
  // Edit This with the userid wheather it comes from cookie or localstorage
  const opts = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(UserDate),
  };
  fetch("http://localhost:5000/user/update-details", opts)
    .then((response) => response.json())
    .then((data) => {
      f7.dialog.alert(data.message, "Authentication App");
    });
  // }
  // else {
  // f7.dialog.alert("Passwlord does not match the Confirm Password", "Authentication App")
  //f7.dialog.alert(JSON.stringify(formData), "Authentication App")
  // }
};

export default () => {
  useEffect(() => {
    f7ready((f7) => {
      const userID = localStorage.getItem("Auth"); // Edit This with the userid wheather it comes from cookie or localstorage
      fetch("http://localhost:5000/user/fetch-details/" + userID)
        .then((response) => response.json())
        .then((data) => {
          //   Password = data.user.password;
          Setname(data.user.name);
          Setusername(data.user.username);
          Setemail(data.user.email);
          Setmobile(data.user.mobileNumber);
          Setimageurl(data.user.userImage);
        });
    });
  }, []);
  const [name, Setname] = useState();
  const [username, Setusername] = useState();
  const [email, Setemail] = useState();
  const [mobile, Setmobile] = useState();
  const [imageurl, Setimageurl] = useState();
  //   const [password, Setpassword] = useState();
  //   const [confirmpassword, Setconfirmpassword] = useState();
  return (
    <Page name="profile">
      <Navbar>
        <NavLeft backLink="Back"></NavLeft>
        <NavTitle>ToDo App</NavTitle>
        <NavRight>
          <Link panelOpen="left">
            <span class="material-icons">menu</span>
          </Link>
        </NavRight>
      </Navbar>
      <List noHairlinesMd form onSubmit={(e) => DoRegister(e)}>
        <ListInput
          outline
          label="Name"
          name="name"
          value={name}
          onChange={(e) => Setname(e.target.value)}
          floatingLabel
          type="text"
          placeholder="Name"
          validate
          clearButton
        ></ListInput>
        <ListInput
          outline
          label="Username"
          name="username"
          value={username}
          onChange={(e) => Setusername(e.target.value)}
          floatingLabel
          type="text"
          placeholder="Username"
          validate
          clearButton
        ></ListInput>
        <ListInput
          outline
          label="Email"
          name="email"
          value={email}
          onChange={(e) => Setemail(e.target.value)}
          floatingLabel
          type="email"
          placeholder="Email"
          validate
          clearButton
        ></ListInput>
        <ListInput
          outline
          label="Mobile"
          name="mobileNumber"
          value={mobile}
          onChange={(e) => Setmobile(e.target.value)}
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
          value={imageurl}
          onChange={(e) => Setimageurl(e.target.value)}
          floatingLabel
          type="text"
          placeholder="Image URL"
          validate
          clearButton
        ></ListInput>

        <Block>
          <Row>
            <Col>
              <Button fill type="submit">
                Update Profile
              </Button>
            </Col>
          </Row>
        </Block>
      </List>
    </Page>
  );
};
