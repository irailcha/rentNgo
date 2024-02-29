import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../../redux/Auth/selectors';
import { logOut } from '../../redux/Auth/operations';
import { ImExit } from 'react-icons/im';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(selectUser);

  const handleSubmit = () => {
    dispatch(logOut);
    navigate('/', { replace: true });
  };
  return (
    <div>
      Welcome, {name}{' '}
      <button onClick={handleSubmit}>
        <ImExit />
      </button>
    </div>
  );
};
