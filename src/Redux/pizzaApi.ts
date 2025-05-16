import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Pizza } from "../types/types";

export const pizzaApi = createApi({
  reducerPath: "pizza",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://68143fe1225ff1af16284dc5.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getAllPizzas: builder.query<Pizza[], string | void>({
      query: (searchValue) =>
        searchValue ? `pizzas?search=${searchValue}` : "pizzas",
    }),
  }),
});

export const { useGetAllPizzasQuery } = pizzaApi;
