import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import PaginatedComponent from '../../common/paginated.component';
import { CreateUserRoute } from '../../config/routes.config';
import { getUserPagedUrl, PagedQueryInterface } from '../../config/urls.config';
import { UserInterface } from '../interfaces/user.interface';
import AddUserCardComponent from './AddUserCardComponent';
import UserCardComponent from './UserCard.component';

const  UserListComponent: React.FC = () => {
  const navigate = useNavigate();
  return (
    <PaginatedComponent<UserInterface>
      apiFunction={(value: PagedQueryInterface) => {
        return getUserPagedUrl(value);
      }
      } uniqueKey={'user/pages'} limit={10}
    >
      {(data) => (
        <div className='row'>
          {(data || []).map(user =>
          (<div className='mt-2 mb-2 col-lg-3 col-md-4 col-sm-6' key={user.id} onClick={() => navigate(`${user.id}/posts`)}>
            <UserCardComponent user={user} />
          </div>)
          )}
          <div className='mt-2 mb-2 col-lg-3 col-md-4 col-sm-6' onClick={() => navigate(CreateUserRoute())}>
            <AddUserCardComponent />
          </div>
        </div>
      )}
    </PaginatedComponent>
  );
}

export default UserListComponent;
