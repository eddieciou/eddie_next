import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className='fixed top-0 flex h-32 w-full gap-5 bg-gradient-to-b from-cyan-50 to-cyan-200 p-2'>
      <Link className='text-sky-600 hover:text-sky-700' href={'/'}>
        Home
      </Link>

      <Link className='text-sky-600 hover:text-sky-700' href={'/admin/panel'}>
        Admin Panel
      </Link>
      <Link className='text-sky-600 hover:text-sky-700' href={'/common'}>
        Common Page
      </Link>
      <div className='ml-auto flex gap-2'>
        {session?.user ? (
          <>
            <p className='text-sky-600'> {session.user.username}</p>
            <button className='text-red-500' onClick={() => signOut()}>
              Sign Out
            </button>
          </>
        ) : (
          <button className='text-green-600' onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
