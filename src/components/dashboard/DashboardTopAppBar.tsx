import Image from "next/image";
import LogoImg from "../../../public/logo-text.png";
import Link from "next/link";

export default function DashboardTopAppBar() {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 shadow-sm bg-surface dark:bg-surface-dim">
      <div className="flex items-center gap-sm">
        <Link href="/" className="flex items-center gap-sm cursor-pointer">
          <Image
            src={LogoImg}
            alt="Cart Together Logo"
            className="w-32 h-auto"
            loading="eager"
          />
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-lg">
        <div className="relative w-64">
          <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">
            search
          </span>
          <input
            className="w-full h-10 pl-10 pr-sm rounded-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary focus:bg-surface transition-colors font-body-md text-body-md text-on-surface placeholder:text-outline outline-none"
            placeholder="Search lists..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-sm">
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-low dark:hover:bg-surface-container transition-colors active:scale-95">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-low dark:hover:bg-surface-container transition-colors active:scale-95">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <div className="w-10 h-10 rounded-full overflow-hidden border border-surface-variant ml-xs">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc_OZdsv4DcS5eQ2CgswjvyujSIkToNfOwi0lpzeWo6YdRM0gNB_Rz52-Z6z-MNgmITtOV5c3iZ3FW2eAhmg7_25-cgN2urHtsPFY0x7eMD9JxUS5qnjtUa3JB5p0-lJJLrZakEAOu9nIdVUt51hG5sfDIqWQxvMDVTKah-2JQ3HMjybAbCdF2_NJGY6uXeYc1E9DqFXhy_00dfnNKgl1HHssDD1zTba-LxeRFNVCh9heNrdBl7-KM"
            alt="Foto de perfil de usuario"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
