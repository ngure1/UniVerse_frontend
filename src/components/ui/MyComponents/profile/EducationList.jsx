import React from "react";
import { useEducationListQuery } from "@/redux/features/educationList/educationApiSlice";
import EducationListCard from "../cards/EducationListCard";

const EducationList = () => {
	const { data: educationData, isLoading } = useEducationListQuery(1);
	console.log(educationData);
	return (
		<div>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				educationData?.results?.map((education, index) => (
					<EducationListCard
						institution_name={education.institution_name}
						educationId={education.id}
						fieldOfStudy={education.field_of_study}
						startDate={education.start_date}
						endDate={education.end_date}
					/>
				))
			)}
		</div>
	);
};
export default EducationList;
