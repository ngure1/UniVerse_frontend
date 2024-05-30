import baseApi from "@/redux/baseApiSlice";

const postApiSlice = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: (builder) => {},
});
