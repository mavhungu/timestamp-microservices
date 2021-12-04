const home = async (req, res)=>{
    res.render('index',{
        'title': 'Index-page',
        'home': 'Timestamp Microservice'
    })
}

module.exports= home