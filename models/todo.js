module.exports = (sequelize, DataTypes) => {
	const Todo = sequelize.define("Todo", {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		completed: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
	});
	return Todo;
};
