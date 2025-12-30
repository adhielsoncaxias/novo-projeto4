import React from 'react';
import { Menu, Bell, Moon, Sun, Search } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, isDarkMode, onToggleTheme }) => {
  return (
    <header className="sticky top-0 z-30 h-16 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="flex h-full items-center justify-between px-4 lg:px-8">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Search */}
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-muted rounded-lg w-80">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar..."
              className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground"
            />
            <kbd className="hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-background px-1.5 font-mono text-xs font-medium">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
            aria-label="Alternar tema"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <button className="relative p-2 hover:bg-accent rounded-lg transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-card" />
          </button>

          <div className="hidden sm:block h-8 w-px bg-border mx-2" />

          <button className="hidden sm:flex items-center gap-2 px-3 py-2 hover:bg-accent rounded-lg transition-colors">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-purple-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;