import React from "react";
import { signIn, signOut } from "next-auth/react";
import {
  LoginButton,
  LogoutButton,
  RegisterButton,
  User,
} from "../../app/user";
import Link from "next/link";

function Navbar() {
  return (
    // <div className='flex justify-between bg-slate-600 p-4 px-32'>
    //     <p>Logo</p>
    //     <div className='flex justify-center gap-4'>
    //         <p>Navbar</p>
    //         <p>Navbar</p>
    //         <p>Navbar</p>
    //         <p>Navbar</p>
    //     </div>
    //     <p>SignOut</p>
    // </div>
    <nav>
    <div
      className="flex flex-row justify-between p-4 mx-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                      text-white font-bold overflow-hidden"
    >
      <Link href='/'>
        <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 from-10% via-slate-600 via-30% to-purple-900 to-90% cursor-pointer">
          CODIFY
        </p>
      </Link>
      <div className=" md:flex flex-row justify-center gap-4 mx-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-500 from-10% via-slate-600 via-30% to-gray-300 to-90%  hidden">
        <p>Home</p>
        <p>About Us</p>
        <p>Features</p>
        <p>Solution</p>
      </div>
      {/* <button className=""> SignOut </button> */}
      <LogoutButton />
    </div>
    </nav>
  );
}

export default Navbar;
