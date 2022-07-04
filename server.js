const { app } = require('./app');

const { db } = require('./utils/dataBase');

db.authenticate()
  .then(() => console.log('DB authenticated'))
  .catch((err) => console.log(err));

//DB Relations

db.sync()
  .then(() => console.log('DB synced'))
  .catch((err) => console.log(err));

app.listen(4000, () => {
  console.log('server On!');
});
