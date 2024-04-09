import { Metadata } from 'next';

import LoginForm from '@/app/[locale]/ui/login-form';
import TechnologyLogin from '@/app/[locale]/ui/technology-login';

export const metadata: Metadata = {
  title: 'Login',
};
export default function LoginPage() {


  return (
      <div >
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="relative m-6 flex flex-col space-y-10 rounded-2xl bg-gray-900 shadow-2xl md:m-0 md:flex-row md:space-y-0">
        <div className="p-6 md:p-20">
        <TechnologyLogin />

        <LoginForm />

              <div className="mt-12 border-b border-b-amber-300"></div>
 
          <p className="py-6 text-center text-sm font-thin text-gray-300">
            or log in with
          </p>
          <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
            <button className="flex items-center justify-center space-x-3 rounded border  border-blue-700 py-2 shadow-sm transition duration-150 hover:text-gray-50 hover:-translate-y-0.5 hover:bg-sky-950 hover:shadow-lg md:w-1/2">
              <span className="font-thin text-gray-300 hover:text-white">Facebook</span>
            </button>

            <button className="flex items-center justify-center space-x-3 rounded border border-red-700 py-2 shadow-sm transition duration-150 hover:text-gray-50  hover:-translate-y-0.5 hover:bg-rose-950 hover:shadow-lg md:w-1/2">
              <span className="font-thin text-gray-300 hover:text-white">Google</span>
            </button>
            </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="#"
              className="font-semibold leading-6 text-amber-600 hover:text-amber-500"
            >
              {' '}
              Register
            </a>
          </p>
        </div>
         
        </div>
        </div>
      </div>
  );
}