const { usermodel } = require('./models/usermodel');
const { sequelize } = require('./config/db');

async function check() {
    try {
        await sequelize.authenticate();
        console.log('Database connected.');
        const users = await usermodel.findAll();
        console.log('Current users in DB:', JSON.stringify(users, null, 2));
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        await sequelize.close();
    }
}

check();
