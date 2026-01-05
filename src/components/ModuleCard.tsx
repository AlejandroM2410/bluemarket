import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  onClick?: () => void;
  isExpanded?: boolean;
  content?: string;
}

export const ModuleCard = ({
  title,
  description,
  icon,
  index,
  onClick,
  isExpanded,
  content,
}: ModuleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300',
        onClick && 'cursor-pointer hover:border-primary/30 hover:shadow-lg'
      )}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold text-foreground">{title}</h3>
            {onClick && (
              <ChevronRight
                className={cn(
                  'h-5 w-5 text-muted-foreground transition-transform duration-200',
                  isExpanded && 'rotate-90'
                )}
              />
            )}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          
          {isExpanded && content && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-border"
            >
              <p className="text-sm text-foreground leading-relaxed">{content}</p>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
    </motion.div>
  );
};
