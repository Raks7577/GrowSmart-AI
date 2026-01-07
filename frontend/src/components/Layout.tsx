import { Outlet, useNavigate, useRouterState } from '@tanstack/react-router';
import { Home, Mic, BookOpen, Settings } from 'lucide-react';
import { useLanguage } from '../lib/languageContext';
import { getTranslation } from '../lib/translations';

export default function Layout() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);

  const navItems = [
    { path: '/', icon: Home, label: t('navHome') },
    { path: '/assistant', icon: Mic, label: t('navAssistant') },
    { path: '/guides', icon: BookOpen, label: t('navGuides') },
    { path: '/settings', icon: Settings, label: t('navSettings') },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };

  return (
    <div className="flex h-screen flex-col bg-background">
      <main className="flex-1 overflow-y-auto pb-20">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card shadow-lg">
        <div className="mx-auto flex max-w-md items-center justify-around px-4 py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <button
                key={item.path}
                onClick={() => navigate({ to: item.path })}
                className="relative flex flex-col items-center gap-1 transition-colors"
              >
                <div className="relative">
                  <Icon
                    className={`h-6 w-6 transition-colors ${
                      active ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  />
                  {active && (
                    <div className="absolute -bottom-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-primary transition-all duration-300" />
                  )}
                </div>
                <span
                  className={`text-xs font-medium ${
                    active ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
