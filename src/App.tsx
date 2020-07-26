import React from 'react';
import './App.css';

import {
  Chip,
  Container,
  Grid,
  Link,
  Typography,
  Paper,
} from '@material-ui/core';
import {
  GitHub as GitHubIcon,
  Storage as StorageIcon,
  YouTube as YouTubeIcon,
  PictureAsPdf as PictureAsPdfIcon,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Link as ReactLink } from 'react-router-dom';

import { project, authors, affiliations, bibtex } from './variable';
import Header from './components/Headers';
import Title from './components/Title';
import Author from './components/Author';
import Banner from './components/Banner';
import Button from './components/Button';
import Footer from './components/Footer';

const useStyles = makeStyles((theme) => ({
  main: {
    textAlign: 'center',
    // backgroundImage: 'url(/marble_texture_m.jpg)',
    // backgroundSize: 'cover',  // this will stretch, any better solution?
  },
  titleHead: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    fontFamily: 'Source Serif Pro',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  bibtexSpan: {
    backgroundColor: theme.palette.grey[200],
    marginTop: theme.spacing(2),
    padding: theme.spacing(1, 4),
  },
}));

const sections = [
  { title: 'Home', url: '#' },
  { title: 'Abstract', url: '#abstract' },
  { title: 'Paper', url: '#paper' },
  { title: 'Download', url: '#download' },
  { title: 'Results', url: '#results' },
];

function App(): React.ReactElement {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Header
        title={project.paperName}
        sections={sections}
        githubPage={project.githubPage}
      />
      <Container maxWidth="lg">
        <Typography
          component="h1"
          variant="h3"
          gutterBottom
          className={classes.titleHead}
        >
          Domain-Specific Mappings <br />
          for Generative Adversarial Style Transfers <br />
          <Chip label="ECCV 2020" />
          <Chip label="Style Transfer" />
        </Typography>
        <Author authors={authors} affiliations={affiliations} />
        <Banner
          elevation={0}
          imageSrc={`${process.env.PUBLIC_URL}/images/teaser.png`}
        />
        <Button text="Download Code / Results" link="#download" />

        <Title anchor="abstract" name="Abstract" />
        <Typography component="h3" variant="h6" align="left" paragraph>
          Style transfer generates an image whose content comes from one image
          and style from the other. Image-to-image translation approaches with
          disentangled representations have been shown effective for style
          transfer between two image categories. However, previous methods often
          assume a shared domain-invariant content space, which could compromise
          the content representation power. For addressing this issue, this
          paper leverages domain-specific mapping functions for remapping latent
          features in the shared content space to domain-specific content
          spaces. This way, images can be encoded more properly for style
          transfer. Experiments show that the proposed method outperforms
          previous style transfer methods, particularly on challenging scenarios
          that would require semantic correspondences between images.
        </Typography>

        <Title anchor="paper" name="Paper" />
        <Chip label="Arxiv" variant="outlined" color="primary" />
        <Grid item>
          <Link href={project.arxivLink} target="_blank" rel="noopener">
            <Banner
              metadata={{ title: project.paperThumbTitle }}
              elevation={0}
              imageSrc={process.env.PUBLIC_URL + project.paperThumbImage}
            />
          </Link>
        </Grid>

        <Title anchor="citation" name="Citation" />
        <Typography align="left" variant="h6" color="inherit" gutterBottom>
          {`Hsin-Yu Chang, Zhixiang Wang, and Yung-Yu Chuang, "Domain-Specific
          Mappings for Generative Adversarial Style Transfers", in Proceedings
          of the European Conference on Computer Vision (ECCV), 2020`}
        </Typography>
        <Chip label="BibTeX" variant="outlined" color="primary" />
        <Paper elevation={0} className={classes.bibtexSpan}>
          <Typography align="left" variant="h6" color="inherit" gutterBottom>
            <pre style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
              {bibtex}
            </pre>
          </Typography>
        </Paper>

        <Title anchor="download" name="Download" />
        <Grid container justify="center" spacing={6}>
          <Grid item>
            <Link href={project.githubPage} target="_blank" rel="noopener">
              <GitHubIcon color="action" style={{ fontSize: 60 }} />
              <Typography align="center" variant="h6" color="inherit">
                Code
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href={project.youtubeLink} target="_blank" rel="noopener">
              <YouTubeIcon color="action" style={{ fontSize: 60 }} />
              <Typography align="center" variant="h6" color="inherit">
                Video
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link
              href={project.supplementaryLink}
              target="_blank"
              rel="noopener"
            >
              <PictureAsPdfIcon color="action" style={{ fontSize: 60 }} />
              <Typography
                align="center"
                variant="h6"
                color="inherit"
                gutterBottom
              >
                Supplementary
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href={project.demoZipLink} target="_blank" rel="noopener">
              <StorageIcon color="action" style={{ fontSize: 60 }} />
              <Typography
                align="center"
                variant="h6"
                color="inherit"
                gutterBottom
              >
                Demo Results
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href={project.resultZipLink} target="_blank" rel="noopener">
              <StorageIcon color="action" style={{ fontSize: 60 }} />
              <Typography
                align="center"
                variant="h6"
                color="inherit"
                gutterBottom
              >
                More Results
              </Typography>
            </Link>
          </Grid>
        </Grid>

        <Title anchor="results" name="Results (Demo website)" />
        <div>
          <ReactLink to="/demo">
            <Typography variant="h6" color="inherit" gutterBottom>
              <Banner
                elevation={0}
                imageSrc={`${process.env.PUBLIC_URL}/images/style_inter.gif`}
              />
              {/* a dummy link stuff */}
              <Link href="/demo" target="_blank" rel="noopener">
                Demo Website
              </Link>
            </Typography>
          </ReactLink>
        </div>

        <Title anchor="acknowledgments" name="Acknowledgments" />
        <Typography variant="body1" align="left" paragraph>
          We thank <Link href="https://github.com/leVirve">Hung-Jin Lin</Link>{' '}
          for providing{' '}
          <Link href="https://github.com/leVirve/projectize-d">
            this template!
          </Link>{' '}
          <br />
          We thank <Link href="https://github.com/HsinYingLee/DRIT">
            DRIT
          </Link>{' '}
          and{' '}
          <Link href="https://github.com/junyanz/pytorch-CycleGAN-and-pix2pix">
            CycleGAN
          </Link>{' '}
          for providing their datasets. <br />
          Part of our codes are based on{' '}
          <Link href="https://github.com/NVlabs/MUNIT">MUNIT</Link> and{' '}
          <Link href="https://github.com/HelenMao/MSGAN">MSGAN</Link>.
        </Typography>

        <Footer
          authorName={project.authorName}
          githubPage={project.authorGithubProfile}
        />
      </Container>
    </div>
  );
}

export default App;
