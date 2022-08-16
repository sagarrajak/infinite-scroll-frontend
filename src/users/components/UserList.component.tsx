import { useNavigate } from 'react-router';
import PaginatedComponent from '../../common/paginated.component';
import { CreateUserRoute } from '../../config/routes.config';
import { getUserPagedUrl, PagedQueryInterface } from '../../config/urls.config';
import { UserInterface } from '../interfaces/user.interface';
import AddUserCardComponent from './AddUserCardComponent';
import UserCardComponent from './UserCard.component';

export default function UserListComponent() {
  const navigate = useNavigate();
  return (
    <PaginatedComponent<UserInterface>
      apiFunction={(value: PagedQueryInterface) => {
        return getUserPagedUrl(value);
      }
      } uniqueKey={'user/pages'} limit={20}
    >
      {(data) => (
        <div className='w-100 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5' >
          {(data || []).map(user =>
            <div className='mx-5 my-5' key={user.id} onClick={() => navigate(`${user.id}/posts`)}>
              <UserCardComponent user={user} />
            </div>
          )}
          <div className='mx-5 my-2' onClick={() => navigate(CreateUserRoute())}>
            <AddUserCardComponent />
          </div>
        </div>
      )}
    </PaginatedComponent>
  );
}
