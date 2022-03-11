import { beforeAll, test, expect } from "vitest";
import { request } from "undici";
import startServer from "../src/index";

beforeAll(async () => {
  await startServer();
});

test("Testing whether the only get endpoint works", async () => {
  const { body } = await request("http://localhost:8080/ping");
  const response: string = await body.json();

  expect(response).toStrictEqual({ text: "pong" });
});
