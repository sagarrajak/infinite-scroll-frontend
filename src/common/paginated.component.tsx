import { useQuery } from '@tanstack/react-query';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { PagedQueryInterface } from '../config/urls.config';
import { PagedResponse } from './interfaces/pagedResponse.interface';
import { InView } from 'react-intersection-observer';
import Loader from './loader.component';

export interface PaginatedComponentProps<T> {
    children: (data: T[], firstElementId: number) => JSX.Element | JSX.Element[];
    apiFunction: (value: PagedQueryInterface) => string;
    uniqueKey: string;
    limit: number;
}

export default function PaginatedComponent<T extends { id: number }>(props: PaginatedComponentProps<T>) {
    const { apiFunction, uniqueKey, limit } = props;

    const [page, setPage] = useState<number>(1);
    const firstElementId = useRef<number>(0); // use for moving focus of browser scroll
    const isInView = useRef<boolean>(false);

    const pagedData = useRef<PagedResponse<T>>({
      data: [],
      isNextAvaible: true,
      ok: true,
    });

    const { isLoading, error, data } = useQuery<unknown, unknown, PagedResponse<T>>([uniqueKey, page], () => fetch(apiFunction({ page, limit}))
    .then(res => res.json())
    .then(data => {
      if (data.ok) {
        if (data.data && data.data.length) {
          firstElementId.current =  data.data[0].id;
        } else {
          firstElementId.current = 0;
        }
        pagedData.current.isNextAvaible = data.isNextAvaible;
        pagedData.current.data = [...pagedData.current.data, ...data.data];
        return Promise.resolve(pagedData.current);
      }
      return Promise.reject(data);
    })
   , {
        onSuccess: (data) => {
          // console.log(pagedData.current.isNextAvaible);
          setTimeout(() => {  // check view is still visible update view 
            if (isInView.current && data && data.isNextAvaible) {
              setPage(page+1);
            }
          }, 100);
        },
      });

    const retrigerPageApi = useCallback((InView: boolean) => {
        isInView.current = InView;
        if (!isLoading && InView && data &&  data.isNextAvaible) {
          setPage(page + 1);
        }
    }, [isLoading, page, data]);

  return (
    <div className='flex flex-col w-100'>
      {props.children(data?.data || [], firstElementId.current)}
      <InView onChange={retrigerPageApi} threshold={1}>
        <div className='w-100 flex flex-row justify-center'>
          {data && data.isNextAvaible && <Loader />}
        </div>
      </InView>
    </div>
  )
}
