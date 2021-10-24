import { rest } from "msw";
import data from "./products.json";

export const handlers = [
  // Handles a GET /products request
  rest.get("/api/v1/products", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(data.products)
    );
  }),
];
