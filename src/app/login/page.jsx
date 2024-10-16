"use client";
import Image from "next/image";
import loginPic from "../images/login.png";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="h-full w-full flex items-center justify-center">
        <div className="bg-white rounded-xl border-black/10 shadow px-10 py-8">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex flex-col items-center justify-center gap-1">
                <Image alt="LoginPic" src={loginPic} className="h-32 w-56" />
                <h1 className="font-bold text-lg">Welcome to JDS</h1>
                <p className="text-black/60 text-sm">
                  Please sign in to continue
                </p>
              </div>
            </div>

            <GoogleLoginButton />
          </div>
        </div>
      </div>
    </div>
  );
}

const GoogleLoginButton = () => {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await signIn("google");
      }}
    >
      <button
        type="submit"
        className="flex items-center justify-center gap-4 w-full py-2 px-4 rounded-md bg-white border border-black/10 shadow-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          className="h-4 w-4"
          viewBox="0 0 48 48"
        >
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
          <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          ></path>
          <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          ></path>
          <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
        </svg>
        <span className="font-medium">Continue with Google</span>
      </button>
    </form>
  );
};
