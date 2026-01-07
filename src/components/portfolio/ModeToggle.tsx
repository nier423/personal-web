import { useMode } from '@/contexts/ModeContext';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function ModeToggle() {
  const { mode, toggleMode } = useMode();

  return (
    <div className="flex items-center gap-3">
      <Label 
        htmlFor="mode-toggle" 
        className={`text-sm font-medium transition-opacity ${
          mode === 'art' ? 'opacity-100' : 'opacity-50'
        }`}
      >
        Art
      </Label>
      <Switch
        id="mode-toggle"
        checked={mode === 'code'}
        onCheckedChange={toggleMode}
        className="data-[state=checked]:bg-primary"
      />
      <Label 
        htmlFor="mode-toggle" 
        className={`text-sm font-medium transition-opacity ${
          mode === 'code' ? 'opacity-100' : 'opacity-50'
        }`}
      >
        Code
      </Label>
    </div>
  );
}
