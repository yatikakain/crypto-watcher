import { useNavigate } from 'react-router';
import { Hamburger, logo } from '../../assets';

import { BaseButton } from '../../components';
import { Link } from 'react-router-dom';

export function NavBar() {
  const navigate = useNavigate();

  const Links = [
    {
      id: 0,
      route: 'Cryto Taxes',
      link: '/',
    },
    {
      id: 1,
      route: 'Free Tools',
      link: '/',
    },
    {
      id: 2,
      route: 'Resource Center',
      link: '/',
    },
  ];

  return (
    <nav className="border border-b-[#DEDFE2]">
      <div className="wrapper flex justify-between py-7 items-center">
        <img
          src={logo}
          alt=""
          onClick={() => navigate('/')}
          className="cursor-pointer"
        />
        <div className="hidden md:flex gap-[45px] items-center">
          <div className="flex gap-8 text-base font-semibold text-[var(--black)]">
            {Links.map((link) => {
              return (
                <Link to={link.link} key={link.id}>
                  <p>{link.route}</p>
                </Link>
              );
            })}
          </div>
          <Link to="#">
            <BaseButton>Get Started</BaseButton>
          </Link>
        </div>
        <img src={Hamburger} alt="" className="flex md:hidden" />
      </div>
    </nav>
  );
}
