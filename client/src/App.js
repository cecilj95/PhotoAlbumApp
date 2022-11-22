import React from 'react';
import { App, Panel, View, List, ListItem } from 'framework7-react';
import Routes from './Routes'
import './panel.css'

export default () => (<App routes={Routes}>
    <Panel resizable left cover>
    <List>
      <ListItem title="New Image" link="/newimage/" panelClose></ListItem>
      <ListItem title="My images" link="/imagelist/" panelClose></ListItem>
      <ListItem title="Slide Show" link="/slideshow/" panelClose></ListItem>
      <ListItem title="Profile" link="/profile/" panelClose></ListItem>
      <ListItem title="Sign Out" link="/login/" panelClose></ListItem>
    </List>
    </Panel>
    <View url="/" main>

    </View>
  </App>
);