'use strict'

class SiteController {
    async index(){
        return{
            status:'ok'
        }
    }

    async site(){
        return{
            name:'我的博客',
            menu:[
                {name:'我的帖子',url:'/rest/posts',icon:'fa fa-list'}
            ]
        }
    }
}

module.exports = SiteController
