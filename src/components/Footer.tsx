import { FiInstagram, FiFacebook, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-xl">
          <span className="text-stone-900">Catering</span> <span className="text-gold">Luxe</span>
        </div>
        <div className="flex items-center gap-6 text-stone-700">
          <a href="#" aria-label="Instagram"><FiInstagram /></a>
          <a href="#" aria-label="Facebook"><FiFacebook /></a>
          <a href="mailto:hello@cateringluxe.com" className="flex items-center gap-2"><FiMail /> hello@cateringluxe.com</a>
        </div>
        <div className="text-stone-500 text-sm">© {new Date().getFullYear()} Catering Luxe. All rights reserved.</div>
      </div>
    </footer>
  );
}
