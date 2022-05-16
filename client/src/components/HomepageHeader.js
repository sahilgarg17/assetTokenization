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
            backgroundColor: "#261D7F"
        }
    },
    title: {
        flexGrow: 1,
    },
    button: {
        "&:hover": {
            backgroundColor: "#261D7F"
        }
    },
    right: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "#261D7F"
        }
    }
}));

export default function Header() {
    const classes = useStyles();
    const [redirectPage, setRedirectPage] = useState(null);

    function loginPage() {
        setRedirectPage(<Redirect push to="/login" />);
    }

    function statusPage() {
        setRedirectPage(<Redirect push to="/status" />);
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
                                <img src={uraniumLogo} alt="UraniumLogo" style={{ height: "70px", width: "70px" }} />
                            </IconButton>
                        </Link>
                        <Typography variant="h6">Uranic Token</Typography>
                        <Button color="inherit" className={classes.right} onClick={statusPage}>Status</Button>
                        <Button color="inherit" className={classes.button} onClick={loginPage}>Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}