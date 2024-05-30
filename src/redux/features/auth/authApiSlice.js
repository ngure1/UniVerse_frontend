import baseApi from "@/redux/baseApiSlice";

const authApiSlice = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: (builder) => {},
});
