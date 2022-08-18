import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import CreatePost from './posts/componets/CreatePost.component';
import EditPost from './posts/componets/EditPost.component';
import ListPostComponent from './posts/componets/ListPost.component';
import PostContainer from './posts/post.container';
import CreateTodoComponent from './todos/components/CreateTodo.component';
import TodoListComponent from './todos/components/TodoList.component';
import TodosContainers from './todos/todos.containers';
import CreateUser from './users/components/CreateUser.component';
import UserListComponent from './users/components/UserList.component';
import UsersContainers from './users/users.container';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/users'} element={<UsersContainers />}>
          <Route index element={<UserListComponent />}></Route>
          <Route path=':id'>
            <Route path='posts' element={<PostContainer />}>
              <Route index element={<ListPostComponent />} />
              <Route path='create' element={<CreatePost />}></Route>
              <Route path='update' element={<EditPost />}></Route>
            </Route>
            <Route path='todos' element={<TodosContainers />}>
              <Route index element={<TodoListComponent />} />
              <Route path='create' element={<CreateTodoComponent />}></Route>
            </Route>
          </Route>
          <Route path='create' element={<CreateUser />}></Route>
        </Route>
        <Route
          path="*"
          element={<Navigate to="/users" replace />}
        />
      </Routes>
    </BrowserRouter>
  )
}
