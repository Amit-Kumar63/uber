const dotenv = require('dotenv');
const http = require('http');
const app = require('./app');
const connectDB = require('./db/db');

const port = process.env.PORT || 8100;
dotenv.config();
connectDB();

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
