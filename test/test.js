var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server=require("../server");
let should = chai.should();
chai.use(chaiHttp);


describe("Weather", function(){
    describe ("read city", function(){
        it("should read city details", (done)=>{
            chai.request(server)
                .get("/weather/city/")
                .query({name:'pune'})
                .end((err,res)=>{
                    if(err){
                        console.log(err)
                    }else{
                        res.should.have.status(200);
                        console.log("Response Body:", res.body);
                        done()
                    } 
                })
        })

    })
})