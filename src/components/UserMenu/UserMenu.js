import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signout } from '../../redux/Auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { ImExit } from 'react-icons/im';

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
      Welcome, {user}{' '}
      <button onClick={handleSubmit}>
        <ImExit />
      </button>
    </div>
  );
};
