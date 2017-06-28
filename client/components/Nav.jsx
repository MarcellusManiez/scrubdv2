import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';

const Nav = () => {
  return (
    <Toolbar style={{backgroundColor: '#616161', margin: 0, height: '100px', borderBottom: '8px solid #00B0FF' }}>
      <ToolbarGroup>
        <ToolbarTitle text='Scrubd' style={{ fontSize: '2.5em', color: 'white' }} />
      </ToolbarGroup>
    </Toolbar>
  );
};

export default Nav;