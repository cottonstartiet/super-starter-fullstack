
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../hooks';
// import Loading from './Loading';
// import { signinState } from '../../constants';

function PrivateRoute(props: any) {
  // const navigate = useNavigate();
  // const { signinStatus } = useAuth();
  const { children } = props;

  // if (signinStatus === signinState.inprogress) {
  //   return <Loading />;
  // }

  // if (signinStatus === signinState.signedout) {
  //   navigate(`/login`, {
  //     replace: true
  //   });
  // }

  return (children);
}

export default PrivateRoute;
