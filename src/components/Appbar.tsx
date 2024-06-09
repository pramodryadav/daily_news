import React,{useState,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { Link, Outlet, useNavigate } from 'react-router-dom';

import { InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { setUserData } from '../Redux/userSlice';
import { setSearchText } from '../Redux/SearchSlice';
import { RootState } from '../Redux/store';
import brandLogo from "../assets/daily-news.jpg";

const pages = [{ title: 'Favourites', path: "/fav" }];
const settings = ['Logout'];

function ResponsiveAppBar() {
    
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const profileData = useAppSelector((state:RootState)=>state.user);
    const searchText = useAppSelector((state:RootState)=>state.search.value);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        let user = localStorage.getItem("userData");
        user = user ? JSON.parse(user) : {}
        
        dispatch(setUserData(user))
    },[])


    const navigate = useNavigate();

    const onChangeSearchText = (e:React.ChangeEvent<HTMLInputElement>)=>{
        
         dispatch(setSearchText(e.target.value))

    }


    const handleOpenNavMenu = (event:any) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event:any) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const logout = () => {
        localStorage.removeItem("userData");
        navigate("/login")
        dispatch(setUserData({}))
        setAnchorElUser(null);
    }

    return (
        <>
        <AppBar position="fixed">

            <Toolbar >
                <img src={brandLogo} width="45px" height="auto" alt="" />

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                                <Link style={{ textDecoration: 'none' }} to={page.path}>
                                    <Typography textAlign="center">{page.title}</Typography>
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                <Link className="linkStyle" to="/all">
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            ml: 2,
                          
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Daily News
                    </Typography>
                </Link>

               
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (

                        <Button
                            key={page.title}
                            onClick={() => navigate(page.path)}

                            sx={{ my: 2, color: 'white', display: 'block', fontSize: 18 }}
                        >
                            {page.title}
                        </Button>

                    ))}
                </Box>

                <Box sx={{flexGrow: 3,display:'flex',justifyContent:'center'}}>
                    <TextField 
                    color="search"
                    value={searchText}
                    onChange={onChangeSearchText}
                    placeholder='search ' 
                    sx={{maxWidth:"350px"}}
                    defaultValue=""
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <Search sx={{color:'#fff'}}/>
                        </InputAdornment>,
                      }}
                    />
                </Box>

                <Box sx={{ flexGrow: 1,display:"flex",justifyContent:'end' }}>
                    <Box display="flex" columnGap={2} >
                       
                        <Tooltip title={profileData?.given_name}>

                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            
                                <Avatar alt={profileData?.given_name} src="" />
                            </IconButton>
                        </Tooltip>
                    </Box>

                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={logout}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
           
        </AppBar>
         <Outlet/>
         </>
    );
}
export default ResponsiveAppBar;
