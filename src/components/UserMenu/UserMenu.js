import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signout } from '../../redux/Auth/operations';
import { GoMoveToEnd } from 'react-icons/go';
import { Button } from './UserMenu.style';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(signout());
    navigate('/', { replace: true });
  };
  return (
    <div>
      <Button onClick={handleSubmit}>
        <GoMoveToEnd />
      </Button>
    </div>
  );
};
