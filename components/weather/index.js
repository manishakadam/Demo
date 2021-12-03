const router = require('express').Router();
const weather = require('./weather');

router.get('/city',async(req,res,next)=>{
    try{
        let city_name = req.query.name;
        if(city_name.length){
            let response = await weather.get_weather_data(city_name);
            res.send(response);
        }else{
            res.send("Please provide city name")
        }
    }catch(err){
        next(err)
    }
})



module.exports = router;