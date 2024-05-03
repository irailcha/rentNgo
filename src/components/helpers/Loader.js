import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  const wrapperStyle = {
    color: 'blue',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };
  return (
    <div style={wrapperStyle}>
      <RotatingLines
        visible={true}
        strokeColor=" #3470ff"
        height="150"
        width="150"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
