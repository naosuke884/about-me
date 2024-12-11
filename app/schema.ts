import { z } from "zod";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  affiliation: z.string().optional(),
  message: z.string(),
});

export { formSchema };
