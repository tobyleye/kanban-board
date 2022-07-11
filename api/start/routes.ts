/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/health-check', async () => {
  return { message: 'we up and running'}
})

Route.post('/login', 'AuthController.login')
Route.post('/register', 'AuthController.createAccount')

Route.group(() => {
  Route.post('/boards', 'BoardsController.create')
  Route.get('/boards', 'BoardsController.all')
  Route.get('/boards/:id', 'BoardsController.get')
  Route.post('/boards/:boardId/columns', 'ColumnsController.create')
  Route.get('/boards/:boardId/columns', 'columnsController.all')
  Route.post('/boards/:boardId/columns/:columnId', 'ColumnsController.get')
  Route.post('/boards/:boardId/columns/:columnId/tasks', 'TasksController.create')
  Route.get('/boards/:boardId/columns/:columnId/tasks/:taskId', 'TasksController.get')
}).middleware('auth')
