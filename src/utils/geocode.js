const request=require('request')

const geocode=(address,callback)=>{
    const tooken='pk.eyJ1IjoibWlya29tYW4wMDciLCJhIjoiY2wyeWlkZWF3MGd1NjNpc2JmdmdudHo1cyJ9.IlHkE4E7DpitM0I8IfcqMg'
    let url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${tooken}&limit=1`

    request({url,json:true},(error,{body}={})=>{
        // console.log(response.body.features)
        if(error){
            callback('Unable to connect to mapbox service!',undefined)
        }
        else if(body.features.length===0){
            callback('Unable to find location. Try another search.',undefined)
        }
        else{
            
            callback(undefined,{
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name
            })
        }
            
    })
}

module.exports=geocode