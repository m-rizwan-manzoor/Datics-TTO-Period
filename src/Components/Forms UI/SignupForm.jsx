import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react'
import SelectWrapper from './FormElements/SelectWrapper';
import TextFieldWrapper from './FormElements/TextFieldWrapper';
import { SIGNUP_FORM_VALIDATION } from './ValidationSchema';
import countries from '../../Data/countries.json';
import DateTimePickerWrapper from './FormElements/DateTimePickerWrapper';
import CheckBoxWrapper from './FormElements/CheckBoxWrapper';

const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    dateOfBirth: '',
    termsOfService: false
};

function SignupForm() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Container maxWidth="md">
                    <Box sx={{ mt: 5, mb: 8 }}>
                        <Formik
                            initialValues={{ ...INITIAL_FORM_STATE }}
                            validationSchema={SIGNUP_FORM_VALIDATION}
                            onSubmit={values => console.log(values)}
                        >
                            <Form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Box sx={{
                                            background: "url(https://www.paypalobjects.com/images/shared/paypal-logo-129x32.svg)",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPositionX: "center",
                                            height: "32px",
                                            width: "100%",
                                        }} />

                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>
                                            Your details
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextFieldWrapper
                                            name="firstName"
                                            label="First Name"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextFieldWrapper
                                            name="lastName"
                                            label="Last Name"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextFieldWrapper
                                            name="email"
                                            label="Email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextFieldWrapper
                                            name="phone"
                                            label="Phone"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextFieldWrapper
                                            name="addressLine1"
                                            label="Address Line 1"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextFieldWrapper
                                            name="addressLine2"
                                            label="Address Line 2"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextFieldWrapper
                                            name="city"
                                            label="City"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextFieldWrapper
                                            name="state"
                                            label="State"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <SelectWrapper
                                            name="country"
                                            label="Country"
                                            options={countries}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <DateTimePickerWrapper
                                            name="dateOfBirth"
                                            label="Date of Birth"
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <CheckBoxWrapper
                                            name="termsOfService"
                                            label="I agree"
                                            legend="Terms Of Service"
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button variant='contained' fullWidth type='submit'>Submit</Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        </Formik>
                    </Box>
                </Container>
            </Grid>
        </Grid>
    )
}

export default SignupForm