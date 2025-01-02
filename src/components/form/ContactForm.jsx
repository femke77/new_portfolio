import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const styles = {
  contactForm: {
    width: '100%'
  },
  contactFrame: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '30px',
    marginTop: '20px',
    width: '100%',
    maxWidth: '600px'
  }
};

const ContactForm = () => {
  const form = useRef();

  // Form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zhrs8kc', 'template_27zq3kh', form.current, {
        publicKey: 'GXLJsHQlL6ZMfdqkl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setNotificationSeverity('success');
          setNotificationMessage('Email sent successfully!');
          setNotification(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setNotificationSeverity('error');
          setNotificationMessage('Failed to send email.');
          setNotification(true);
        },
      );
  };

  const handleChange = input => event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };;

  return (
    <Box>
    <CssBaseline />
      <Typography variant="h4" align="center" component="h1" sx={{marginTop: '3rem'}} gutterBottom>
        {'Contact Form'.toUpperCase()}
      </Typography>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item style={styles.contactFrame}>
          <form
            id="contact-form"
            ref={form}
            style={styles.contactForm}
            onSubmit={sendEmail}
          >
            <Grid item>
              <TextField
                fullWidth
                required
                id="name"
                label="Name"
                name="user_name"
                onChange={handleChange("userName")}
                margin="normal"
                color='primary'
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                required
                id="email"
                label="Email"
                name="user_email"
                onChange={handleChange("email")}
                margin="normal"
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                required
                id="message"
                label="Message"
                name="message"
                onChange={handleChange("message")}
                margin="normal"
                multiline
                rowsMax="4"
              />
            </Grid>
            <Grid container direction="row" spacing={2} style={{ marginTop: 20 }}>
              <Grid item>
                <Button
                  type="reset"
                  variant="contained"
                  color="default"
                >
                  RESET
                </Button>
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  value="send"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <Snackbar open={notification} autoHideDuration={6000} onClose={handleClose}>
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