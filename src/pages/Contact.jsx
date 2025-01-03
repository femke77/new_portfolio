import ContactForm from "../components/form/ContactForm.jsx";
import { Box } from "@mui/material";

export default function Contact() {
  return (
    <>
      <Box sx={{ height: "90vh",marginTop: "5rem" }}>
        <ContactForm />
      </Box>
    </>
  );
}
