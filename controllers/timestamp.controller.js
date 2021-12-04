const timestamp = async (req, res)=>{
    let dateR = new Date()
    res.json({'unix': dateR.getTime(), 'utc': dateR.toUTCString()})

}

module.exports = timestamp