import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { databases } from "../appwriteConfig";
import { ID } from "appwrite";

const DATABASE_ID = "67b4cda9001e0345ffcc";
const COLLECTION_ID = "67b4cebf0037a52161cb";

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  try {
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
    if (response.documents.length > 0) return response.documents;

    const apiResponse = await fetch("YOUR_JOB_API_URL");
    const jobData = await apiResponse.json();

    for (const job of jobData) {
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        job
      );
    }

    return jobData;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
});

const jobSlice = createSlice({
  name: "jobs",
  initialState: { jobs: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.jobs = action.payload;
    });
  },
});

export default jobSlice.reducer;
