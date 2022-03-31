const timestampController = async (req, res)=>{

    const { date } = req.params;
    const getResponse = dateObject => ({ unix: dateObject.getTime(), utc: dateObject.toUTCString() });
    
    if (date === undefined) res.json(getResponse(new Date()));

    const parseDate = typeof +date === 'number' && !isNaN(+date) ? +date : date;
    const isValidDate = new Date(parseDate) !== "Invalid Date" && !isNaN(new Date(parseDate));

    if (!isValidDate) res.json({error: "Invalid Date"});

    res.json(getResponse(new Date(parseDate)));
}

module.exports = timestampController