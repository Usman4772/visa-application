"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { deleteCookie } from "cookies-next";
function Nav({ showBtn = false, setShowBtn }) {
  const router = useRouter();
  function logout() {
    deleteCookie("jwt-token");
    setShowBtn(false);
  }
  return (
    <div className="w-screen h-[10vh] flex items-center justify-between px-4 bg-neutral-800 text-gray-100">
      <img />

      <ul className="flex items-center gap-4">
        <li className="cursor-pointer">Home</li>
        {showBtn ? (
          <div className="flex items-center gap-4">
            <button
              className="py-2 px-8 bg-orange-400 text-white rounded-lg"
              onClick={logout}
            >
              Logout
            </button>
            <button
              className="py-2 px-8 bg-orange-400 text-white rounded-lg"
              onClick={() => router.push("/admin/add-visa")}
            >
              Add Visa
            </button>
          </div>
        ) : (
          <button
            className="py-2 px-8 bg-orange-400 text-white rounded-lg"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        )}
      </ul>
    </div>
  );
}

export default Nav;
