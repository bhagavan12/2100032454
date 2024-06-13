const express = require('express');
const app = express();
const PORT = 9876;
const cors=require('cors')
const routes = require('./routes');
app.use(cors())
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});
