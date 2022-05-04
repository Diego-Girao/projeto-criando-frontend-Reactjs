import React from "react";
import { Typography } from "@material-ui/core/";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 800,
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridGap: "100px",
        margin: "0 auto",
        marginTop:'50px'
    },
}));

const Contatos = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container xs={12} className={classes.root}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Mapa de Melbourne - Austrália"
                            height="180"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qot-TUZ2FacN61PlWLM4yZHbustO3cyHafwnn9ZKuJuR1X0EJvwkBDdxDJokJPM9iN8&usqp=CAU"
                            title="Loja Melbourne"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                Matriz - Melbourne, Austrália
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                Onde tudo começou, o nosso empreendimento dos
                                sonhos !!!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Mapa de Sydney - Austrália"
                            height="180"
                            image="https://map.viamichelin.com/map/carte?map=viamichelin&z=10&lat=-33.91807&lon=151.18323&width=550&height=382&format=png&version=latest&layer=background&debug_pattern=.*"
                            title="Loja Sydney"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                Loja 1 - Sydney, Austrália
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                A expansão do nosso empreendimento dos sonhos
                                !!!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Mapa de Brisbane - Austrália"
                            height="180"
                            image="https://map.viamichelin.com/map/carte?map=viamichelin&z=10&lat=-27.45309&lon=153.03315&width=550&height=382&format=png&version=latest&layer=background&debug_pattern=.*"
                            title="Loja Brisbane"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                Loja 2 - Brisbane, Austrália
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                A expansão do nosso empreendimento dos sonhos
                                !!!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Mapa de Hobart - Austrália"
                            height="180"
                            image="https://map.viamichelin.com/map/carte?map=viamichelin&z=10&lat=-42.85001&lon=147.29503&width=550&height=382&format=png&version=latest&layer=background&debug_pattern=.*"
                            title="Loja Hobart"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                Loja 3 - Hobart, Austrália
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                A expansão do nosso empreendimento dos sonhos
                                !!!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    );
};

export default Contatos;
