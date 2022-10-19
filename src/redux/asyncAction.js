import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const fetchItems = createAsyncThunk("items/fetchItems", async (parametr) => {
  const response = await axios.get(`${BASE_URL}${parametr}`);
  return response.data;
});

export default fetchItems;
