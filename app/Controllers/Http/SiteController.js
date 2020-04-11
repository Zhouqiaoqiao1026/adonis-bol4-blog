'use strict'

class SiteController {
    index(){
        return {
            name:'home'
        }
    }
    login(){
        return 'login'
    }
}

module.exports = SiteController
