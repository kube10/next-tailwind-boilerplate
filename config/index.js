const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:4000"
  : "https://next-tailwind-boilerplate.vercel.app";
