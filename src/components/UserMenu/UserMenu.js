import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signout } from '../../redux/Auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Icon } from './UserMenu.style';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useAuth();
  const handleSubmit = () => {
    dispatch(signout());
    navigate('/', { replace: true });
  };
  return (
    <div>
      Welcome, {user.username}{' '}
      <button onClick={handleSubmit}>
        <Icon />
      </button>
    </div>
  );
};
