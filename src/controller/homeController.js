
module.exports = class HomeController {

    firstPage(req, res, next) {
        console.log('render page')
        return res.render('index')
    }
    secondPage(req, res, next) {
        console.log('render page')
        return res.render('second')
    }

    formSubmit(req, res, next) {
        return 
    }

}
