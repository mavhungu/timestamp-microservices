function validDate(date){
    return date instanceof Date && !isNaN(date)
}

const timestampdate = async (req, res)=>{
    let dateStr = req.params.date;
    if(dateStr.indexOf('-') == -1){
        dateStr = new Number(dateStr)
    }
    let dateRes = new Date(dateStr)
    if(validDate(dateRes)){
        res.json({'unix': dateRes.getTime(), 'uct': dateRes.toUTCString()})
    }else{
        res.json({'unix': null, 'uct': 'Invalid Date'})
    }
}

module.exports = timestampdate