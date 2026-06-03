import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
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
    image: z.string(),
    imageAlt: z.string(),
    hoverImage: z.string(),
    hoverImageAlt: z.string(),
    slides: z.array(
      z.object({
        key: z.enum(["Overview", "Problem", "Tech Choice", "Solution", "Result"]),
        title: z.string(),
        image: z.string(),
        imageAlt: z.string(),
        body: z.array(z.string()),
        points: z.array(z.string()).default([])
      })
    ),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false)
  })
});

export const collections = { projects };
