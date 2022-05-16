import React, { useState } from 'react';

// MaterialUI imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import uraniumLogo from "../uraniumLogo.jpg";

// React Router
import { Link, Redirect } from "react-router-dom";

// Firebase
import app from "../firebase/firebase";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        background: '#261D7F'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        "&:hover": {
            backgroundColor: "#282c34"
        }
    },
    title: {
        flexGrow: 1,
    },
    right: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "#282c34"
        }
    }
}));

export default function AdminHeader() {
    const classes = useStyles();
    const [redirectPage, setRedirectPage] = useState(null);

    function logout() {
        app.auth().signOut();
        setRedirectPage(<Redirect push to="/" />);
    }

    if (redirectPage != null) {
        return redirectPage;
    }
    else {
        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <Link to="/">
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <img src={uraniumLogo} alt="UraniumLogo" style={{ height: "60px", width: "60px" }} />
                            </IconButton>
                        </Link>
                        <Typography variant="h6">Uranic Token</Typography>
                        <Button color="inherit" className={classes.right} onClick={logout}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}