import Image from "next/image";
import LogoImg from "../../public/logo-text.png";

export default function TopAppBar() {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 shadow-sm bg-surface dark:bg-surface-dim">
      <div className="flex items-center gap-sm">
        <Image src={LogoImg} alt="Cart Together Logo" className="w-32 h-auto" />
      </div>
      <div className="flex items-center gap-md">
        <nav className="hidden md:flex gap-md">
          <a
            href="#features"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
          >
            Características
          </a>
          <a
            href="#how-it-works"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
          >
            Cómo Funciona
          </a>
        </nav>
        <div className="flex items-center gap-xs">
          <button
            aria-label="Notificaciones"
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden shadow-[0px_4px_20px_rgba(45,106,79,0.05)] cursor-pointer">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAktJ4c78ehnsJGiYY9PwJE1m6tokjgaRe-JwJNx-INmzpohNNsCPIgzIUqSWjf9zXu7bt0FcypLAq7x6Sj3AEpR04zKE0rP5hc3Qyfo-HGc5JhZyiBBP-Zu1Ii7jVGGT1H5pCY_qD1swmCGN-uEhXatsahNCVEl5kGySzbiPQKZ4sgpETn1CJKOVfOFmQkdKJnMbOVWIci1Ci6QkdQrHT17F79AhKQnGScxLprwrjTTFCCV3mwDki"
              alt="Foto de perfil de usuario"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
