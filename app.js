const express = require('express');

const app = express();
//middleware
const myLogger = (req, res, next) => {
  console.log('Middleware');
  next();
};

//middleware
app.use(express.static('public')); //bir public dosyası oluşturuyoruz
app.use(myLogger);

app.get('/', (req, res) => {
  const photo = {
    id: 1,
    name: 'Photo Name',
    description: 'Photo desc',
  };
  res.send(photo);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sayfa ${port} portunda çalışıyor.`);
});
