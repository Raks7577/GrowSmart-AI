import { Play, Leaf } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { cropData } from '../lib/data';
import { useLanguage } from '../lib/languageContext';
import { getTranslation } from '../lib/translations';

export default function HomePage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-md items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">{t('appName')}</h1>
              <p className="text-xs text-muted-foreground">{t('appTagline')}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-md px-4 py-6">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="mb-2 text-2xl font-bold text-foreground">{t('homeTitle')}</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            {t('homeSubtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {cropData.map((crop, index) => (
            <div
              key={crop.id}
              onClick={() => navigate({ to: '/crop/$cropId', params: { cropId: crop.id } })}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-md transition-all hover:shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={crop.image}
                  alt={crop.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="mb-1 text-xl font-bold text-white">{crop.name}</h3>
                  <p className="text-sm text-white/90">{crop.shortDesc}</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {crop.season}
                  </span>
                  <span className="rounded-full bg-accent/50 px-3 py-1 text-xs font-medium text-accent-foreground">
                    {crop.difficulty}
                  </span>
                </div>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110">
                  <Play className="h-5 w-5" fill="currentColor" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
