import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router';
import PaginatedComponent from '../../common/paginated.component';
import { getPostsPagedUrl, PagedQueryInterface } from '../../config/urls.config';
import { PostInterface } from '../interfaces/posts.interface';
import PostCardComponent from './PostCard.component';

export default function ListPostComponent() {
  let { id } = useParams();
  const firstElementRef = useRef<HTMLDivElement>(null);
  if (!id)
    return <>No id</>;

  return (
    <PaginatedComponent<PostInterface>
      apiFunction={(value: PagedQueryInterface) => {
        return getPostsPagedUrl({
          ...value,
          ...{
            userId: id ? +id : 0,
          }
        });
      }} uniqueKey={'user/posts'} limit={10}>
      {(data, firstElementId) => {
        //  eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          if (firstElementId > 0) {
            firstElementRef.current?.scrollIntoView();
          }
        }, [firstElementId]);

        return (
          <div className='row'>
            {(data || []).map(post => {
              const refProsp = firstElementId === post.id ? { ref: firstElementRef } : {};
              return (<div className='mt-1 mb-1 w-100 col-md-1 col-sm-1'>
                <PostCardComponent post={post} {...refProsp} />
              </div>)
            }
            )}
          </div>
        )
      }}
    </PaginatedComponent>
  )
}
