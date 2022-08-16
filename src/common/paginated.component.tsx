import { useQuery } from '@tanstack/react-query';
import React, { useCallback, useRef, useState } from 'react'
import { PagedQueryInterface } from '../config/urls.config';
import { PagedResponse } from './interfaces/pagedResponse.interface';
import { InView } from 'react-intersection-observer';
import Loader from './loader.component';

export interface PaginatedComponentProps<T> {
    children: (data: T[]) => JSX.Element | JSX.Element[];
    apiFunction: (value: PagedQueryInterface) => string;
    uniqueKey: string;
    limit: number;
}

export default function PaginatedComponent<T>(props: PaginatedComponentProps<T>) {
    const { apiFunction, uniqueKey, limit } = props;

    const [page, setPage] = useState<number>(1);
    const pagedData = useRef<PagedResponse<T>>({
      data: [],
      isNextAvaible: true,
      ok: true,
    });

    const { isLoading, error, data } = useQuery<unknown, unknown, PagedResponse<T>>([uniqueKey, page], () =>
    fetch(apiFunction({ page, limit}))
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
        }
    }, [isLoading, data, page]);

  return (
    <div className='flex flex-col w-100'>
      {props.children(data?.data || [])}
      <InView onChange={retrigerPageApi} threshold={1}>
        <div className='w-100 flex flex-row justify-center'>
          {data && data.isNextAvaible && <Loader />}
        </div>
      </InView>
    </div>
  )
}
