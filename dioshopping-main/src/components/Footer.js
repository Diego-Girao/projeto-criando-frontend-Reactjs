import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
    footer: {
        marginTop: "35px",
        marginBottom: "2px",
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <Grid xs={12} className={classes.footer}>
            <img
                src="./images/footer.jpg"
                width="100%"
                alt="Imagem de uma partida de futebol no rodapé da página"
            ></img>
        </Grid>
    );
};

export default Footer;
