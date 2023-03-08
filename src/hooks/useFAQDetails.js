import { useQuery } from "react-query";
import axios from "axios";
import { Typography } from "@mui/material";

const fetchFAQDetails = (id) => {
  return axios.get(`http://localhost:5000/faqs/${id}`).then((res) => res.data);
};

export const useFAQDetails = (id) => {
  const faq = useQuery({
    queryKey: ["faqs", id],
    queryFn: () => fetchFAQDetails(id),
  });

  if (faq.status === "loading") {
    return (
      <Typography variant="h3" textAlign="center">
        Loading...
      </Typography>
    );
  }

  if (faq.status === "error") {
    return (
      <Typography variant="h5" textAlign="center" color="red">
        {JSON.stringify(faq.error)}
      </Typography>
    );
  }

  //   return useQuery(["faq", faqID], fetchFAQDetails, {
  //     initialData: () => {
  //       const faq = queryClient
  //         .getQueryData("faqs")
  //         ?.data?.find((faq) => faq.id === parseInt(faqID));
  //       if (faq) {
  //         return { data: faq };
  //       } else {
  //         return undefined;
  //       }
  //     },
  //   });

  return faq.data;
};
