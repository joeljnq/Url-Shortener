import z from "zod";
const urlSchema = z.object({
  longURL: z.string().url().min(1),
});

function validateUrl(object) {
  return urlSchema.safeParse(object);
}

const shortURLSchema = z.string().max(5);

const validateShortURLResult = (shortURL) => {
  return shortURLSchema.safeParse(shortURL);
}
export { validateUrl, validateShortURLResult };
