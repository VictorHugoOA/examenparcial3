const dataModel = require('./modelo');

const ctrlDatos = 
{
    findState: async (req, res) =>
    {
        const data = await dataModel.getState(req.params.estado);
        res.json({clave: data.data.datos[0].cve_agee, nombre: data.data.datos[0].nom_agee, poblacion: data.data.datos[0].pob, femenina: data.data.datos[0].opb_fem, masculina: data.data.datos[0].pob_mas, viviendas: data.data.datos[0].viv});
    },

    findCity: async (req, res) =>
    {
    }

};

module.exports = ctrlDatos;