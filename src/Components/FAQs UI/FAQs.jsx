import { Box, Button, Container, Grid, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function FAQs({ id, name, body }) {
    return (
        <>
            <Box >
                <Box borderBottom="0.1px solid rgb(231, 231, 231)" marginBottom={4}>
                    <Container maxWidth="lg" sx={{ mb: 5 }}>
                        <Grid container alignItems="center">
                            <Grid item xs={10}>
                                <Typography variant="h5" gutterBottom>
                                    {id}
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    {name}
                                </Typography>
                                <Typography variant="body2" gutterBottom marginTop={3}>
                                    {body}
                                </Typography>
                                <NavLink to={`/faqs/${id}`} style={{ textDecoration: "none" }}>
                                    <Button
                                        variant="contained"
                                        fullWidth={false}
                                        disableElevation
                                        sx={{
                                            mt: 2,
                                            px: 4,
                                            py: 1.5,
                                            borderRadius: 10,
                                            width: "fit-content",
                                            textTransform: "capitalize",
                                            color: "#212121",
                                            bgcolor: "#F9B822",
                                            "&:hover": {
                                                bgcolor: "#eaa91e",
                                            },
                                        }}
                                    >
                                        Go to details
                                    </Button>
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </>
    )
}

export default FAQs