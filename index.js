const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())
// mongodb

// api
app.get('/', (req, res) =>{
  res.send('The Final Run Gadget Shop')
})

app.listen(port, () =>{
  console.log(`Gadget Port is running on port: ${port}`);
})