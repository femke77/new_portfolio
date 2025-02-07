import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const styles = {
  contactForm: {
    width: '100%',
  },
  contactFrame: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '30px',
    marginTop: '20px',
    width: '100%',
    maxWidth: '600px',
  },
};

const ContactForm = () => {
  const form = useRef();

  // Form data
  const [formData, setFormData] = useState({
    user_name: '',
    email: '',
    message: '',
    company: '',
  });

  // Notification
  const [notification, setNotification] = useState(false);
  const [notificationSeverity, setNotificationSeverity] = useState('success');
  const [notificationMessage, setNotificationMessage] = useState('');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotification(false);
  };

  const reset = () => {
    setFormData({
      user_name: '',
      email: '',
      message: '',
      company: '',
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormData({
      user_name: '',
      email: '',
      message: '',
      company: '',
    });
    emailjs
      .sendForm('service_l2gvv9r', 'template_itb18q5', form.current, {
        publicKey: 'U1BX8LG4qkcj2zcW3',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setNotification(true);
          setNotificationSeverity('success');
          setNotificationMessage('Email sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setNotification(true);
          setNotificationSeverity('error');
          setNotificationMessage('Failed to send email.');
        },
      );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Box>
      <CssBaseline />
      <Typography
        variant='h4'
        align='center'
        component='h1'
        sx={{ marginTop: '3rem' }}
        gutterBottom
      >
        {'Contact Me!'.toUpperCase()}
      </Typography>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid item style={styles.contactFrame}>
          <form
            id='contact-form'
            ref={form}
            style={styles.contactForm}
            onSubmit={sendEmail}
          >
            <Grid item>
              <TextField
                fullWidth
                required
                value={formData.user_name}
                id='user_name'
                label='Name'
                name='user_name'
                onChange={handleChange}
                margin='normal'
                color='primary'
                autoComplete='name'
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                value={formData.company}
                id='company'
                label='Company'
                name='company'
                onChange={handleChange}
                margin='normal'
                color='primary'
                autoComplete='organization'
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                required
                type='email'
                value={formData.email}
                id='email'
                label='Email'
                name='email'
                onChange={handleChange}
                margin='normal'
                autoComplete='email'
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                required
                value={formData.message}
                id='message'
                label='Message'
                name='message'
                onChange={handleChange}
                margin='normal'
                multiline
                rows='4'
              />
            </Grid>
            <Grid
              container
              direction='row'
              spacing={2}
              style={{ marginTop: 20 }}
            >
              <Grid item>
                <Button
                  type='reset'
                  variant='contained'
                  color='default'
                  onClick={reset}
                >
                  RESET
                </Button>
              </Grid>
              <Grid item>
                <Button
                  type='submit'
                  value='send'
                  variant='contained'
                  color='primary'
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <Snackbar
        open={notification}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={notificationSeverity}
          sx={{ width: '100%' }}
        >
          {notificationMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
