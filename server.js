const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
	req.end();
})

app.get('/users', (req, res) => {

})

app.listen(5000, () => console.log("Listening on port 5000"));