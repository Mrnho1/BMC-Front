import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';

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
    '01_name': 'Danilo Moraes',
    '01_job': 'Desenvolvedor Java Full Stack',

    '02_image': 'https://avatars.githubusercontent.com/u/123930982?v=4',
    '02_name': 'Gabriel Farias',
    '02_job': 'Desenvolvedor Java Full Stack',

    '03_image': 'https://avatars.githubusercontent.com/u/123910445?v=4',
    '03_name': 'Gustavo Santiago',
    '03_job': 'Desenvolvedor Java Full Stack',

    '04_image': 'https://user-images.githubusercontent.com/91226847/227216220-8761c94f-a161-467d-95c1-0942db54966f.jpeg',
    '04_name': 'Jennifer Cruz',
    '04_job': 'Desenvolvedor Java Full Stack',

    '05_image': 'https://avatars.githubusercontent.com/u/91226847?v=4',
    '05_name': 'Laise Farias',
    '05_job': 'Desenvolvedor Java Full Stack',

    '06_image': 'https://avatars.githubusercontent.com/u/110050225?v=4',
    '06_name': 'Lucas Marinho',
    '06_job': 'Desenvolvedor Java Full Stack',

    '07_image': 'https://avatars.githubusercontent.com/u/123839829?v=4',
    '07_name': 'Rebeca Damas',
    '07_job': 'Desenvolvedor Java Full Stack',


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
            <Grid item xs={3} sm={3} md={3}>
              <Avatar alt="" src={content['01_image']} className={classes.avatar} />
              <Typography variant="h6" component="h6" gutterBottom={true}>{content['01_name']}</Typography>
              <Typography variant="body1" color="textSecondary" component="span">{content['01_job']}</Typography>
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <Avatar alt="" src={content['02_image']} className={classes.avatar} />
              <Typography variant="h6" component="h6" gutterBottom={true}>{content['02_name']}</Typography>
              <Typography variant="body1" color="textSecondary" component="span">{content['02_job']}</Typography>
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <Avatar alt="" src={content['03_image']} className={classes.avatar} />
              <Typography variant="h6" component="h6" gutterBottom={true}>{content['03_name']}</Typography>
              <Typography variant="body1" color="textSecondary" component="span">{content['03_job']}</Typography>
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <Avatar alt="" src={content['04_image']} className={classes.avatar} />
              <Typography variant="h6" component="h6" gutterBottom={true}>{content['04_name']}</Typography>
              <Typography variant="body1" color="textSecondary" component="span">{content['04_job']}</Typography>
            </Grid>
            <Box mt={5} mb={5} />
            <Grid item xs={4} sm={4} md={4} spacing={4}>
              <Avatar alt="" src={content['05_image']} className={classes.avatar} />
              <Typography variant="h6" component="h6" gutterBottom={true}>{content['05_name']}</Typography>
              <Typography variant="body1" color="textSecondary" component="span">{content['05_job']}</Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Avatar alt="" src={content['06_image']} className={classes.avatar} />
              <Typography variant="h6" component="h6" gutterBottom={true}>{content['06_name']}</Typography>
              <Typography variant="body1" color="textSecondary" component="span">{content['06_job']}</Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Avatar alt="" src={content['07_image']} className={classes.avatar} />
              <Typography variant="h6" component="h6" gutterBottom={true}>{content['07_name']}</Typography>
              <Typography variant="body1" color="textSecondary" component="span">{content['07_job']}</Typography>
            </Grid>
          </Grid>
        </Box>

      </Container>
    </section>
  );
}


export default Team;