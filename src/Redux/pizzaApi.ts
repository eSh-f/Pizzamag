import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPizzaQueryParams, Pizza } from "../types/types";

export const pizzaApi = createApi({
  reducerPath: "pizza",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://68143fe1225ff1af16284dc5.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getAllPizzas: builder.query<Pizza[], IPizzaQueryParams>({
      query: ({ search = "", category, sortBy = "rating" }) => {
        let url = `pizzas?`;

        if (search) {
          url += `search=${search}&`;
        }

        if (category !== undefined && category !== 0) {
          url += `category=${category}&`;
        }

        if (sortBy) {
          url += `sortBy=${sortBy}&order=asc`;
        }

        return url;
      },
    }),
  }),
});

export const { useGetAllPizzasQuery } = pizzaApi;
