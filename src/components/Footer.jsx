import { Github, Linkedin, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-10 px-6 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Brand */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold tracking-widest">B I N S A M</h1>
        </div>

        {/* Follow Me */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <h2 className="text-md font-bold">
            Follow Me <span className="text-yellow-500">✦</span>
          </h2>
          <div className="flex gap-4 text-xl">
            <a href="https://www.instagram.com/ig._voltrez_/" target="_blank" rel="noreferrer">
              <Instagram className="hover:text-purple-500 transition-colors" />
            </a>
            <a href="https://wa.me/9188108851" target="_blank" rel="noreferrer">
              <FaWhatsapp className="hover:text-green-500 transition-colors" />
            </a>
            <a href="https://github.com/binsam008" target="_blank" rel="noreferrer">
              <Github className="hover:text-gray-400 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/binsam-mohammad-67ab8634a/" target="_blank" rel="noreferrer">
              <Linkedin className="hover:text-blue-500 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-200 dark:border-gray-800 transition-colors" />

      {/* Bottom Text */}
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        © 2025 <span className="font-semibold text-black dark:text-white">BINSAM</span>. All Rights Reserved.
      </p>
    </footer>
  );
}
