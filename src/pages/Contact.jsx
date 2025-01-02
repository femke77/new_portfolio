import Layout from "../components/layouts/Layout.jsx";
import ContactForm from "../components/form/ContactForm.jsx";
import { Box } from "@mui/material";

export default function Contact() {
  return (
    <>
      <Box sx={{ height: "90vh",marginTop: "10rem" }}>
        <ContactForm />
      </Box>
    </>
  );
}
