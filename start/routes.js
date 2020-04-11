'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')
/*blog*/
Route.get('/', 'PostController.index')
Route.get('/:id', 'PostController.show')
/*admin*/
Route.get('/admin/api/index','Admin/SiteController.index')
Route.get('/admin/api/site','Admin/SiteController.site')  //后台-左侧导航栏
Route.get('/admin/api/posts/grid','Admin/PostController.grid')  //后台-显示表格界面
Route.get('/admin/api/posts/form/:id?','Admin/PostController.form')  //后台-显示表格界面 ?表示可选
Route.get('/admin/api/posts/view','Admin/PostController.view')  //后台-显示表格界面 ?表示可选
Route.resource('/admin/api/posts','Admin/PostController') //一个资源路径指向一个控制器
// Uncomment the following code to test with mongodb

// Route.get('/test', async () => {
//   const User = use('App/Models/User')
//   await User.findOrCreate({
//     name: 'adonis-mongo-app'
//   }, {
//     name: 'adonis-mongo-app',
//     github: 'https://github.com/wxs77577/adonis-mongo-app',
//     cmd: 'adonis new api-server --blueprint wxs77577/adonis-mongo-app',
//     'cmd-cnpm': 'adonis new api-server --blueprint wxs77577/adonis-mongo-app --cnpm'
//   })
//   return await User.query().sort('-_id').paginate(1)
// })