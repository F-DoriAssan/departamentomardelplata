import { Metadata } from 'next';

import LoginForm from '@/app/[locale]/ui/login-form';

export const metadata: Metadata = {
  title: 'Login',
};
export default function LoginPage() {
  return (
    <main className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      
        <LoginForm />
      </div>
    </main>
  );
}