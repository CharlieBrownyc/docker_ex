const express = require('express');

const PORT=8080;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Hi World! - [expr4]');
    // res.send('addr=' + req.address);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
