const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

const autosRouters = require('./app/routes/autos')

app.use(autosRouters);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Puerto ${port}`));
