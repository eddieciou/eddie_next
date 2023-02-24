'use client';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { TUser } from '@/types/commonTypes';

const Page = () => {
  const { data: session } = useSession();
  const [userData, setUserData] = useState<TUser>();

  return (
    <div className='p-5'>
      <p className='flex items-center justify-center p-5 text-lg font-bold text-red-500'>
        This Is The Admin Panel. Only Admin Users Can Access This.
      </p>
      {/*<Button onClick={fetchUserProfile}>Get User Profile</Button>*/}

      <div className='grid grid-cols-5'>
        <p className='text-slate-600'>UserName:</p>
        <p className='col-span-4 text-sky-600'>{userData?.username}</p>
        <p className='text-slate-600'>Name:</p>
        <p className='col-span-4  text-sky-600'>{userData?.username}</p>
        <p className='text-slate-600'>Role:</p>
        <p className='col-span-4  text-sky-600'> {userData?.username}</p>
      </div>
    </div>
  );
};

export default Page;
