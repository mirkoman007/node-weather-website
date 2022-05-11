const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const tooken='e88eb81ac130ca395a54119bbd975bb7'
    let url=`http://api.weatherstack.com/current?access_key=${tooken}&query=${latitude},${longitude}`
    
    request({url, json:true},(error,{body}={})=>{
    
        if(error){
            callback('Unable to connect to weather service!',undefined)
        }
        else if(body.error){
            callback('Unable to find location',undefined)
        }
        else{
            const current=body.current
            callback(undefined,`${current.weather_descriptions[0]}. It is currently ${current.temperature} defress out. It feels like ${current.feelslike} degress out.`)

        }
    })
}



module.exports=forecast