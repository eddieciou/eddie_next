'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

interface IProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const LoginPage = ({ searchParams }: IProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async () => {
    const result = await signIn('credentials', {
      username: email,
      password,
      redirect: true,
      callbackUrl: (searchParams?.callbackUrl as string) || '/'
    });
  };
  return (
    <div
      className={
        'flex h-screen flex-col items-center  justify-center gap-1 bg-gradient-to-br from-cyan-300 to-sky-600'
      }
    >
      {searchParams?.message && (
        <p className='rounded-md bg-red-100 py-2 px-5 text-red-700'>{searchParams?.message}</p>
      )}
      <div className='flex flex-col gap-5 rounded-md bg-white px-7 py-8 shadow'>
        <input
          className='w-full rounded-lg border border-gray-500 p-2 outline-none'
          type='email'
          placeholder='請輸入帳號'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          className='w-full rounded-lg border border-gray-500 p-2 outline-none'
          placeholder='請輸入密碼'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='rounded-lg bg-blue-500 p-2 text-white' onClick={onSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
