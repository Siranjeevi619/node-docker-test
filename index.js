const express = require('express');
const router = require('./router/router.js');

const app = express();
const PORT = 3000;

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
