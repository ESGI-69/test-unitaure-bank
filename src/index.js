import db from './models/index';

db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync with { force: true }');
});

try {
  await db.sequelize.authenticate();
  console.log('Connection has been established successfully.');
  return db.sequelize;
} catch (error) {
  console.error('Unable to connect to the database:', error);
  throw error;
}

