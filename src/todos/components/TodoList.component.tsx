import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router';
import PaginatedComponent from '../../common/paginated.component';
import { getTodosPagedUrl, PagedQueryInterface } from '../../config/urls.config';
import { TodoInterface } from '../interfaces/todo.interface';
import TodoCardComponent from './TodoCard.component';

const TodoListComponent: React.FC = () => {
    let { id } = useParams();
    const firstElementRef = useRef<HTMLDivElement>(null);
    return (
        <PaginatedComponent<TodoInterface>
            apiFunction={(value: PagedQueryInterface) => {
                return getTodosPagedUrl({ ...value, userId: id ? +id : 0 });
            }
            } uniqueKey={'user/pages'} limit={10}
        >
            {(data, firstElementId) => {
                //  eslint-disable-next-line react-hooks/rules-of-hooks
                useEffect(() => {
                    if (firstElementId > 0) {
                        firstElementRef.current?.scrollIntoView();
                    }
                }, [firstElementId]);

                return (
                    <div className='row'>
                        {(data || []).map(todo => {
                            const refProsp = firstElementId === todo.id ? { ref: firstElementRef } : {};
                            return (<div className='mt-1 mb-1 w-100 col-md-1 col-sm-1'>
                                <TodoCardComponent todo={todo} {...refProsp} />
                            </div>)
                        }
                        )}
                    </div>
                )
            }}
        </PaginatedComponent>
    )
}

export default TodoListComponent;
