import { createApi } from "@reduxjs/toolkit/query";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { setAuth, logout } from "./authSlice";
import { Mutex } from "async-mutex";

// defining the base url
const baseUrl = "http://localhost:8000";

// create a new mutex
const mutex = new Mutex();
const baseQuery = fetchBaseQuery({ baseUrl: baseUrl });
const baseQueryWithReauth = async (args, api, extraOptions) => {
	// wait until the mutex is available without locking it
	await mutex.waitForUnlock();
	let result = await baseQuery(args, api, extraOptions);
	if (result.error && result.error.status === 401) {
		// checking whether the mutex is locked
		if (!mutex.isLocked()) {
			const release = await mutex.acquire();
			try {
				const refreshResult = await baseQuery(
					"/auth/jwt/refresh/",
					api,
					extraOptions,
				);
				if (refreshResult.data) {
					api.dispatch(setAuth());
					// retry the initial query
					result = await baseQuery(args, api, extraOptions);
				} else {
					api.dispatch(logout());
				}
			} finally {
				// release must be called once the mutex should be released again.
				release();
			}
		} else {
			// wait until the mutex is available without locking it
			await mutex.waitForUnlock();
			result = await baseQuery(args, api, extraOptions);
		}
	}
	return result;
};

const baseApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: baseurl }),
	endpoints: (builder) => {},
	tagTypes: [],
});

export default baseApi;
