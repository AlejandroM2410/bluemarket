import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full bg-secondary p-1">
      <button
        onClick={() => setLanguage('es')}
        className={cn(
          'px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200',
          language === 'es'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          'px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200',
          language === 'en'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        EN
      </button>
    </div>
  );
};
