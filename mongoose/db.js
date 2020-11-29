const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/stock_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })