import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import FAQsTabs from "../Components/FAQs UI/FAQsTabs";

function FAQsPage() {
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
      <FAQsTabs />
      <Footer />
    </>
  );
}

export default FAQsPage;
