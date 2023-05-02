import express from "express";
import next from "next";

const app = express();

const nextApp = next({ dev: process.env.NODE_ENV !== "production" });

const nextHandler = nextApp.getRequestHandler();

app.all("*", (req, res) => {
	return nextHandler(req, res);
});



nextApp.prepare().then(() => {
	app.listen(3000, (err?: Error) => {
		if (err) throw err;
		console.log(`listening on port 3000`);
	});
});
