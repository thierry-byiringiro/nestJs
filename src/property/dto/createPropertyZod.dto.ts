import z from 'zod';

export const createpropertySchema = z.object({
  name: z.string(),
  description: z.string().min(20),
  area: z.number().positive(),
});

export type CreatePropertyZodDto = z.infer<typeof createpropertySchema>;
