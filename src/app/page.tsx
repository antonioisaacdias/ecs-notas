import { Note } from '@/components/Note';
import { Hero } from '@/components/Hero';

export default function Page() {
  return (
    <main className="sm:my-20 my-2 h-[70vh] xl:grid w-full grid-cols-2 flex flex-col xl:divide-x">
      <Hero />
      <hr className="xl:hidden h-1 bg-stone-900 dark:bg-stone-100 max-w-4xl w-11/12 m-auto" />
      <Note />
    </main>
  );
}
