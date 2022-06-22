import { query } from "../index.js";

async function truncateTicketsTable() {
  const res = await query(`TRUNCATE TABLE tickets;`);
  console.log(res.command, "truncated tickets table");
}

truncateTicketsTable();