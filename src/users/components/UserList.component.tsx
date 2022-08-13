import React, { useCallback, useEffect, useRef, useState } from 'react'
import UserCardComponent from './UserCard.component';
import { InView } from 'react-intersection-observer';
import { useQuery } from '@tanstack/react-query';
import { getUserPages } from '../../config/urls.config';
import { UserInterface } from '../interfaces/user.interface';
import Loader from '../../common/loader.component';
import AddUserCardComponent from './AddUserCardComponent';

export default function UserListComponent() {
  const page = useRef<number>(1);
  const pagedData = useRef<UserInterface[]>([]);

  const { isLoading, error, data, refetch } = useQuery<unknown, unknown, UserInterface[]>(['user/pages'], () =>
    fetch(getUserPages({ page: page.current, limit: 20}))
      .then(res => res.json())
      .then(data => {
        pagedData.current = [...pagedData.current, ...data]
        return pagedData.current;
      }));

  const retrigerPageApi = useCallback((InView: boolean) => {
    if (!isLoading && InView) {
      page.current++;
      refetch()
    }
  }, [refetch, isLoading]);

  return (
    <div className='flex flex-col w-100'>
      <div className='w-100 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5' >
        {(data || []).map(user =>
          <div className='mx-5 my-5' key={user.id}>
            <UserCardComponent user={user}  />
          </div>
        )}
        <div className='mx-5 my-2'>
          <AddUserCardComponent/>
        </div>
      </div>
      <InView onChange={retrigerPageApi} threshold={1}>
        <div className='w-100 flex flex-row justify-center'>
          {isLoading && <Loader />}
        </div>
      </InView>
    </div>
  );
}
