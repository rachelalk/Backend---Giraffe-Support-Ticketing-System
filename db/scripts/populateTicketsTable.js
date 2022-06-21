import { query } from "../index.js";
import { tickets } from "../../libs/data.js";

async function populateTicketsTable() {
  for (let i = 0; i < tickets.length; i++) {
    const res = await query(
      `INSERT INTO tickets (name, roomnumber, message, keywords) VALUES ($1, $2, $3, $4) RETURNING *;`,
      [tickets[i].name, tickets[i].roomnumber, tickets[i].message, tickets[i].keywords,]
    );
    console.log(`Added to DB: ${res.rows[0].ticket}`);
  }
}

populateTicketsTable();
