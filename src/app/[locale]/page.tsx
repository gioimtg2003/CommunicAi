import Header from '@/components/common/header/Header';
import ShinyButton from '@/components/ui/shiny-button';
import TypingAnimation from '@/components/ui/typing-animation';
import WordPullUp from '@/components/ui/word-pull-up';
import { cn } from '@/lib/utils';
import SplineNext from '@splinetool/react-spline/next';
import { Knewave } from 'next/font/google';

const sedgwick = Knewave({
  weight: ['400'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <Header />
      <main className='min-h-screen w-full'>
        <section className='relative top-0 z-20 h-screen w-full'>
          <SplineNext
            className='absolute inset-x-0 bottom-0 h-[90%] w-full'
            scene='https://prod.spline.design/nU9TF4-gfTqOrstp/scene.splinecode'
          />
          <div className='absolute inset-x-0 flex h-full w-full items-center justify-center'>
            <div className='flex flex-col items-center gap-y-4'>
              <TypingAnimation
                className={cn(
                  'text-5xl font-bold text-indigo-800',
                  sedgwick.className
                )}
                text={"Hello, I'm G-Ai"}
                duration={80}
              />
              <WordPullUp
                className='font-medium tracking-[-0.02em] text-black'
                words="I'm a speech to speech AI that can help you with your
                communicate. I'm here to inspire you."
              />
              <ShinyButton className='mt-6 bg-gradient-to-r from-white from-10% via-blue-200/20 via-30% to-violet-300/40 to-90% px-4 py-2'>
                Join Wait List
              </ShinyButton>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
