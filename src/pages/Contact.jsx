import ContactForm from "../components/form/ContactForm.jsx";
import { Box } from "@mui/material";
import { useEffect } from "react";


export default function Contact() {

  useEffect(() => {   
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  }, []);

  return (
    <Box
      id="contact"
      sx={{
        height: "90vh",
        marginTop: "3.5rem",
        marginLeft: { xs: "-3rem", sm: "0rem" },
      }}
    >
      <ContactForm />
    </Box>
  );
}
