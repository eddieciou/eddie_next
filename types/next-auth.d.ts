import NextAuth from 'next-auth';
import { TUser } from '@/types/commonTypes';

declare module 'next-auth' {
  interface Session {
    user: TUser;
  }
}
