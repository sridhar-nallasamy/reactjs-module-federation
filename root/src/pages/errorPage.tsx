import CenterDiv from '@/components/centerDiv';
import { useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <CenterDiv>
      <h1>Oops! 🙁</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </CenterDiv>
  );
};

export default ErrorPage;
