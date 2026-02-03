import { z } from "zod";
export const taskValidationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  describtion: z.string().optional(),
  status: z.enum(["pending", "in progress", "completed"]),
  dueDate: z.string().optional(),
});
