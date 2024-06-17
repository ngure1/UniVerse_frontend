import { useProfileMeQuery } from "@/redux/features/profiles/profileApiSlice";

export const useProfile = (userId) => {
	if (userId) {
		const { data, isLoading, error } = useProfileMeQuery(userId);
		return { data, isLoading, error };
	} else {
		const { data, isLoading, error } = useProfileMeQuery(null);
		return { data, isLoading, error };
	}
};
