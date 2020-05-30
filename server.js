const express = require('express');
const bodyPaser = require('body-parser');
const app = express();
const port = process.env.port || 5000;

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id':1,
          'image':'https://placeimg.com/64/64/1',
          'name':'이대율',
          'birthday':'961222',
          'gender':'남자',
          'job':'대학생'
        },
        {
          'id':2,
          'image':'https://placeimg.com/64/64/2',
          'name':'홍길동',
          'birthday':'041222',
          'gender':'여자',
          'job':'프로그래머'
        },
        {
          'id':3,
          'image':'https://placeimg.com/64/64/3',
          'name':'이대율',
          'birthday':'991222',
          'gender':'남자',
          'job':'직업군인'
        }
      ]);
})

app.listen(port, () => console.log(`Listening on Port ${port}`))