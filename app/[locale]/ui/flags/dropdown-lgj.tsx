import { ArrowDownIcon } from '@heroicons/react/24/outline';

import NavLinkLgj from './nav-link-lgj';

export default function DropdownLgj() {



    

    return(
        
        <>

        <button id="dropdown-button" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
          <span className="mr-2">Select Lenguage</span>
          < ArrowDownIcon className="w-5 h-5 ml-2 -mr-1" />
        </button>
        <div id="dropdown-menu" className="hidden absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
          {/* <!-- Search input --> */}
          <input id="search-input" className="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none" type="text" placeholder="Search items" autoComplete="off" />
          {/* <!-- Dropdown content goes here --> */}
          < NavLinkLgj />

        </div>

        </>
    )
}