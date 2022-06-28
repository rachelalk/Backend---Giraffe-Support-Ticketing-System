import request from 'supertest';
import { test, expect } from "@jest/globals";
import app from "../app.js"
// import router from "./tickets"


describe('GET all tickets', () => {
    test('returns all tickets', async () => {
      const res = await request(app).get('/tickets');
  
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({success: true, payload: expect.any(Object)});
  
    });
  })
  

// import supertest from "supertest";
// import app from "../app.js";
// import { test, expect } from "@jest/globals"
// // GET /users
//     // Expected HTTP status code
//         test("Checks if the response's HTTP status code is 200",
//         async function() {
//             const response = await supertest(app).get("/tickets");
//             expect(response.status).toBe(200);
//         })