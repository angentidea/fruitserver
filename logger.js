const logger = (req, res, next) => {
    console.log(req.method, req.original);
    next()
}

module.exports = logger