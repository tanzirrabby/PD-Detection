import { Link, NavLink } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const nav = ['/', '/dashboard', '/iot', '/reports', '/consultation', '/disease-info'];
  const labels = ['Home', 'Dashboard', 'IoT Simulation', 'Reports', 'Consultation', 'Disease Info'];

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-700 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="font-bold text-medicalBlue">PD Fusion Demo</Link>
        <nav className="hidden gap-4 text-sm md:flex">
          {nav.map((item, idx) => (
            <NavLink key={item} to={item} className={({ isActive }) => isActive ? 'text-medicalGreen' : ''}>{labels[idx]}</NavLink>
          ))}
        </nav>
        <button onClick={() => setDarkMode(!darkMode)} className="rounded-full border p-2">{darkMode ? <Sun size={16} /> : <Moon size={16} />}</button>
      </div>
    </header>
  );
}
