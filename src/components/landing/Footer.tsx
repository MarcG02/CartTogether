export default function Footer() {
  return (
    <footer className="w-full px-margin-mobile md:px-margin-desktop py-lg bg-surface border-t border-surface-variant flex flex-col sm:flex-row justify-between items-center gap-md">
      <div className="flex items-center gap-sm">
        <span className="font-headline-md text-headline-md font-bold text-primary">
          Cart Together
        </span>
        <span className="font-body-md text-body-md text-on-surface-variant">
          &copy; 2026
        </span>
      </div>
      <div className="flex gap-md">
        <a
          href="#"
          className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
        >
          Privacidad
        </a>
        <a
          href="#"
          className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
        >
          Términos
        </a>
      </div>
    </footer>
  );
}
