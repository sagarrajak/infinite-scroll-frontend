import React from 'react'
import UserCardComponent from './UserCard.component';

const userList = [
  {
    name: "sagar",
    email: "Sagarrajak959@gmail.com"
  },
  {
    name: "tesxt12",
    email: "sasdafs@gmail.com"
  },
  {
    name: "sagar",
    email: "Sagarrajak959@gmail.com"
  },
  {
    name: "tesxt12",
    email: "sasdafs@gmail.com"
  },
  {
    name: "sagar",
    email: "Sagarrajak959@gmail.com"
  },
  {
    name: "tesxt12",
    email: "sasdafs@gmail.com"
  },
  {
    name: "sagar",
    email: "Sagarrajak959@gmail.com"
  },
  {
    name: "tesxt12",
    email: "sasdafs@gmail.com"
  }
];


export default function UserListComponent() {
  return (
    <div className='grid grid-cols-2 md:grid-col-3 sm:grid-cols-4' >
      {
        userList.map(user =>
          <div className='mx-5 my-5'>
            <UserCardComponent user={user} />
          </div>
        )
      }
    </div>
  )
}
