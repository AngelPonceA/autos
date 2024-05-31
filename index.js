const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());

const autos = [
    {
      marca: 'Ferrari',
      modelo: '488 GTB',
      año: 2020,
      transmision: 'Automática',
      motor: '3.9L V8',
      frenos: 'Discos de carbono cerámico',
      velocidades: 7,
      image: 'https://img.remediosdigitales.com/a86b1b/ferrari-488-gtb-by-pogea-racing_3/840_560.jpg',
      precio: 250000000
    },
    {
      marca: 'Lamborghini',
      modelo: 'Huracán EVO',
      año: 2019,
      transmision: 'Automática',
      motor: '5.2L V10',
      frenos: 'Discos de carbono cerámico',
      velocidades: 7,
      image: 'https://www.europeanprestige.co.uk/blobs/stock/333/images/c37f4a39-a9ab-4916-91b7-9ffee038ecec/hi4a9992.jpg?width=2000&height=1333',
      precio: 240000000
    },
    {
      marca: 'Porsche',
      modelo: '911 Turbo S',
      año: 2021,
      transmision: 'Automática',
      motor: '3.8L H6',
      frenos: 'Discos de carbono cerámico',
      velocidades: 8,
      image: 'https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/ES-PLA-local/2022/Vehiculos/El-nuevo-Porsche-911-Turbo-S-llega-Ecuador/PLA22_1125_fine.jpg/jcr:content/PLA22_1125_fine.jpg',
      precio: 280000000
    },
    {
      marca: 'McLaren',
      modelo: '720S',
      año: 2022,
      transmision: 'Automática',
      motor: '4.0L V8',
      frenos: 'Discos de carbono cerámico',
      velocidades: 7,
      image: 'https://www.mansory.com/sites/default/files/styles/1920x800_fullwidth_car_slider/public/migrated/cars/Cars/mclaren/mclaren_720s/mansory_mclaren720s_01.jpg?itok=aH6EX7vk',
      precio: 285000000
    },
    {
      marca: 'Aston Martin',
      modelo: 'Vantage',
      año: 2021,
      transmision: 'Manual',
      motor: '4.0L V8',
      frenos: 'Discos de acero',
      velocidades: 7,
      image: 'https://static.motor.es/fotos-jato/aston-martin/uploads/aston-martin-vantage-664a38e0696cc.jpg',
      precio: 160000000
    },
    {
      marca: 'Chevrolet',
      modelo: 'Corvette C8',
      año: 2020,
      transmision: 'Automática',
      motor: '6.2L V8',
      frenos: 'Discos de acero',
      velocidades: 8,
      image: 'https://elcomercio.pe/resizer/Hm9c_p2ppkhjICkKsULjVvxAKUk=/640x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/25UJA5HQSRHUHFF5E63RJ5EHQQ.jpg',
      precio: 75000000
    },
    {
      marca: 'Ford',
      modelo: 'GT',
      año: 2019,
      transmision: 'Automática',
      motor: '3.5L V6',
      frenos: 'Discos de carbono cerámico',
      velocidades: 7,
      image: 'https://cdn.motor1.com/images/mgl/zxp4P6/s1/2022-ford-gt-lm-edition.webp',
      precio: 130000000
    },
    {
      marca: 'Nissan',
      modelo: 'GT-R',
      año: 2020,
      transmision: 'Automática',
      motor: '3.8L V6',
      frenos: 'Discos de carbono cerámico',
      velocidades: 6,
      image: 'https://latam-editorial.pxcrush.net/chileautos/general/editorial//nissan-gtrte-autologia-1-s1r4c.jpg?pxc_method=crop&height=725&width=1087',
      precio: 110000000
    },
    {
      marca: 'Audi',
      modelo: 'R8',
      año: 2021,
      transmision: 'Automática',
      motor: '5.2L V10',
      frenos: 'Discos de acero',
      velocidades: 7,
      image: 'https://cdn.drivek.com/configurator-imgs/cars/es/800/AUDI/R8/40538_COUPE-2-DOORS/audi-r8-coupe-2018-front-1.jpg',
      precio: 200000000
    },
    {
      marca: 'Mercedes-Benz',
      modelo: 'AMG GT',
      año: 2020,
      transmision: 'Automática',
      motor: '4.0L V8',
      frenos: 'Discos de carbono cerámico',
      velocidades: 7,
      image: 'https://quantumgallery.cl/wp-content/uploads/2023/08/AMG-GTR-1.jpg',
      precio: 225000000
    }
];

app.get('/', (req , res) =>{
    res.send('Api de autos funcionando');
});

app.get('/api/autos', (req , res) =>{
    res.send(autos);
});

app.get('/api/autos/:modelo', (req , res) =>{z
  const auto = autos.find(x => x.modelo === req.params.modelo);
  
    if (autosModelo.length === 0) {
      return res.status(404).json({ message: 'No se encontraron autos que coincidan con la búsqueda' });
  } else {
      res.json(autosModelo);
  }
});

const port = process.env.port || 3001;
app.listen(port, () => console.log(`Puerto ${port}`));
