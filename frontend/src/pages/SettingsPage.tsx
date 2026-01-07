import { Check } from 'lucide-react';
import { languageData } from '../lib/data';
import { useLanguage } from '../lib/languageContext';
import { getTranslation, LanguageCode } from '../lib/translations';

export default function SettingsPage() {
  const { language, setLanguage } = useLanguage();
  const t = (key: string) => getTranslation(language, key);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto max-w-md px-4 py-4">
          <h1 className="text-2xl font-bold text-foreground">{t('settingsTitle')}</h1>
          <p className="text-sm text-muted-foreground">{t('settingsSubtitle')}</p>
        </div>
      </header>

      <div className="mx-auto max-w-md px-4 py-6">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="mb-4 text-lg font-semibold text-foreground">{t('languageSelection')}</h2>
          <div className="space-y-3">
            {languageData.map((lang, index) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code as LanguageCode)}
                className={`flex w-full items-center justify-between rounded-xl p-4 transition-all animate-in fade-in slide-in-from-left-4 duration-500 ${
                  language === lang.code
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card text-card-foreground shadow-sm hover:shadow-md'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3">
                  {lang.flagImage ? (
                    <img 
                      src={lang.flagImage} 
                      alt={lang.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-3xl">{lang.flag}</span>
                  )}
                  <div className="text-left">
                    <p className="font-semibold">{lang.name}</p>
                    <p
                      className={`text-sm ${
                        language === lang.code
                          ? 'text-primary-foreground/80'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {lang.nativeName}
                    </p>
                  </div>
                </div>
                {language === lang.code && (
                  <div className="animate-in zoom-in-50 duration-300">
                    <Check className="h-6 w-6" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '300ms' }}>
          <h2 className="mb-4 text-lg font-semibold text-foreground">{t('about')}</h2>
          <div className="rounded-xl bg-card p-5 shadow-sm">
            <p className="mb-2 text-sm text-muted-foreground">
              {t('aboutText')}
            </p>
            <p className="text-xs text-muted-foreground">{t('version')}</p>
          </div>
        </div>

        <footer className="mt-12 pb-8 text-center text-xs text-muted-foreground">
          {t('footer')}{' '}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            caffeine.ai
          </a>
        </footer>
      </div>
    </div>
  );
}
