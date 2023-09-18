import { Hono } from "hono";

import handleGetUser from "./handlers/user";
import handleGetShop from "./handlers/shop";

import {
  handleDeleteCustomer,
  handleGetCustomer,
  handleGetCustomers,
  handleUpdateCustomer,
} from "./handlers/customer";

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

const app = new Hono();

app.route("/v1", v1);

app.get("/ping", (c) => c.text("pong"));

export default app;