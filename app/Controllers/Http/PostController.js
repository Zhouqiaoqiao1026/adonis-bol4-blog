'use strict'

const Post =use('App/Models/Post')  //命名空间App对应app下的文件夹

class PostController {
    //index 博文列表
    async index({request,view}){ 
        const posts=await Post.query().orderBy('created_at', 'desc').fetch()
        return view.render('posts.index',{
            posts:posts.toJSON()
        })
    }
    //show 博文详情
    async show({ params,view}){
        const post=await Post.find(params.id)
        return view.render('posts.show',{
            post:post.toJSON()
        })
    }
    
}

module.exports = PostController
