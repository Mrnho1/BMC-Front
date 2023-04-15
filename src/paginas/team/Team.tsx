import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link, redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing(5)
    },
}));

function Team() {
    const classes = useStyles();

    const content = {
        'badge': 'Equipe',
        'header-p1': 'Olá, Seja bem vindo(a),',
        'header-p2': 'conheça nossa equipe',
        'description': 'Equipe de desenvolvimento do projeto Bem Me Care',

        '01_image': 'https://avatars.githubusercontent.com/u/87100085?v=4',
        '01_name': 'Danilo Morais',
        '01_job': 'Desenvolvedor Java Full Stack',
        '01_link': 'www.github.com/danilomorais',
        

        '02_image': 'https://avatars.githubusercontent.com/u/123910445?v=4',
        '02_name': 'Gustavo Santiago',
        '02_job': 'Desenvolvedor Java Full Stack',
        '02_link': 'www.github.com/gustavosantiago',

        '03_image': 'https://user-images.githubusercontent.com/91226847/227216220-8761c94f-a161-467d-95c1-0942db54966f.jpeg',
        '03_name': 'Jennifer Cruz',
        '03_job': 'Desenvolvedor Java Full Stack',
        '03_link': 'www.github.com/jennifercruz',

        '04_image': 'https://avatars.githubusercontent.com/u/91226847?v=4',
        '04_name': 'Laise Farias',
        '04_job': 'Desenvolvedor Java Full Stack',
        '04_link': 'www.github.com/laifrance',

        '05_image': 'https://avatars.githubusercontent.com/u/123930982?v=4',
        '05_name': 'Gabriel Farias',
        '05_job': 'Desenvolvedor Java Full Stack',
        '05_link': 'www.github.com/gabrielfarias',

        '06_image': 'https://avatars.githubusercontent.com/u/123839829?v=4',
        '06_name': 'Rebeca Damas',
        '06_job': 'Desenvolvedor Java Full Stack',
        '06_link': 'www.github.com/rebecadamasc',

        '07_image': 'https://avatars.githubusercontent.com/u/110050225?v=4',
        '07_name': 'Lucas Marinho',
        '07_job': 'Desenvolvedor Java Full Stack',
        '07_link': 'www.github.com/lucasmarinho',


    };


    return (
        <section>
            <Container maxWidth="lg">
                <Box pt={6} pb={11} textAlign="center">
                    <Box mb={8}>
                        <Container maxWidth="sm">
                            <Typography variant="overline" color="textSecondary" paragraph={true}>{content['badge']}</Typography>
                            <Typography variant="h3" component="h2" gutterBottom={true}>
                                <Typography variant="h3" component="span" color="primary">{content['header-p1']} </Typography>
                                <Typography variant="h3" component="span">{content['header-p2']}</Typography>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
                        </Container>
                    </Box>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={3} md={3}>
                            <Avatar alt="" src={content['01_image']} className={classes.avatar} />
                            <Typography variant="h6" component="h6" gutterBottom={true}>{content['01_name']}</Typography>
                            <p>
                                <GitHubIcon 
                                onClick={() => window.open(content['01_link'], '_blank')}   
                                />
                            </p>
                            <Typography variant="body1" color="textSecondary" component="span">{content['01_job']}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3}>
                            <Avatar alt="" src={content['02_image']} className={classes.avatar} />
                            <Typography variant="h6" component="h6" gutterBottom={true}>{content['02_name']}</Typography>
                            <p>
                                <GitHubIcon 
                                onClick={() => window.open(content['02_link'], '_blank')}
                                />
                            </p>
                            <Typography variant="body1" color="textSecondary" component="span">{content['02_job']}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3}>
                            <Avatar alt="" src={content['03_image']} className={classes.avatar} />
                            <Typography variant="h6" component="h6" gutterBottom={true}>{content['03_name']}</Typography>
                            <p>
                                <GitHubIcon 
                                onClick={() => window.open(content['03_link'], '_blank')}
                                />

                            </p>
                            <Typography variant="body1" color="textSecondary" component="span">{content['03_job']}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3}>
                            <Avatar alt="" src={content['04_image']} className={classes.avatar} />
                            <Typography variant="h6" component="h6" gutterBottom={true}>{content['04_name']}</Typography>
                            <p>
                                <GitHubIcon 
                                onClick={() => window.open(content['04_link'], '_blank')}
                                />
                               
                            </p>
                            <Typography variant="body1" color="textSecondary" component="span">{content['04_job']}</Typography>
                        </Grid>
                        <Box mt={5} mb={5} />
                        <Grid item xs={12} sm={4} md={3} spacing={5}>
                            <Avatar alt="" src={content['05_image']} className={classes.avatar} />
                            <Typography variant="h6" component="h6" gutterBottom={true}>{content['05_name']}</Typography>
                            <p>
                                <GitHubIcon 
                                onClick={() => window.open(content['05_link'], '_blank')}
                                />
                            </p>
                            <Typography variant="body1" color="textSecondary" component="span">{content['05_job']}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <Avatar alt="" src={content['06_image']} className={classes.avatar} />
                            <Typography variant="h6" component="h6" gutterBottom={true}>{content['06_name']}</Typography>
                            <p>
                                <GitHubIcon 
                                onClick={() => window.open(content['06_link'], '_blank')}
                                />
                            </p>
                            <Typography variant="body1" color="textSecondary" component="span">{content['06_job']}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <Avatar alt="" src={content['07_image']} className={classes.avatar} />
                            <Typography variant="h6" component="h6" gutterBottom={true}>{content['07_name']}</Typography>
                            <p>
                                <GitHubIcon
                                onClick={() => window.open(content['07_link'], '_blank')}
                                />
                            </p>
                            <Typography variant="body1" color="textSecondary" component="span">{content['07_job']}</Typography>
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </section>
    );
}


export default Team;