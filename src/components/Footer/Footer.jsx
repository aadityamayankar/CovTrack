import React from 'react';
import {Box, IconButton, Typography} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <Box className={styles.container}>
                <hr style={{backgroundColor:'rgb(255, 255, 255)'}}/>
                <IconButton href="https://github.com/aadityamayankar/CovTrack" target="_blank">
                    <GitHubIcon/>
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/aaditya-mayankar-745740128/" target="_blank">
                    <LinkedInIcon/>
                </IconButton>
                <Typography className={styles.footText}>&copy; CovTrack. All rights reserved.</Typography>
            </Box>
        </>
    );
};
export default Footer;