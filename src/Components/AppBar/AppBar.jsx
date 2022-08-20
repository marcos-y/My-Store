import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import icon from '../../Images/user2.png';
import {
  Link,
  useNavigate
} from "react-router-dom";
import ModalLogin from '../../Components/ModalLogin/ModalLogin';
import ModalCart from '../../Components/ModalCart/ModalCart';
import profileImage from '../../Images/ed.jpg';

const ResponsiveAppBar = () => {

  //Verify from storage if USER IS LOGGED
  const isLogged = JSON.parse(sessionStorage.getItem('isLogged'));

  //Public pages
  const pages = ['smartphones', 'computers', 'drones', isLogged ? null : 'Create Account'];

  //Private pages
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //Modal Cart
  const [openModalCart, setOpenModalCart] = React.useState(false);
  const handleOpenModalCart = () => setOpenModalCart(true);
  const handleCloseModalCart = () => setOpenModalCart(false);

  //Modal Login
  const [openModalLogin, setOpenModalLogin] = React.useState(false);
  const handleOpenModalLogin = () => setOpenModalLogin(true);
  const handleCloseModalLogin = () => setOpenModalLogin(false);


  let navigate = useNavigate();
  
  //Logout user
  const handleClickLogout = () => {
    sessionStorage.setItem('isLogged', false);
    setAnchorElUser(null);
    navigate('/');
  }

  //Navigate to dashboard
  const openDashboard = () => {
    navigate('/dashboard');
  };

  //Navigate to profile
  const openProfile = () => {
    navigate('/profile');
  }

  //Navigate to account settings
  const openAccount = () => {
    navigate('/account');
  }

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                MyStore
              </Typography>
            </Link>
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
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MyStore
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link key={page} style={{ textDecoration: 'none' }} to={page != 'Create Account' ? `/${page}` : "/create-account"}>
                  <Button
                    key={page}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenModalCart}>
                <ShoppingCartIcon fontSize="large"></ShoppingCartIcon>
              </IconButton>
              <Tooltip title="Login">
                <IconButton onClick={isLogged ? handleOpenUserMenu : handleOpenModalLogin} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={isLogged ? profileImage : icon} />
                </IconButton>
              </Tooltip>
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
                  <MenuItem key={setting} onClick={setting == 'Logout' ? handleClickLogout : (setting == 'Profile' ? openProfile :
                    (setting == 'Account' ? openAccount :
                      (setting == 'Dashboard' ? openDashboard : handleCloseUserMenu)
                    ))}>
                    <Typography key={setting} textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <ModalCart handleOpen={handleOpenModalCart} handleClose={handleCloseModalCart} open={openModalCart}/>
      <ModalLogin handleOpen2={handleOpenModalLogin} handleClose2={handleCloseModalLogin} open2={openModalLogin}/>
    </>
  );
};
export default ResponsiveAppBar;
