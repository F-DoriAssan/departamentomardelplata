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
            <img alt="..." className="w-5 mr-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEU6VZ////8AAAA7V6MmN2cLEB4eLVQSEhItQnu4uLgICxY2TpPPz88wR4WWlpb39/fv7+8kNGIaJkggRJgdHR3v8fgYJEMQFywpPHDV1dUhMFvh4eFDQ0MNEyQVHzuAgIA/Pz9oaGiampowMDClpaU3NzfDw8M0TI4sLCyMjIwkJCTp6emurq55eXlMTExhYWEaM3EePYUiQ5Jubm7bFT8eAAAE+ElEQVR4nO3de1vaMBQG8EqQoYioc4Aiijfwirt8/++2pmGOZ2tPWk5CcsL7/umz9uRnhebWLptctVLO1SS7D90Gz5lloVvgPTsiHLbTzPBT2FZppr0mzFIMhPIDofxAKD8Qyg+E8gOh/EAoPzsuzIePIdrkNqRw2Jr2QjTKaQihOs1/eC3+KlLCTv7Dfd/C1WQK+S94BUIKc1mv3+5cj6b7h9WZjlltCCfML033zDbNabLgNCKUUKl+TV6erjyhUuP92j6Bwtx3uNb+p9ubm+fjijxLFKrF6FN3ezDZIzOQJ1TFaYt8zGmdzok4oepNV77jE7tPoFD1V77nOjyBQjU2vqXl0ydWWPR087zV9UkT/gHWvoDShKs/0dmgAVCUcPUls2zikyXsmSvYDChJqIqOzH1DoCChqdNq9BmUJTR/o0dNgXKE6rpJR2Zrwm7+w44Tofkebfwh9C3Mb2DXlxzX2pmKr5mL6ITOZoTNJbzdAOhb6CrmU/iasLC38SUUIjQ97k0+hWKEel7taSOgEOFCn/0uYaEp0WRQuBavc22uovQm3Rc75vXtffly/m9ECPX077vNN/loVSZ2YXGvsE3NvFf7oheaDg19rxjQz3vw6vsXFtMz5MBwcL6ijIZn/6fT87V+6CimAnkJzSNJo25WvtneRX2vQj3M/EIBH1qmvM/fsHch1aMZ8L9NyPrbEZ7bLqGbkXZpfVLooqz1r/SR/XVJ16fG+FmX9zVmzmIRnvi9hKSw5+TjYRNe6Nr9IMKiaVPvwgNde8GtQtT3PptYS+hx+xyEENaoACGE3PoQQmivACGE3PoQQmivACGE3PoQQrh+QHlqCYn3y0QjVIt+eYY1hN2KY3WYc5rOhGZHSVVsQjK8iThXws9N+B6EoziEXbKRj9XCozSE1NMxS5twGJFwflQeeuPspOKoPMWE+GVEwloP+jRJsfIWxzOknoTFNeStnUQunOuz8hY1IhfeFa1LWXijzxpHn8aTcMm+HcYu1DuJmOvDcQuLm8VpykL+7tLYhUWflbnGH7fQxfg/buEz/3YYufBXi78bJG6h3i7FfQdQ3EJ9Tt7YKXLhoKxZSQknDm6HcQvN2Cll4YODm0XcQgdjp8iF+iET5tgpcqG+HZ4lLXRxO4xaWIydeFOJkQtdjJ1cC18H5bFQKg5ys3a6nXWLGfUc9zF1JP8xhS2tzBBvpbkgD3Swyr4d4cbrh/z3p7pb5fYjdPC8h7udCuPT0rRHNYSX5ceecrvdboVVeylYezHYQOyngbBOBQgh5NaHEEJ7BQgh5NaHEEJ7BQgh5NaHEEJ7hZ0XzpMX6vUX3l51S/3wwr2H7x6BUQi/feXWIOtDCKG9AoQQcutDCKG9AoQ7IJz/SLzX9uj1tYkRCIvRE7cIVT+4MP0RMITs+hBCaK8AIYTc+sGFR8nf8fUjeOzN3FT98MK9yc/Ee947MHqCkFkfQgjtFSCEkFsfQgjtFWoIE++1Jd/zTn/0lP4IGEJ2fQghtFeAEEJufQghtFeAMA1h6+64Ine/EhFaAiGnvn/huIZQ9Ag4U5eHlowcvP6iurx/YWZ9u4Wn/696dfItCMNmt4X6tUHs16UFDyHMVL/jc5pvS6GEmZM34IQOKUwiEMoPhPIDofxAKD8Qyg+E8rNjwjTzVzhsp5nhpzDp7IBwFroFnnOVTa5Ct8Frlq+/ASFPqfIsTq9gAAAAAElFTkSuQmCC"/><span className="font-thin text-gray-300 hover:text-white">Facebook</span>
            </button>

            <button className="flex items-center justify-center space-x-3 rounded border border-red-700 py-2 shadow-sm transition duration-150 hover:text-gray-50  hover:-translate-y-0.5 hover:bg-rose-950 hover:shadow-lg md:w-1/2">
            <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"/><span className="font-thin text-gray-300 hover:text-white">Google</span>
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