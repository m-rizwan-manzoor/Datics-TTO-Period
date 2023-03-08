import { Grid, Link, Stack, styled, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

const FooterLink = styled(Link)(() => ({
  lineHeight: 2,
  marginRight: 25,
  fontWeight: "bold",
  fontSize: "16px",
  color: "#001C64",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline"
  }
}))

function Footer() {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{
          mb: 4,
          background: "url(https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-color.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "left",
          height: "50px",
          width: "100%",
        }} />
        <Stack container direction={{ xs: "column", lg: "row" }} marginBottom={3} justifyContent="space-between">
          <Grid container>
            <FooterLink href='#' >Help</FooterLink>
            <FooterLink href='#' >Contact</FooterLink>
            <FooterLink href='#' >Fees</FooterLink>
            <FooterLink href='#' >Security</FooterLink>
            <FooterLink href='#' >Apps</FooterLink>
            <FooterLink href='#' >Shop</FooterLink>
            <FooterLink href='#' >Enterprise</FooterLink>
            <FooterLink href='#' >Partners</FooterLink>
            <FooterLink href='#' >Feedback</FooterLink>
          </Grid>
          <Link href='#'>
            <Box
              component="img"
              src="https://cdn-icons-png.flaticon.com/128/330/330459.png"
              alt="country-icon"
              height="25px"
              width="25px"
            />
          </Link>
        </Stack>
        <hr />
        <Grid container justifyContent="space-between" marginTop={2} marginBottom={10}>
          <Grid container item xs={12} lg={6}>
            <FooterLink href='#' >About</FooterLink>
            <FooterLink href='#' >Newsroom</FooterLink>
            <FooterLink href='#' >Jobs</FooterLink>
            <FooterLink href='#' >Investor Relations</FooterLink>
            <FooterLink href='#' >Values in Action</FooterLink>
            <FooterLink href='#' >Public Policy</FooterLink>
          </Grid>
          <Grid container item xs={12} lg={5} justifyContent={{ xs: "flex-start", lg: "flex-end" }}>
            <Grid item xs={12} lg={3} justifyContent={{ xs: "flex-start", lg: "flex-end" }}>
              <Typography variant='body2' lineHeight={2}>© 1999–2023</Typography>
            </Grid>
            <FooterLink href='#' >Accessibility</FooterLink>
            <FooterLink href='#' >Privacy</FooterLink>
            <FooterLink href='#' >Cookies</FooterLink>
            <FooterLink href='#' sx={{ marginRight: 0 }}>Legal</FooterLink>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Footer