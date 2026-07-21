import { Link, Outlet, useLocation } from 'react-router-dom';
import { ROUTE_OPTIONS } from '../../constants';
import { Typography } from '../../components/common';
import './index.css';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-brand">
          <Typography variant="headline-md" className="sidebar-logo">
            TaskFlow
          </Typography>
        </div>

        <nav className="sidebar-nav">
          {ROUTE_OPTIONS.map((option) => {
            const isActive = pathname === option.link;
            return (
              <Link
                key={option.link}
                to={option.link}
                className={['sidebar-link', isActive ? 'sidebar-link-active' : '']
                  .filter(Boolean)
                  .join(' ')}
              >
                <Typography variant="label-md">{option.label}</Typography>
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className='content'>
        <Outlet />
      </main>
    </>
  );
};

export default Sidebar;
