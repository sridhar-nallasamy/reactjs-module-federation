import CenterDiv from '@/components/centerDiv';
import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('loc', location);
  }, [location]);

  if (location.pathname === '/') return <Navigate to="/v2" />;

  return <CenterDiv>Home 🏡</CenterDiv>;
};

export default Home;
