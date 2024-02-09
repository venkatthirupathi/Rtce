import React from 'react'
import { Link } from 'react-router-dom';
import Loginbox from '../Components/Loginbox';
import { Button } from '@/Components/ui/button';

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-[2rem]">
    <div className="z-10 flex flex-col gap-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
      <nav className="fixed flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <ul className="flex gap-5 ">
          <li className="inline-block transition-transform hover:translate-y-[-0.5rem]">
            <Link to="#" className="inline-block font-mono font-extrabold">
              About
            </Link>
          </li>
          <li className="inline-block transition-transform hover:translate-y-[-0.5rem]">
            <Link to="#" className="font-mono font-extrabold">
              Quick Join
            </Link>
          </li>
          <li className="inline-block transition-transform hover:translate-y-[-0.5rem]">
            <Link to="#" className="font-mono font-extrabold">
              Sign Up
            </Link>
          </li>
          <li className="inline-block transition-transform hover:translate-y-[-0.5rem]">
            <Link to="#" className="font-mono font-extrabold">
            <Button>Sign In</Button>
            </Link>
          </li>
        </ul>
      </nav>

      <section className="flex gap-5 justify-between items-center">
        <h1 className="text-5xl font-extrabold">
          Collaborate With <br /> Team! <span>C</span>CE
        </h1>
        <div className='m-left=5'><Loginbox/></div>
      </section>
    </div>
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
      <a
        href="#"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Code Reviews{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Find in-depth information about Next.js features and API.
        </p>
      </a>

      <a
        href="#"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Complete Project In One Editor{' '}
          <span className="inline-block  transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Learn about Next.js in an interactive course with&nbsp;quizzes!
        </p>
      </a>
    </div>
  </main>
);
  
}
