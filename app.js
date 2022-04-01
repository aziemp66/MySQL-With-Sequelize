const express = require("express");

const db = require("./models");
const todoRouter = require("./routes/todos.routes");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/todos", todoRouter);

db.sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log(`App listening on http://localhost:${PORT}`);
	});
});
