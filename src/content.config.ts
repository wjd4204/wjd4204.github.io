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
      badges: z.array(z.string()).default([]),
      device: z.enum(["laptop", "phones"]).default("laptop"),
      image: z.string(),
      imageAlt: z.string(),
      imageFit: z.enum(["contain", "cover"]).optional(),
      imagePosition: z.string().optional(),
      screenRatio: z.string().optional(),
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
        imageLink: z.string().url().optional(),
        imageLinkLabel: z.string().optional(),
        body: z.array(z.string()).default([]),
        points: z.array(z.string()).default([]),
        problem: z.array(z.string()).optional(),
        cause: z.array(z.string()).optional(),
        solution: z.array(z.string()).optional(),
        result: z.array(z.string()).optional(),
        lesson: z.array(z.string()).optional()
      })
    ),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false)
  })
});

export const collections = { projects };
