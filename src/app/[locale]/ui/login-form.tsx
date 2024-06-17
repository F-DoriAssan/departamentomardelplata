'use client';
import {
  useFormState,
  useFormStatus,
} from 'react-dom';

import { authenticate } from 'src/app/[locale]/lib/actions';
import { Button } from 'src/app/[locale]/ui/button';

import { ArrowRightIcon } from '@heroicons/react/20/solid';
import {
  AtSymbolIcon,
  ExclamationCircleIcon,
  KeyIcon,
} from '@heroicons/react/24/outline';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <div >
          <form action={dispatch} className="space-y-6">
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-50"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative mt-2">
                <input
                  className="peer block w-full rounded-md border-0 text-gray-900 shadow-sm  pl-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-amber-600" />
              </div>
            </div>
            <div className="flex items-center justify-between">
                            <label
                className="block text-sm font-medium leading-6 text-gray-50"
                htmlFor="password"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-amber-600 hover:text-amber-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border-0 text-gray-900 shadow-sm  pl-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                id="password"
                type="password"
                name="password"
                autoComplete="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-amber-600" />
            </div>
            
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {errorMessage && (
                <>
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                  <p className="text-sm text-red-500">{errorMessage}</p>
                </>
              )}
            </div>
            <LoginButton />
          </form>
      </div>
         

  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="flex w-full justify-center rounded-md bg-amber-600 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-300 shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
      aria-disabled={pending}
    >
      Sign in
      <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
