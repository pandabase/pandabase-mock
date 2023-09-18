import { describe, test, expect } from "bun:test";

import app from "../src";

describe("User Routes", () => {
  test("GET /user", async () => {
    const res = await app.request("/v1/user");
    expect(res.status).toBe(200);

    const response = {
      id: expect.any(Number),
      image_hash: expect.any(String),
      first_name: expect.any(String),
      last_name: expect.any(String),
      username: expect.any(String),
      email: expect.any(String),
      country: expect.any(String),
      balance: expect.any(Number),
      metadata: expect.any(Array),
      verified: true,
      limit: expect.any(Number),
      role: expect.any(String),
      created_at: expect.any(String),
      updated_at: expect.any(String),
    };

    const jsonResponse = await res.json();
    expect(jsonResponse).toEqual(response);
  });
});
