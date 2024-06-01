const express = require('express');
const cors = require('cors')
const autos = require('./datos');

const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req , res) =>{
    res.send('Api de autos funcionando');
});

app.get('/api/autos', (req , res) =>{
    res.json(autos);
});

app.get('/api/autos/:modelo', (req , res) =>{
  const modeloBuscado = req.params.modelo.toLowerCase();
  const autosModelo = autos.filter(auto => auto.modelo.toLowerCase().includes(modeloBuscado));

  if (modeloBuscado.length === 0) {
    return res.status(404).json({ message: 'No se encontraron autos que coincidan con la búsqueda' });
  } else {
      res.json(autosModelo);
  }
});

app.get('/api/autos/:marca', (req , res) =>{
  const marcaBuscado = req.params.marca.toLowerCase();
  const autosMarca = autos.filter(auto => auto.marca.toLowerCase().includes(modeloBuscado));

  if (marcaBuscado.length === 0) {
    return res.status(404).json({ message: 'No se encontraron autos que coincidan con la búsqueda' });
  } else {
      res.json(autosMarca);
  }
});

const port = process.env.port || 3001;
app.listen(port, () => console.log(`Puerto ${port}`));
