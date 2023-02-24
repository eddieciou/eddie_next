'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface IProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const LoginPage = ({ searchParams }: IProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();

  const onSubmit = async () => {
    signIn('credentials', {
      username: email,
      password,
      redirect: false
      // callbackUrl: (searchParams?.callbackUrl as string) || '/'
    }).then((response) => {
      if (response?.ok) {
        router.push((searchParams?.callbackUrl as string) || '/');
      } else {
        console.log('RRRR');
        console.log(response);
        setErrorMessage(response?.error as string);
      }
    });
  };
  return (
    <div
      className={
        'flex h-screen flex-col items-center  justify-center gap-1 bg-gradient-to-br from-cyan-300 to-sky-600'
      }
    >
      {errorMessage && (
        <p className='rounded-md bg-red-100 py-2 px-5 text-red-700'>{errorMessage}</p>
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
