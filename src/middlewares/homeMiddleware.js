function homeMiddware(req, res, next) {
    console.log('home middware')
    next();
}

module.exports = { homeMiddware }