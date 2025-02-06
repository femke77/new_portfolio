import ContactForm from '../components/form/ContactForm.jsx';
import { Box } from '@mui/material';

export default function Contact() {
  return (
    <>
      <Box id='contact' sx={{ height: '90vh', marginTop: '3.5rem' }}>
        <ContactForm />
      </Box>
    </>
  );
}
