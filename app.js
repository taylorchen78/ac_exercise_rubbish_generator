// app.js
// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const Handlebars = require("handlebars")
const generateRubbishTalk = require('./generate_rubbish_talk')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// register helper
Handlebars.registerHelper("targetSame", function (type, value, options) {
  if (type === value) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const type = req.body.target
  const rubbishTalk = generateRubbishTalk(req.body.target)
  res.render('index', { rubbishTalk, type })
})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})