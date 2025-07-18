import { defineCollection, z } from "astro:content";

const type = {
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hidden: z.boolean().optional(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    headerColor: z.string(),
    contrastColor: z.string().optional(),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    openMoji: z.string().optional(),
    shareImage: z.string().optional(),
  }),
};

const blog = defineCollection(type);
const project = defineCollection(type);

export const collections = { blog, project };
