import { z } from "zod";

const educationListSchema = z.object({
	institution: z.string().nonempty("Instituition is required"),
	field_of_study: z.string().nonempty("Field is required"),
	start_date: z.string().nonempty("Date is required"),
	end_date: z.string().nonempty("Date is required"),
});

export default educationListSchema;
