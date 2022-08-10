import React from 'react'
import { PostInterface } from '../interfaces/posts.interface';
import PostCardComponent from './PostCard.component';

const postList: PostInterface[] = [
  { 
    userName: "sagar",
    details: "dksldlsdlsdsd",
    id: 1
  },
  { 
    userName: "sagar",
    details: "dksldlsdlsdsd",
    id: 2
  },
  { 
    userName: "sagar",
    details: "dksldlsdlsdsd",
    id: 3
  },
  { 
    userName: "sagar",
    details: "dksldlsdlsdsd",
    id: 4
  },
  { 
    userName: "sagar",
    details: "dksldlsdlsdsd",
    id: 5
  },
  { 
    userName: "sagar",
    details: "dksldlsdlsdsd",
    id: 6
  },
  { 
    userName: "sagar",
    details: "dksldlsdlsdsd",
    id: 7
  },
  { 
    userName: "sagar",
    details: "dksldlsdlsdsd",
    id: 8
  },
  { 
    userName: "sagar",
    details: "dksldlsdlsdsd",
    id: 9
  },
  { 
    userName: "sagar",
    details: "dksldlsdlsdsd",
    id: 10
  },
];


export default function ListPostComponent() {
  return (
    <div>
      <div className='grid grid-cols-1 w-100'>
        {
          postList.map((post) =>
            <div className='mx-5 my-2 w-100'>
              <PostCardComponent post={post} />
            </div>
          )
        }
      </div>
    </div>
  
  )
}
