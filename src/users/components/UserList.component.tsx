import React, { useCallback, useEffect, useRef, useState } from 'react'
import UserCardComponent from './UserCard.component';
import { InView } from 'react-intersection-observer';
import { useQuery } from '@tanstack/react-query';
import { getUserPagedUrl } from '../../config/urls.config';
import { UserInterface } from '../interfaces/user.interface';
import Loader from '../../common/loader.component';
import AddUserCardComponent from './AddUserCardComponent';
import { useNavigate } from 'react-router';
import { CreateUserRoute } from '../../config/routes.config';
import { PagedResponse } from '../../common/interfaces/pagedResponse.interface';

export default function UserListComponent() {
  const [page, setPage] = useState<number>(1);
  const pagedData = useRef<PagedResponse<UserInterface>>({
    data: [],
    isNextAvaible: true,
    ok: true
  });
  const navigate = useNavigate();

  const { isLoading, error, data, refetch } = useQuery<unknown, unknown, PagedResponse<UserInterface>>(['user/pages', page], () =>
    fetch(getUserPagedUrl({ page: page, limit: 20}))
      .then(res => res.json())
      .then(data => {
        if (data.ok) {
          pagedData.current.isNextAvaible = data.isNextAvaible;
          pagedData.current.data = [...pagedData.current.data, ...data.data];
          return Promise.resolve(pagedData.current);
        }
        return Promise.reject(data);
      }));

  const retrigerPageApi = useCallback((InView: boolean) => {
    if (!isLoading && InView && data && data.isNextAvaible) {
      setPage(page + 1);
      refetch()
    }
  }, [refetch, isLoading, data, page]);

  return (
    <div className='flex flex-col w-100'>
      <div className='w-100 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5' >
        {(data?.data || []).map(user =>
          <div className='mx-5 my-5' key={user.id}>
            <UserCardComponent user={user}  />
          </div>
        )}
        <div className='mx-5 my-2' onClick={() => navigate(CreateUserRoute())}>
          <AddUserCardComponent/>
        </div>
      </div>
      <InView onChange={retrigerPageApi} threshold={1}>
        <div className='w-100 flex flex-row justify-center'>
          {data && data.isNextAvaible && <Loader />}
        </div>
      </InView>
    </div>
  );
}
