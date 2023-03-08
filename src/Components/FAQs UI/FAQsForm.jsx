import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react'
import TextFieldWrapper from '../Forms UI/FormElements/TextFieldWrapper';
const Yup = require("yup")


export const FAQS_FORM_VALIDATION = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    body: Yup.string().min(2, 'Too Short!').max(200, 'Too Long!').required('Required'),
})

const INITIAL_FORM_STATE = {
    name: '',
    email: '',
    body: '',
};

function FAQsForm({handleSubmit}) {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Container maxWidth="md">
                    <Box sx={{ mt: 5, mb: 8 }}>
                        <Formik
                            initialValues={{ ...INITIAL_FORM_STATE }}
                            validationSchema={FAQS_FORM_VALIDATION}
                            onSubmit={handleSubmit}
                        >
                            <Form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography>
                                            Your query:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextFieldWrapper
                                            name="name"
                                            label="Name"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextFieldWrapper
                                            name="email"
                                            label="Your Email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextFieldWrapper
                                            name="body"
                                            label="Body"
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

export default FAQsForm