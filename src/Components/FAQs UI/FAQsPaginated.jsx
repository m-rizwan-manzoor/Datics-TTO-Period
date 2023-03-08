import React, { useState } from 'react'

import axios from "axios"
import { useQuery } from 'react-query'
import { Box, Button, Typography } from '@mui/material'
import FAQs from './FAQs'

export function fetchFAQs(page) {
    return axios
        .get("http://localhost:5000/faqs", {
            params: { _page: page, _sort: "id", _limit: 2 },
        })
        .then((res) => {
            const hasNext = page * 2 <= parseInt(res.headers["x-total-count"]);
            return {
                nextPage: hasNext ? page + 1 : undefined,
                previousPage: page > 1 ? page - 1 : undefined,
                faqs: res.data,
            };
        });
}

// const fetchFAQs = pageNumber => {
//     return axios.get(`http://localhost:5000/faqs?_limit=2&_page=${pageNumber}`)
// }

const FAQsPaginated = () => {

    const [page, setPage] = useState(1)

    const { status, error, data, isFetching } = useQuery({
        queryKey: ["faqs", { page }],
        keepPreviousData: true,
        queryFn: () => fetchFAQs(page),
    })

    // const [pageNumber, setPageNumber] = useState(1)
    // const { isLoading, isError, error, data, isFetching } = useQuery(
    //     ['FAQs', pageNumber],
    //     () => fetchFAQs(pageNumber),
    //     {
    //         keepPreviousData: true
    //     }
    // )

    if (status === "loading") {
        return <Typography variant='h3' textAlign="center">Loading...</Typography>
    }

    if (status === "error") {
        return <Typography variant='h5' textAlign="center" color="red">{JSON.stringify(error)}</Typography>
    }

    return (
        <>
            {data.faqs.map(faq => (
                <FAQs key={faq.id} id={faq.id} name={faq.name} body={faq.body} />
            ))}
            <Box display="flex" justifyContent="center">

                {isFetching && <Typography variant='h6'>Loading...</Typography>}

                {data.previousPage && (
                    <Button variant='text' onClick={() => setPage(data.previousPage)}>Prev Page</Button>
                )}
                {data.nextPage && (
                    <Button variant='text' onClick={() => setPage(data.nextPage)}>Next Page</Button>
                )}

                {/* <Button variant='text'
                    onClick={() => setPageNumber(page => page - 1)}
                    disabled={pageNumber === 1}>
                    Prev Page
                </Button>
                <Button variant='text'
                    onClick={() => setPageNumber(page => page + 1)}
                    disabled={pageNumber === 15}>
                    Next Page
                </Button> */}
            </Box>
        </>
    )
}

export default FAQsPaginated