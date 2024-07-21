import z from "zod";

const githubUrlRegex = /^https:\/\/github\.com\/[a-zA-Z0-9_-]+$/;

export const newProfileSchema = z.object({
  username: z.string().min(3).max(255),
  profile_url: z.string().regex(githubUrlRegex, "Invalid github url"),
});

export type NewProfileSchemaType = z.infer<typeof newProfileSchema>;
