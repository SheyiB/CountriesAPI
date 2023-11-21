const countries = require('../data/countries.json');
const countriesIndex = require('../data/countriesIndex.json')

module.exports.getAllCountries = (req, res) => {
    try{
        const countriesList = Object.keys(countriesIndex)

        res.status(200).json({"available countries": countriesList})
    }
    catch(error){
        res.status(500).json({"message" : error.message})
    }
}

module.exports.getCountryState = (req, res) => {
   try{
        const countriesList = Object.keys(countriesIndex)
        const country = req.params.country
        const state = req.params.state
        
        if (Object.keys(countriesIndex).includes(country)){

        }
        else{
            res.status(404).json({"message" : "Country not available"})
        }


   }
   catch(error){
    res.status(500).json({"message" : error.message})
   } 
}