import { ThemeButton } from '@/components/ThemeButton';

export function Header() {
  return (
    <header className="sm:px-0 px-4 py-4 flex items-center justify-between">
        <a href="https://ecs-notas-6skz.vercel.app/">
          <img src="/ECSLogo.png" alt="Logo da ECS" width="150"/>
        </a>
      <div className="flex items-center justify-center gap-4">
        <ThemeButton />
      </div>
    </header>
  );
}
