import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggleButton = () => {
  const { theme, toggleThemeWithTransition } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={(e) => toggleThemeWithTransition(e)}
      className="physics-theme-toggle-btn"
      aria-label="Toggle Theme"
      title={isDark ? 'Cambiar a Modo Claro (Burbuja)' : 'Cambiar a Modo Oscuro (Burbuja)'}
    >
      <svg
        className={`sun-moon-svg ${isDark ? 'dark-mode' : 'light-mode'}`}
        viewBox="0 0 24 24"
        width="22"
        height="22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <mask id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle
            className="moon-cutout"
            cx={isDark ? '12' : '26'}
            cy={isDark ? '4' : '2'}
            r="7"
            fill="black"
          />
        </mask>

        {/* Center Sun / Moon Circle */}
        <circle
          className="sun-center"
          cx="12"
          cy="12"
          r={isDark ? '9' : '5'}
          fill="currentColor"
          mask="url(#moon-mask)"
        />

        {/* Sun Rays (Springs out in light mode) */}
        <g className="sun-rays" stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
  );
};
