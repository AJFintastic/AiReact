import React from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableViewIcon from '@mui/icons-material/TableView';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar>
        <Box sx={{ fontWeight: 'bold', fontSize: 18 }}>
          Fintastic Data
        </Box>
      </Toolbar>
      <List>
        {/* Dashboard Link */}
        <ListItemButton component={Link} to="/Dashboard">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        {/* Tables Placeholder */}
        <ListItemButton>
          <ListItemIcon><TableViewIcon /></ListItemIcon>
          <ListItemText primary="Tables" />
        </ListItemButton>

        {/* Billing Placeholder */}
        <ListItemButton>
          <ListItemIcon><PaymentIcon /></ListItemIcon>
          <ListItemText primary="Billing" />
        </ListItemButton>

        {/* Settings Placeholder */}
        <ListItemButton>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default Sidebar;
