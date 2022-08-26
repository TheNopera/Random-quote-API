const PORT = process.env.PORT || 8000;
const express = require('express');


const app = express();
app.use(express.json())



const quotesRouter = require('./routes/quotes');
app.use('/', quotesRouter);

app.listen(process.env.PORT || PORT, () => console.log(`Server is now running on PORT ${PORT}`));







