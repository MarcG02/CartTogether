interface FeatureCardProps {
  icon: string;
  iconBgColor: string;
  iconColor: string;
  title: string;
  description: string;
  /** Badge opcional, ej: "Colaboración" */
  badge?: string;
  /** Imagen opcional para cards que ocupan 2 columnas */
  image?: {
    src: string;
    alt: string;
  };
  /** Clases adicionales para el contenedor */
  className?: string;
  /** Fondo con gradiente */
  gradient?: boolean;
}

export default function FeatureCard({
  icon,
  iconBgColor,
  iconColor,
  title,
  description,
  badge,
  image,
  className = "",
  gradient = false,
}: FeatureCardProps) {
  return (
    <article
      className={`surface-level-2 rounded-xl p-md flex flex-col gap-md hover-lift border border-surface-variant ${gradient ? "bg-gradient-to-br from-surface to-secondary-fixed" : ""} ${className}`}
    >
      <div className="flex items-center justify-between">
        <div
          className={`w-12 h-12 rounded-full ${iconBgColor} flex items-center justify-center`}
        >
          <span className={`material-symbols-outlined ${iconColor}`}>
            {icon}
          </span>
        </div>
        {badge && (
          <span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>

      {gradient ? (
        <div className="flex-grow flex flex-col justify-center">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-xs w-full">
            {title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant w-full">
            {description}
          </p>
        </div>
      ) : (
        <div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">
            {title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {description}
          </p>
        </div>
      )}

      {image && (
        <div className="h-32 rounded-lg bg-surface-container-lowest overflow-hidden mt-4 relative">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      )}
    </article>
  );
}
