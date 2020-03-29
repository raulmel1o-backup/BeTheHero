const app = require('../src/app');
const config = require('./config');

app.listen(config.port, () => {
    console.log(`Server is up and running at port ${config.port}`);
});

module.exports = app;