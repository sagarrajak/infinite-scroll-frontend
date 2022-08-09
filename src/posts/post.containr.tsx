import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PostContainer() {
  return (
    <>
      <div>post.containr</div>
      <Outlet />
    </>
  )
}
