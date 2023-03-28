import React from "react";
import { getAuth, signOut } from "firebase/auth";


export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {

  const auth = getAuth();


  return (
    <div className="bg-gray-100 font-sans w-full m-0">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1202/1202926.png"
                className="w-10 h-10 text-purple-600"
              >
              </img>
            </div>

            <div className="hidden sm:flex sm:items-center">
              <a
                href="#"
                className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
              >
                Favourites
              </a>
              <a
                href="#"
                className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
              >
                Matches
              </a>
              <a
                href="#"
                className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
              >
                Players
              </a>
            </div>

            <div className="hidden sm:flex sm:items-center">
              <button
                onClick={() => signOut(auth)}
                className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
