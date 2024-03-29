const axios = require('axios');

const dataModel = {
    getState: async (estado)=>
    {
        return await axios.get(`https://gaia.inegi.org.mx/wscatgeo/mgee/buscar/${estado}`).then(data => data).catch(err => err);
    },
    getCity: async (cve) =>
    {
        return await axios.get(`https://gaia.inegi.org.mx/wscatgeo/mgem/${cve}`).then(data => data).catch(err => err);
    }
}

module.exports = dataModel;