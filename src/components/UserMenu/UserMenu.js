import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signout } from '../../redux/Auth/operations';
import { GoMoveToEnd } from 'react-icons/go';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(signout());
    navigate('/', { replace: true });
  };
  return (
    <div>
      {' '}
      <button onClick={handleSubmit}>
        <GoMoveToEnd />
      </button>
    </div>
  );
};
