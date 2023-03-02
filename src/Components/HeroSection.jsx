import { Button, FormControl, Grid, ImageListItem, Input, InputAdornment, InputLabel, Link, mobileStepperClasses, OutlinedInput, Stack, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

function HeroSection() {
  return (
    <Box sx={{
      background: "#142c8e url(https://www.paypalobjects.com/marketing/web/shared/qrc-sms/background-swirls.png);",
      backgroundPosition: "bottom",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      mx: 0, mb: 2, pt: 5, color: "#fff",
    }}>
      <Container >
        <Typography variant='h1' sx={{ fontWeight: 'regular', width: { sx: '100%', md: "75%" } }}>The New PayPal app is here</Typography>
        <Stack direction={{ xs: "column", lg: "row" }} spacing={5}>
          <Box>
            <Box sx={{ mt: 3, mb: 5 }}>
              <Link href='#' color="info.light">Learn more about the new features <ArrowForwardIcon sx={{ mb: -1 }} /></Link>
            </Box>
            <Typography sx={{ fontWeight: "bold", mb: 5, display: { xs: 'none', md: 'block' } }}>Scan the code or enter your number to get the app.</Typography>
            <Stack direction="row" sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Box sx={{ alignItems: "top" }}>
                <img
                  src="https://www.paypalobjects.com/marketing/web/us/en/home/qr-code-us-home-hero.svg"
                  alt="QR-Code-Image"
                />
              </Box>
              <Stack direction="column" sx={{ ml: 5, pl: 5, borderLeft: 1, borderColor: "#9e9e9e" }}>
                <FormControl variant="standard">
                  <InputLabel sx={{ mt: -3, color: "#fff" }} htmlFor="phone-number">
                    Phone Number
                  </InputLabel>
                  <OutlinedInput
                    sx={{ bgcolor: "#fff" }}
                    id="phone-number"
                    startAdornment={
                      <InputAdornment position="start">
                        <PhoneAndroidIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <Button variant='contained' fullWidth={false} disableElevation sx={{
                  mt: 2, px: 4, py: 1.5,
                  borderRadius: 10,
                  width: "fit-content",
                  textTransform: "capitalize",
                  color: "#212121",
                  bgcolor: "#F9B822",
                  "&:hover": {
                    bgcolor: "#eaa91e",
                  },
                }}>Send Link</Button>
                <Typography variant="caption" sx={{ mt: 2, }}>By clicking Send Link you agree to receive a text message with a link to the PayPal app. Message and data rates may apply.</Typography>
              </Stack>
            </Stack>
          </Box>

          <Box
            component="img"
            src="https://www.paypalobjects.com/marketing/web/shared/qrc-sms/device-hero.png"
            alt="Hero-Image"
          />
        </Stack>
      </Container>
    </Box>
  )
}

export default HeroSection