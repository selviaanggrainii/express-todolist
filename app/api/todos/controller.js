const { Todo, Item } = require('../../db/models');

module.exports = {
    getAll: async (req, res) => {
        const todos = await Todo.findAll({
            attributes: ['id', 'name'],
            include: {
                model: Item,
                attributes: ['id', 'name', 'status'],
            },
        });

        res.status(200).json({
            message: 'success',
            data: todos,
        });

        try {
        } catch (err) {
            console.log(err);
        }
    },
};