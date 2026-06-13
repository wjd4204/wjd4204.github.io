import { defineCollection, z } from "astro:content";
const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    period: z.string(),
    team: z.string(),
    stack: z.array(z.string()),
    role: z.string(),
    status: z.string(),
    card: z.object({
      badge: z.string(),
      device: z.enum(["laptop", "phones"]).default("laptop"),
      image: z.string(),
      imageAlt: z.string(),
      secondaryImage: z.string().optional(),
      secondaryImageAlt: z.string().optional()
    }),
    image: z.string(),
    imageAlt: z.string(),
    hoverImage: z.string(),
    hoverImageAlt: z.string(),
    slides: z.array(
      z.object({
        key: z.string(),
        title: z.string(),
        image: z.string(),
        imageAlt: z.string(),
        body: z.array(z.string()).default([]),
        points: z.array(z.string()).default([]),
        problem: z.array(z.string()).optional(),
        cause: z.array(z.string()).optional(),
        solution: z.array(z.string()).optional(),
        result: z.array(z.string()).optional(),
        lesson: z.array(z.string()).optional(),
        troubleshootingSummary: z
          .object({
            problem: z.string(),
            judgment: z.string(),
            result: z.string()
          })
          .optional()
      })
    ),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false)
  })
});

export const collections = { projects };
