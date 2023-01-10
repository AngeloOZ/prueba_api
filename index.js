const express = require('express');
const app = express();
const port = process.env.PORT || 5010;

app.get('/', function (req, res) {
    res.json({ status: 200, message: `Aplicacion en en puerto ${port}`});
})

app.use(function (req, res, next) {
    res.status(404).json({ status: 404, message: `the url ${req.url} no found` })
});

app.listen(port, async () => {
    try {
        console.log(`Application is listening at port ${port}`);
    } catch (err) {
        console.error(err)
    }
});