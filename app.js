const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost:27017/my-blog-app');

const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');

app.use('/', indexRouter);
app.use('/posts', postsRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
