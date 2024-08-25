import { Link, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  const LinkStyle = { textDecoration: 'none', color: 'cyan' };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <header
        style={{
          width: '100%',
          height: '4rem',
          backgroundColor: '#000',
          color: '#fff',
        }}
      >
        <nav
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Link to="/" style={{ ...LinkStyle }}>
            Home
          </Link>
          <Link to="/v2" style={{ ...LinkStyle }}>
            V2
          </Link>
          <Link to="/v2/app1" style={{ ...LinkStyle }}>
            APP1
          </Link>
          <Link to="/v2/app2" style={{ ...LinkStyle }}>
            APP2
          </Link>
        </nav>
      </header>
      <main style={{ width: '100%', height: 'calc(100% - 4rem)' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
