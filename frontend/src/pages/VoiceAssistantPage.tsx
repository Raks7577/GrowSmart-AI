import { useState, useRef } from 'react';
import { Mic, Volume2 } from 'lucide-react';
import { useLanguage } from '../lib/languageContext';
import { getTranslation } from '../lib/translations';
import { assistantAudioFiles } from '../lib/data';

type AssistantState = 'idle' | 'listening' | 'speaking';

export default function VoiceAssistantPage() {
  const [state, setState] = useState<AssistantState>('idle');
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleMicClick = () => {
    if (state === 'idle') {
      setState('listening');
      setTimeout(() => {
        setState('speaking');
        
        // Play audio file for the selected language
        const audioFile = assistantAudioFiles[language] || assistantAudioFiles.en;
        if (audioRef.current) {
          audioRef.current.src = audioFile;
          audioRef.current.play().catch(() => {
            // Audio playback failed (placeholder file doesn't exist)
            console.log('Audio file not available:', audioFile);
          });
        }
        
        setTimeout(() => {
          setState('idle');
        }, 3000);
      }, 2000);
    }
  };

  const getStatusText = () => {
    switch (state) {
      case 'listening':
        return t('assistantListening');
      case 'speaking':
        return t('assistantSpeaking');
      default:
        return t('assistantIdle');
    }
  };

  const getSubText = () => {
    switch (state) {
      case 'listening':
        return t('assistantListeningDesc');
      case 'speaking':
        return t('assistantSpeakingDesc');
      default:
        return t('assistantIdleDesc');
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 px-4">
      <audio ref={audioRef} className="hidden" />
      
      <div className="w-full max-w-md">
        <div className="mb-12 text-center animate-in fade-in slide-in-from-top-4 duration-500">
          <h1 className="mb-2 text-3xl font-bold text-foreground">{t('assistantTitle')}</h1>
          <p className="text-sm text-muted-foreground">{t('assistantSubtitle')}</p>
        </div>

        <div className="relative mb-12 flex items-center justify-center">
          {state !== 'idle' && (
            <>
              <div className="absolute h-48 w-48 animate-ping rounded-full border-2 border-primary/30 opacity-50" style={{ animationDuration: '2s' }} />
              <div className="absolute h-48 w-48 animate-ping rounded-full border-2 border-primary/30 opacity-30" style={{ animationDuration: '2s', animationDelay: '0.3s' }} />
              <div className="absolute h-48 w-48 animate-ping rounded-full border-2 border-primary/30 opacity-10" style={{ animationDuration: '2s', animationDelay: '0.6s' }} />
            </>
          )}

          <button
            onClick={handleMicClick}
            disabled={state !== 'idle'}
            className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-2xl transition-all hover:scale-105 active:scale-95 disabled:cursor-not-allowed"
          >
            {state === 'speaking' ? (
              <Volume2 className="h-16 w-16 text-primary-foreground animate-in zoom-in-50 spin-in-180 duration-300" />
            ) : (
              <Mic className="h-16 w-16 text-primary-foreground animate-in zoom-in-50 spin-in-180 duration-300" />
            )}
          </button>
        </div>

        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500" key={state}>
          <h2 className="mb-2 text-xl font-semibold text-foreground">{getStatusText()}</h2>
          <p className="mx-auto max-w-sm text-sm text-muted-foreground">{getSubText()}</p>
        </div>

        {state === 'idle' && (
          <div className="mt-12 space-y-3 animate-in fade-in duration-700" style={{ animationDelay: '300ms' }}>
            <p className="text-center text-xs font-medium text-muted-foreground">
              {t('assistantTryAsking')}
            </p>
            <div className="space-y-2">
              {[
                t('assistantQ1'),
                t('assistantQ2'),
                t('assistantQ3'),
              ].map((question, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-card p-3 text-sm text-card-foreground shadow-sm animate-in slide-in-from-left-4 duration-500"
                  style={{ animationDelay: `${400 + i * 100}ms` }}
                >
                  {question}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
