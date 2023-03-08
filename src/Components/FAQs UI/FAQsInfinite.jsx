import { Box, Button, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useInfiniteQuery } from 'react-query'
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

// const fetchFAQs = ({ pageParam = 1 }) => {
//     return axios.get(`http://localhost:5000/faqs?_limit=2&_page=${pageParam}`)
// }

function FAQsInfinite() {
    // const {
    //     isLoading, isError, error, data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery(['faqs'], fetchFAQs, {
    //     getNextPageParam: (_lastPage, pages) => {
    //         if (pages.length < 15) {
    //             return pages.length + 1
    //         } else {
    //             return undefined
    //         }
    //     }
    // })

    const {
        status,
        error,
        data,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
    } = useInfiniteQuery({
        queryKey: ["faqs", "infinite"],
        getNextPageParam: prevData => prevData.nextPage,
        queryFn: ({ pageParam = 1 }) => fetchFAQs(pageParam),
    })

    if (status === "loading") {
        return <Typography variant='h3' textAlign="center">Loading...</Typography>
    }

    if (status === "error") {
        return <Typography variant='h5' textAlign="center" color="red">{JSON.stringify(error)}</Typography>
    }


    return (
        <>

            {data.pages
                .flatMap(data => data.faqs)
                .map(faq => (
                    <FAQs id={faq.id} name={faq.name} body={faq.body} />
                ))}
            {hasNextPage && (
                <Box display="flex" justifyContent="center">
                    <Button variant='text' onClick={() => fetchNextPage()}>
                        {isFetchingNextPage ? "Loading..." : "Load More"}
                    </Button>
                </Box>
            )}

            {/* {data?.pages.map((group, i) => {
                return (
                    <Box key={i}>
                        {group.data.map(faq => (
                            <FAQs id={faq.id} name={faq.name} body={faq.body} />
                        ))}
                    </Box>
                )
            })}
            <Box display="flex" justifyContent="center">
                <Button variant='text'
                    onClick={() => fetchNextPage()} disabled={!hasNextPage}>
                    {isFetching && !isFetchingNextPage ? 'Loading...' : 'Load More'}
                </Button>
            </Box> */}
        </>
    )
}

export default FAQsInfinite