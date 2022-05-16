import React from 'react';

// MaterialUI imports
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import uraniumLogo from "../uraniumLogo.jpg";

export default function HomepageInformation() {
    return (
        <Container style={{ 'marginTop': '2%', 'width': '100%' }}>
            <Grid container spacing={2}>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <h2 style={{ 'color': 'white', 'fontFamily': 'monospace', 'fontWeight': 'lighter' }}>
                        Each Uranic ERC-20 token is 1-to-1 pegged to the 1g of <span style={{ color: "#F1D142" }}>Uranium</span> metal
                    </h2>
                    <img src={uraniumLogo} alt="UraniumLogo" style={{ height: "160px", width: "160px" }} />
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </Container>
    );
}