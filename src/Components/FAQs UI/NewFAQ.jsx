import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query';
import FAQsForm from './FAQsForm';

function createFAQ({ name, email, body }) {
    return axios
        .post("http://localhost:5000/faqs", {
            name,
            email,
            body,
            postId: 7,
        })
        .then((res) => res.data);
}

function NewFAQ() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const queryClient = useQueryClient()
    const createPostMutation = useMutation({
        mutationFn: createFAQ,
        onSuccess: data => {
            queryClient.setQueryData(["faqs", data.id], data)
            queryClient.invalidateQueries(["faqs"], { exact: true })
            setIsSubmitted(true)
        },
    })

    function submitHandler(values) {
        createPostMutation.mutate({
            name: values.name,
            email: values.email,
            body: values.body
        })
    }

    return (
        <>
            {createPostMutation.isError && JSON.stringify(createPostMutation.error)}
            {isSubmitted && <Typography variant='h6' textAlign="center" gutterBottom>Your query has been posted successfully!</Typography>}
            {!isSubmitted && <FAQsForm handleSubmit={submitHandler}></FAQsForm>}
        </>
    )
}

export default NewFAQ