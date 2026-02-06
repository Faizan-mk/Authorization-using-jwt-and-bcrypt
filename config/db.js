const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('khan', 'root', 'root', {
    host: 'localhost',
    dialect: "mysql"
})

const db = async (req, res) => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports={db,sequelize}