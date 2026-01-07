import { useState } from 'react';
import { soilData, fertilizerData } from '../lib/data';
import { useLanguage } from '../lib/languageContext';
import { getTranslation } from '../lib/translations';

export default function GuidesPage() {
  const [activeTab, setActiveTab] = useState<'soil' | 'fertilizer'>('soil');
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto max-w-md px-4 py-4">
          <h1 className="text-2xl font-bold text-foreground">{t('guidesTitle')}</h1>
          <p className="text-sm text-muted-foreground">{t('guidesSubtitle')}</p>
        </div>
      </header>

      <div className="mx-auto max-w-md px-4 py-6">
        <div className="mb-6 flex gap-2 rounded-xl bg-card p-1 shadow-sm animate-in fade-in slide-in-from-top-4 duration-500">
          <button
            onClick={() => setActiveTab('soil')}
            className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              activeTab === 'soil'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {t('soilTypes')}
          </button>
          <button
            onClick={() => setActiveTab('fertilizer')}
            className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              activeTab === 'fertilizer'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {t('fertilizers')}
          </button>
        </div>

        {activeTab === 'soil' && (
          <div className="space-y-4">
            {soilData.map((soil, index) => (
              <div
                key={soil.id}
                className="overflow-hidden rounded-2xl bg-card shadow-md animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={soil.image}
                    alt={soil.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white">{soil.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="mb-4 text-sm text-muted-foreground">{soil.description}</p>
                  <div className="mb-3">
                    <h4 className="mb-2 text-sm font-semibold text-foreground">{t('bestFor')}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {soil.bestFor.map((crop) => (
                        <span
                          key={crop}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {crop}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-foreground">{t('characteristics')}:</h4>
                    <ul className="space-y-1">
                      {soil.characteristics.map((char, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                          <span>{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'fertilizer' && (
          <div className="space-y-4">
            {fertilizerData.map((fertilizer, index) => (
              <div
                key={fertilizer.id}
                className="rounded-2xl bg-card p-5 shadow-md animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{fertilizer.name}</h3>
                    <p className="text-sm text-muted-foreground">{fertilizer.type}</p>
                  </div>
                  <span className="rounded-lg bg-accent/50 px-3 py-1 text-sm font-bold text-accent-foreground">
                    {fertilizer.npkRatio}
                  </span>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">{fertilizer.description}</p>
                <div className="mb-3">
                  <h4 className="mb-2 text-sm font-semibold text-foreground">{t('suitableFor')}:</h4>
                  <div className="flex flex-wrap gap-2">
                    {fertilizer.suitableFor.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-foreground">{t('application')}:</h4>
                  <p className="text-xs text-muted-foreground">{fertilizer.application}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
