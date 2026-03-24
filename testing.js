const request = require("supertest");
const app = require("../app");

test("Register User", async () => {
  const res = await request(app).post("/api/v1/users/register").send({
    email: "test@test.com",
    password: "123456",
  });

  expect(res.statusCode).toBe(200);
});



