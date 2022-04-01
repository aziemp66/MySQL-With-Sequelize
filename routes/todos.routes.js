const router = require("express").Router();
const db = require("../models");
const uuid = require("uuid").v4;

router.get("/all", (req, res) => {
	db.Todo.findAll({}).then((todos) => {
		res.json(todos);
	});
});

router.get("/find/:id", (req, res) => {
	db.Todo.findByPk(req.params.id, {
		attributes: {
			exclude: ["id"],
		},
	})
		.then((todo) => {
			res.json(todo);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.post("/add", (req, res) => {
	db.Todo.create({
		id: uuid(),
		title: req.body.title,
		completed: req.body.completed,
	})
		.then((todo) => {
			res.json(todo);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.delete("/delete/:id", (req, res) => {
	db.Todo.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then(() => {
			res.json({
				message: "Todo deleted",
			});
		})
		.catch((err) => {
			res.json(err);
		});
});

router.patch("/update/:id", (req, res) => {
	db.Todo.update(
		{
			title: req.body.title,
			completed: req.body.completed,
		},
		{
			where: {
				id: req.params.id,
			},
		}
	)
		.then((todo) => {
			res.json(todo);
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;
