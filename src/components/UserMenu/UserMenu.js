import { useSelector, useDispatch } from 'react-redux';
import { setIsLogin } from '../../redux/Auth/userSlice';
import { ImExit } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(state => state.user.name);

  const handleSubmit = () => {
    dispatch(setIsLogin());
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
