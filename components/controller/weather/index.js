const router = require('express').Router();
const weather_controller = require('./weather.controller');

router.get('/city',async(req,res,next)=>{
    try{
        let city_name = req.query.name;
        let response = await weather_controller.get_weather_data(city_name);
        res.send(response);

    }catch(err){
        next(err)
    }
})



module.exports = router;