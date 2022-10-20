function globalMiddware(req,res,next){
    console.log('global middware');
    console.log(req.body)
    next();
}

module.exports = {globalMiddware}