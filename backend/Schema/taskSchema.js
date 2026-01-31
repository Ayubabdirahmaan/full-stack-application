import { z } from "zod";
export const taskValidationSchema = z.object({
  title: z.title().min(1, "Title is required"),
  describtion: z.describtion().optional(),
  status: z.enum(["pending", "in progress", "completed"]),
  dueDate: z.string().optional(),
});
