const autos = require('../modules/datos.js').autos;

//CREACION DE FUNCIONES QUE INTERACTUAN CON LOS DATOS
exports.getAutos = (req,res) => {
    res.json(autos)
}

exports.getAutosModelo = (req,res) => {
    const modeloBuscado = req.params.modelo.toLowerCase();
    const autosModelo = autos.filter(auto => auto.modelo.toLowerCase().includes(modeloBuscado));

    if (modeloBuscado.length === 0) {
        return res.status(404).json({ message: 'No se encontraron autos que coincidan con la búsqueda' });
    } else {
        res.json(autosModelo);
    }
}

exports.getAutosMarca = (req,res) => {
    const marcaBuscada = req.params.marca.toLowerCase();
    const autosMarca = autos.filter(auto => auto.marca.toLowerCase().includes(marcaBuscada));

    if (marcaBuscada.length === 0) {
        return res.status(404).json({ message: 'No se encontraron autos que coincidan con la búsqueda' });
    } else {
        res.json(autosMarca);
    }
}