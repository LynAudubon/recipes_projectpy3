import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import { useAuth0 } from '@auth0/auth0-react';

export default function NavBar() {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        {isAuthenticated && 
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to='/dashboard' style={{textDecoration:'none', color:'whitesmoke'}}>
                 <HomeIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             <Link to='/add-recipe' style={{textDecoration:'none', color:'whitesmoke'}}>
                <Button color="inherit">Add Recipe</Button>
            </Link>
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              logout({ returnTo: window.location.origin + '/' });
            }}
            sx={{ my: 2, display: "block" }}
          >
            Sign Out
          </Button>
        </Toolbar>
        }
        {!isAuthenticated &&
        <main style={{ padding: '1rem 2rem'}}>
        <Grid>
            <Grid container justifyContent="center">
              <Typography variant="h4" justifyContent="center">
                <span style={{paddingRight:'35px'}}>My Recipe Book</span>  <Button variant="contained" onClick={loginWithRedirect} >Sign In</Button>
              </Typography>
            </Grid>
        </Grid>
        </main>
        }
      </AppBar>
    </Box>
  );
}