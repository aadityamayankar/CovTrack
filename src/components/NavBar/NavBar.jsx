import React,{useState} from 'react';
import {AppBar,Toolbar,Typography,Button,IconButton,List,ListItem,ListItemText,ListItemIcon,Divider,makeStyles,Drawer, Box} from '@material-ui/core';
import Clock from 'react-live-clock';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {RiVirusFill} from 'react-icons/ri';
import {FaReact} from 'react-icons/fa';
import {faPills,faPlusCircle,faHeartbeat,faPhone} from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.css';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    navText:{
      fontFamily:'Poppins',
    },
    time:{
      marginLeft: 'auto',
    },
    liveTime:{
      fontFamily:'Poppins'
    }
});

const NavBar = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')){
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            <ListItem button component="a" href="https://medhac.tech/" target="_blank">
              <ListItemIcon><FontAwesomeIcon icon={faPills}/></ListItemIcon>
              <ListItemText primary="Medhac" classes={{primary:classes.navText}}/>
            </ListItem>
            <ListItem button component="a" href="https://www.cowin.gov.in/" target="_blank">
              <ListItemIcon><FontAwesomeIcon icon={faPlusCircle}/></ListItemIcon>
              <ListItemText primary="CO-WIN" classes={{primary:classes.navText}}/>
            </ListItem>
            <ListItem button component="a" href="https://www.aarogyasetu.gov.in/" target="_black">
              <ListItemIcon><FontAwesomeIcon icon={faHeartbeat}/></ListItemIcon>
              <ListItemText primary="Aarogya Setu" classes={{primary:classes.navText}}/>
            </ListItem>
            <ListItem button >
              <ListItemIcon><FontAwesomeIcon icon={faPhone}/></ListItemIcon>
              <ListItemText primary="Emergency" classes={{primary:classes.navText}}/>
            </ListItem>
          </List>
          <Divider/>
          <List>
            <ListItem button component="a" href="#" target="_blank">
              <ListItemIcon><GitHubIcon/></ListItemIcon>
              <ListItemText primary="GitHub" classes={{primary:classes.navText}}/>
            </ListItem>
            <ListItem button component="a" href="https://www.linkedin.com/in/aaditya-mayankar-745740128/" target="_blank">
              <ListItemIcon><LinkedInIcon/></ListItemIcon>
              <ListItemText primary="LinkedIn" classes={{primary:classes.navText}}/>
            </ListItem>
            <ListItem button component="a" href="https://reactjs.org/" target="_blank">
              <ListItemIcon><FaReact size="27px"/></ListItemIcon>
              <ListItemText primary="Made with React" classes={{primary:classes.navText}}/>
            </ListItem>
          </List>
        </div>
      );
    

    return(
        <>
          <AppBar position="static" style={{background:'#222222',marginBottom:'3em'}} >
              <Toolbar>
                  {['left'].map((anchor) => (
                      <React.Fragment key={anchor}>
                      <IconButton edge="start" color="inherit" className={styles.menuButton} aria-label="menu" onClick={toggleDrawer(anchor, true)}>
                          <MenuIcon />
                      </IconButton>
                      <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                          {list(anchor)}
                      </Drawer>
                      </React.Fragment>
                  ))}
                  <Button color="inherit" href="#"><RiVirusFill className={styles.virusIcon} size="2em"/> <Typography className={classes.navText}>CovTrack</Typography></Button>
                  <Box className={classes.time}>
                    <Typography className={classes.liveTime}><Clock format={'dddd, MMMM Mo, YYYY, h:mm:ss A'} ticking={true} timezone={'Asia/Kolkata'} /></Typography>
                  </Box>
              </Toolbar>
          </AppBar>
        </>
    );
}

export default NavBar;