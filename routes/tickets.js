import express from "express";
import bodyParser from "body-parser";
const router = express.Router();
const jsonParser = bodyParser.json();
import cors from "cors";

const app = express;

import {
	getTickets,
	postTicket,
	updateTicket,
	updateStatus,
	deleteTicket,
} from "../models/tickets.js";
import app from "../app.js";

const corsOptions = {
	origin: "https://giraffe-support.netlify.app",
	optionsSuccessStatus: 200,
};


router.get("/", cors(corsOptions), async function (req, res) {
	const result = await getTickets();
	res.json({ success: true, payload: result });
});

app.options ("/", cors())

router.post("/", cors(), jsonParser, async function (req, res) {
	const newTicket = req.body;
	const result = await postTicket(newTicket);
	res.json({ success: true, payload: result });
});

app.options("/:id", cors());

router.put("/:id", cors(), async function (req, res) {
	const id = Number(req.params.id);
	const data = req.body;
	const result = await updateTicket(id, data);
	res.json({ success: true, payload: result });
});

router.patch("/:id", cors(), async function (req, res) {
	const id = Number(req.params.id);
	const data = req.body;
	const result = await updateStatus(id, data);
	res.json({ success: true, payload: result });
});

router.delete("/:id", cors(), async function (req, res) {
	const id = Number(req.params.id);
	const result = await deleteTicket(id);
	res.json({ success: true, payload: result });
});

export default router;
