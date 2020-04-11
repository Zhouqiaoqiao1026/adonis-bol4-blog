'use strict'
const Post=use('App/Models/Post')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with posts
 */
class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return await Post.query().paginate(1,500)  //分页
  }

  /**
   * Render a form to be used for creating a new post.
   * GET posts/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {  //显示创建表单
  }

  /**
   * Create/save a new post.
   * POST posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {   //保存新增文章的后端接口
    const data=request.only(['title'])  //取一部分值，需要数组参数
    const model=new Post
    model.fill(data)
    await model.save()
    return model
  }

  /**
   * Display a single post.
   * GET posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Post.find(params.id)
  }
  /**
   * Render a form to update an existing post.
   * GET posts/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  async edit ({ params, request, response, view }) {  //编辑表单页面
  }

  /**
   * Update post details.
   * PUT or PATCH posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
   // const data=request.only(['title'])  //取一部分值，需要数组参数
    const data=request.all()
    const model=await Post.find(params.id)
    model.merge(data) //修改merge
    await model.save()
    return model
  }

  /**
   * Delete a post with id.
   * DELETE posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {   //删除表单
    const model=await Post.find(params.id)
    await model.delete()
    return {
      success:true
    }
  }

  async grid(){
    return {
        fields:{
            _id:{label:'ID'},
            title:{label:'标题'},
            created_at:{label:'创建时间',type:'datetime'},
            updated_at:{label:'更新时间',type:'datetime'},
        }
    }
}

async form(){
  return {
      fields:{
          _id:{label:'ID'},
          title:{label:'标题'},
          image:{label:'图片'},
          body:{label:'详情',type:'html'},
        
      }
  }
}

async view(){
  return {
      fields:{
          _id:{label:'ID'},
          title:{label:'标题'},
          image:{label:'图片'},
          body:{label:'详情',type:'html'},
          created_at:{label:'创建时间',type:'datetime'},
          updated_at:{label:'更新时间',type:'datetime'},
        
      }
  }
}

}

module.exports = PostController
