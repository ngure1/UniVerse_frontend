import baseApi from "@/redux/baseApiSlice";

const profileApiSlice = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: (builder) => {},
});
