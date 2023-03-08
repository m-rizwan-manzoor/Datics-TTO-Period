import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { Grid, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import { useFAQDetails } from "../hooks/useFAQDetails";

function FAQsDetails() {
  const { id } = useParams();
  const faqData = useFAQDetails(id);

  return (
    <>
      <NavBar />
      <Box
        sx={{
          background:
            "#142c8e url(https://www.paypalobjects.com/marketing/web/shared/qrc-sms/background-swirls.png);",
          backgroundPosition: "bottom",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          mx: 0,
          mb: 10,
          pt: 5,
          color: "#fff",
        }}
      >
        <Container>
          <Stack direction={{ xs: "column", lg: "row" }} spacing={5}>
            <Typography
              lineHeight={2.5}
              variant="h1"
              sx={{ fontWeight: "regular", width: { sx: "100%", md: "75%" } }}
            >
              FAQs
            </Typography>

            <Box
              component="img"
              sx={{
                height: "calc(100% - 20rem)",
                // width: "calc(100% - 10rem)",
              }}
              src="https://www.paypalobjects.com/digitalassets/c/website/marketing/emea/gb/en/how-to-use-paypal-here/faqs/faq-header.png"
              alt="Hero-Image"
            />
          </Stack>
        </Container>
      </Box>
      <Box>
        <Box borderBottom="0.1px solid rgb(231, 231, 231)" marginBottom={4}>
          <Container maxWidth="lg" sx={{ mb: 5 }}>
            <Grid container alignItems="center">
              <Grid item xs={10}>
                <Typography variant="h5" gutterBottom>
                  {faqData.id}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {faqData.name}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {faqData.email}
                </Typography>
                <Typography variant="body2" gutterBottom marginTop={3}>
                  {faqData.body}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default FAQsDetails;
