const express = require('express')
const app = express();
const port = 8081

app.get('/api/test', (req, res) => {
  res.send(JSON.stringify({text: 'Hello world'}))
})

app.use(express.static('src'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/api/test', (req, res) => {
  console.log(req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})