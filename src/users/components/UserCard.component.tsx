import React from 'react'
import { UserInterface } from '../interfaces/user.interface';
export interface Props {
  user: UserInterface
}


export default function UserCardComponent(props: Props) {
  const { name, email, username } = props.user;

  return (
    <a href="#" className="block p-6 max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <img className="w-100 h-100 rounded-full" src="/avater.png" alt="Rounded avatar"></img>
      <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{username}</h4>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{email}</p>
    </a>
  )
}
