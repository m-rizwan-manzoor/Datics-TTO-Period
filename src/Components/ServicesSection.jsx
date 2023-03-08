import { Grid, Link, Typography } from '@mui/material'
import { Container, Box } from '@mui/system'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react'

function ServicesSection() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Box
              component="img"
              sx={{
                height: "calc(100% - 3em)",
                width: "calc(100% - 3em)"
              }}
              src="https://www.paypalobjects.com/marketing/web/us/home/BNPL-img.jpg"
              alt="Services-Image"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography variant='h3' gutterBottom>
              Buy now, pay later with Pay in 4
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Want something now but the sale ends before payday? Choose Pay in 4 at checkout with millions of online stores and split the cost into 4 interest-free payments.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Link href='#' color="info.light" sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>Learn how to Pay in 4 <ArrowForwardIcon sx={{ mb: -1 }} /></Link>
            </Box>
          </Grid>
        </Grid >
      </Container >
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} lg={6} order={{ xs: 2, lg: 1 }}>
            <Typography variant='h3' gutterBottom>
              Check out with crypto
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Access a new way to pay. Sign up for an account and spend crypto at millions of online stores with PayPal.
            </Typography>
            <Typography variant='caption' gutterBottom>
              Checking out with crypto is a taxable transaction. Fees and exchange rates will apply. Buying and selling cryptocurrency is subject to a number of risks and PayPal does not make any recommendations. Consult your tax advisor. Merchants are paid in fiat currency.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Link href='#' color="info.light" sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>Sign up<ArrowForwardIcon sx={{ mb: -1 }} /></Link>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} order={{ xs: 1, lg: 2 }}>
            <Box
              component="img"
              sx={{
                height: "calc(100% - 3em)",
                width: "calc(100% - 3em)"
              }}
              src="https://www.paypalobjects.com/marketing/web/us/home/crypto-img.jpg"
              alt="Services-Image"
            />
          </Grid>
        </Grid >
      </Container >
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Box
              component="img"
              sx={{
                height: "calc(100% - 3em)",
                width: "calc(100% - 3em)"
              }}
              src="https://www.paypalobjects.com/marketing/web/us/home/touchfree-img.jpg"
              alt="Services-Image"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography variant='h3' gutterBottom>
              Touch-free payments
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Leave the cash and cards at home. When it comes to paying with the app, the only thing you’ll need to reach for is your phone.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Link href='#' color="info.light" sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>Learn more about PayPal QR codes <ArrowForwardIcon sx={{ mb: -1 }} /></Link>
            </Box>
          </Grid>
        </Grid >
      </Container >
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} lg={6} order={{ xs: 2, lg: 1 }}>
            <Typography variant='h3' gutterBottom>
              Express yourself when you send money
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Explore creative ways to split the bill or send money with a friendly message, colorful theme, GIFs, and more.
            </Typography>
            <Typography variant='caption' gutterBottom>
              Send money now
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Link href='#' color="info.light" sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>Sign up<ArrowForwardIcon sx={{ mb: -1 }} /></Link>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} order={{ xs: 1, lg: 2 }}>
            <Box
              component="img"
              sx={{
                height: "calc(100% - 3em)",
                width: "calc(100% - 3em)"
              }}
              src="https://www.paypalobjects.com/marketing/web/us/home/sendmoney-img.jpg"
              alt="Services-Image"
            />
          </Grid>
        </Grid >
      </Container >
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Box
              component="img"
              sx={{
                height: "calc(100% - 3em)",
                width: "calc(100% - 3em)"
              }}
              src="https://www.paypalobjects.com/marketing/web/us/home/give-img.jpg"
              alt="Services-Image"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography variant='h3' gutterBottom>
              Give with PayPal
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Make a difference by supporting causes and fundraisers close to home and heart.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Link href='#' color="info.light" sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>Give through the app <ArrowForwardIcon sx={{ mb: -1 }} /></Link>
            </Box>
          </Grid>
        </Grid >
      </Container >
    </>
  )
}

export default ServicesSection