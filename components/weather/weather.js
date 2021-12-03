const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const check_prime = async()=>{
    let day = new Date().getDate();
    if(day === 1){
        return false
    }else{
        for(let i=2;i<=Math.sqrt(day);i++){
            if(day % i ==0){
                return false;
            }
        }
        return true;
    }
}

exports.get_weather_data=async(city)=>{
    try{
        let prime_data = await check_prime();
        if(prime_data){
            let url =process.env.URL;
            let response = await axios.get(`${url}?q=${city}&appid=${process.env.API_KEY}`);
            return response.data

        }else{
            return "Date is not prime so no date"
        }
    }catch(err){
        return err.response.data.message;
    }

}