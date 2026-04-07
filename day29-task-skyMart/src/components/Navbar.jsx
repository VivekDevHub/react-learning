import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router'
import { userData } from '../context/AuthContext';
import { productData } from '../context/ProductContext';

const navItems = [
  { label: 'Home', to: '/home' },
  { label: 'Shop', to: '/products' },
  { label: 'About', to: '/about' },
]

function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = userData();
  const { cart, toggleCart } = productData();
  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    navigate("/login");
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className={`sticky top-0 z-30 transition-all duration-300 bg-ink/80 ${isScrolled ? "border-b-white/80" : ""} border-2 backdrop-blur-xl border-b border-transparent`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        <Link to="/home" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-volt rounded-xl flex items-center justify-center">
            <i className="ri-flashlight-fill text-ink text-lg"></i>
          </div>
          <span className="font-heading font-bold text-lg">
            Sky<span className="text-volt">Mart</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/12 px-3 py-1.5 rounded-xl">
            <div className="w-6 h-6 bg-volt rounded-lg flex items-center justify-center text-ink text-xs font-bold">
              B
            </div>
            <span className="text-sm text-white/70 font-body max-w-25 truncate">
              {user?.name?.length > 11 ? `${user.name.slice(0, 8)}...` : user.name}
            </span>
          </div>

          <button
            className="relative p-2.5 aspect-square hover:bg-white/12 border border-white/10 rounded-xl transition-all"
            onClick={() => toggleCart(true)}
          >
            <i className="ri-shopping-cart-line text-lg"></i>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-volt text-ink text-[10px] font-bold rounded-full px-1.5 py-0.5">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>

          <button
            title="Logout"
            className="p-2.5 aspect-square hover:bg-red-500/20 hover:border-red-500/30 border border-white/10 rounded-xl transition-all text-white/60 hover:text-red-400" onClick={logoutUser}
          >
            <i className="ri-logout-box-r-line text-base"></i>
          </button>

          <button
            className="md:hidden nav-btn"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <i className="ri-close-line text-lg"></i>
            ) : (
              <i className="ri-menu-line text-lg"></i>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-white/8 bg-[#111] px-4 py-4 flex flex-col gap-3 animate-fade-in">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `nav-link text-base py-2 ${isActive ? 'active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <button className="flex items-center gap-2 text-red-400 text-sm mt-2" onClick={logoutUser}>
            <i className="ri-logout-box-r-line text-sm"></i>
            Logout
          </button>
        </div>
      )}
    </header>
  )
}

export default Navbar