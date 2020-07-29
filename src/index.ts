import express from 'express';

const app = express();
const port = 1234;

const authCheck = (req, res, next) => {
  if (req.query.bar === '1') next();
  else res.status(401).json('You shall not pass!');
};

const loggerMiddleware = (req, res, next) => {
  console.log('Yo, just got a new request!');
  next();
};

const badMiddleware = (req, res, next) => {
  console.log('I AM SO BAD');
  next();
};

app.use(loggerMiddleware);
app.use(badMiddleware);
app.use(authCheck);

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.post('/', (req, res) => {
  const databaseResponse = {
    id: 1,
    imageUrl: '/beautiful-sunrise.jpg',
    friendTags: [123, 234, 345],
  };

  res.json(databaseResponse);
});

const getFoo = (req, res) => {
  res.send(`Yo, did you send me this? ${req.query.bar}`);
};

app.get('/foo', getFoo);

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
