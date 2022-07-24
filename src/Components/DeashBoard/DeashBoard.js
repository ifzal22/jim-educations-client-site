import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import {
    Link, Outlet
} from "react-router-dom";
import useAuth from '../Hooks/useAuth';
import './DeashBoard.css';

const drawerWidth = 200;

function DeashBoard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);



    const { admin } = useAuth()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className='D' style={{ marginTop: '100px' }}>

            <Divider />

            <div style={{ marginLeft: '10px' }}  >


                {admin && <Box>

                    <Link to={`/DeashBoard/AddAdmin`}>
                        <button className='btn' color="inherit">
                            <Typography variant="h6">Make Admin</Typography>
                        </button></Link>

                    <Link to={`/DeashBoard/teacherADD`}>
                        <button className='btn' color="inherit">
                            <Typography variant="h6">Add Teacher</Typography>
                        </button></Link>
                    <Link to={`/DeashBoard/blogAdd`}>
                        <button className='btn' color="inherit">
                            <Typography variant="h6">Add BLOG</Typography>
                        </button></Link>
                    <Link to={`/DeashBoard/noticeADD`}>
                        <button className='btn' color="inherit">
                            <Typography variant="h6">Add notice</Typography>
                        </button></Link>


                    <Link to={`/DeashBoard/StudentAdd`}>
                        <button className='btn' color="inherit">
                            <Typography variant="h6">Add Student</Typography>
                        </button></Link>


                    <Link to={`/DeashBoard/servicesAdd`}>
                        <button className='btn' color="inherit">
                            <Typography variant="h6">Add Servic</Typography>
                        </button></Link>


                    <Link to={`/DeashBoard/AddAdmition`}>
                        <button className='btn' color="inherit">
                            <Typography variant="h6">Add Admition</Typography>
                        </button></Link>


                    <Link to={`/DeashBoard/AddResult`}>
                        <button className='btn' color="inherit">
                            <Typography variant="h6">Add Result</Typography>
                        </button></Link>

                </Box>}

            </div>



            <List>


            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        onClick={handleDrawerToggle}
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"

                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        <Link to="/home"><button className='btn'>Home</button></Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Outlet></Outlet>

            </Box>
        </Box>
    );
}

DeashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DeashBoard;
