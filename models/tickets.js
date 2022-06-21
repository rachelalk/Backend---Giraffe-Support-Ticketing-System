import { query } from "../db/index.js";

export async function getTickets() {
  const data = await query(`SELECT * FROM tickets;`);
  return data.rows;
}

export async function postTicket(newTicket) {
  const { name, roomnumber, message, keywords } = newTicket;
  const data = await query(
    `INSERT INTO tickets (name, roomnumber, message, keywords) VALUES ($1, $2, $3, $4) RETURNING *`,
    [name, roomnumber, message, keywords]
  );
  return data.rows;
}

export async function updateTicket(id, updatedTicket) {
  const { name, roomnumber, message, keywords } = updatedTicket;
  const data = await query(
    `UPDATE tickets SET name = $1, roomnumber = $2, message = $3, keywords = $4 WHERE ticket_id = $5 RETURNING *;`,
    [name, roomnumber, message, keywords, Number(id)]
  );
  return data.rows;
}

export async function deleteTicket(id) {
  console.log("delete");
  const data = await query(
    `DELETE FROM tickets WHERE ticket_id = $1 RETURNING *`,
    [Number(id)]
  );
  return data.rows;
}
