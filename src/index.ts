import { Hono } from "hono";

import handleGetUser from "./handlers/user";
import handleGetShop from "./handlers/shop";

import {
  handleDeleteCustomer,
  handleGetCustomer,
  handleGetCustomers,
  handleUpdateCustomer,
} from "./handlers/customer";
import {
  handleDeleteProduct,
  handleGetProduct,
  handleGetProducts,
  handleUpdateProduct,
} from "./handlers/product";

const v1 = new Hono();

v1.get("/user", (c) => c.json(handleGetUser()));
v1.get("/shop", (c) => c.json(handleGetShop()));

v1.get("/customers", (c) => c.json(handleGetCustomers()));
v1.get("/customer/:id", (c) =>
  c.json(handleGetCustomer(Number(c.req.param("id"))))
);
v1.put("/customer/:id", (c) =>
  c.json(handleUpdateCustomer(Number(c.req.param("id")), c.body as any))
);
v1.delete("/customer/:id", (c) =>
  c.json(handleDeleteCustomer(Number(c.req.param("id"))))
);

v1.get("/products", (c) => c.json(handleGetProducts()));
v1.get("/product/:id", (c) =>
  c.json(handleGetProduct(Number(c.req.param("id"))))
);
v1.put("/product/:id", (c) =>
  c.json(handleUpdateProduct(Number(c.req.param("id")), c.body as any))
);
v1.delete("/product/:id", (c) =>
  c.json(handleDeleteProduct(Number(c.req.param("id"))))
);

const app = new Hono();

app.route("/v1", v1);

app.get("/ping", (c) => c.text("pong"));

export default app;
