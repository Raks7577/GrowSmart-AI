import { useNavigate, useParams } from '@tanstack/react-router';
import { ArrowLeft, Play, Droplets, Sun, Calendar } from 'lucide-react';
import { useRef } from 'react';
import { cropData } from '../lib/data';
import { useLanguage } from '../lib/languageContext';
import { getTranslation } from '../lib/translations';

export default function CropDetailPage() {
  const navigate = useNavigate();
  const { cropId } = useParams({ from: '/crop/$cropId' });
  const crop = cropData.find((c) => c.id === cropId);
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (!crop) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Crop not found</p>
      </div>
    );
  }

  const handlePlayAudio = () => {
    const audioFile = crop.audioFiles[language] || crop.audioFiles.en;
    if (audioRef.current) {
      audioRef.current.src = audioFile;
      audioRef.current.play().catch(() => {
        // Audio playback failed (placeholder file doesn't exist)
        console.log('Audio file not available:', audioFile);
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <audio ref={audioRef} className="hidden" />
      
      <div className="relative h-80 overflow-hidden">
        <img src={crop.image} alt={crop.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <button
          onClick={() => navigate({ to: '/' })}
          className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/70"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="mb-2 text-3xl font-bold text-white">{crop.name}</h1>
            <p className="text-sm text-white/90">{crop.shortDesc}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-md px-4 py-6">
        <button 
          onClick={handlePlayAudio}
          className="mb-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-primary py-4 text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95 animate-in fade-in zoom-in-95 duration-500" 
          style={{ animationDelay: '200ms' }}
        >
          <Play className="h-6 w-6" fill="currentColor" />
          <span className="font-semibold">{t('playAudio')}</span>
        </button>

        <div className="mb-6 grid grid-cols-3 gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '300ms' }}>
          <div className="rounded-xl bg-card p-4 text-center shadow-sm">
            <Calendar className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="text-xs text-muted-foreground">{t('season')}</p>
            <p className="font-semibold text-foreground">{crop.season}</p>
          </div>
          <div className="rounded-xl bg-card p-4 text-center shadow-sm">
            <Droplets className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="text-xs text-muted-foreground">{t('water')}</p>
            <p className="font-semibold text-foreground">{crop.waterNeeds}</p>
          </div>
          <div className="rounded-xl bg-card p-4 text-center shadow-sm">
            <Sun className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="text-xs text-muted-foreground">{t('sunlight')}</p>
            <p className="font-semibold text-foreground">{crop.sunlight}</p>
          </div>
        </div>

        <div className="mb-6 rounded-2xl bg-card p-5 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '400ms' }}>
          <h2 className="mb-3 text-lg font-bold text-foreground">{t('description')}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{crop.description}</p>
        </div>

        <div className="mb-6 rounded-2xl bg-card p-5 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '500ms' }}>
          <h2 className="mb-3 text-lg font-bold text-foreground">{t('farmingTips')}</h2>
          <ul className="space-y-2">
            {crop.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-card p-5 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '600ms' }}>
          <h2 className="mb-3 text-lg font-bold text-foreground">{t('recommendedSoil')}</h2>
          <div className="flex flex-wrap gap-2">
            {crop.soilTypes.map((soil) => (
              <span
                key={soil}
                className="rounded-full bg-accent/50 px-4 py-2 text-sm font-medium text-accent-foreground"
              >
                {soil}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
