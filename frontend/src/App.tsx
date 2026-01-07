import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import VoiceAssistantPage from './pages/VoiceAssistantPage';
import GuidesPage from './pages/GuidesPage';
import SettingsPage from './pages/SettingsPage';
import CropDetailPage from './pages/CropDetailPage';
import { LanguageProvider } from './lib/languageContext';

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const assistantRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/assistant',
  component: VoiceAssistantPage,
});

const guidesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/guides',
  component: GuidesPage,
});

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/settings',
  component: SettingsPage,
});

const cropDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/crop/$cropId',
  component: CropDetailPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  assistantRoute,
  guidesRoute,
  settingsRoute,
  cropDetailRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <RouterProvider router={router} />
        </LanguageProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
