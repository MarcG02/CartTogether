type Collaborator = {
  src: string;
  alt: string;
};

type Tag = {
  icon: string;
  label: string;
};

type ListCardProps = {
  title: string;
  /** Tailwind bg class for the left accent bar */
  accentColor: string;
  /** Tailwind bg class for the progress bar */
  progressColor: string;
  progressCurrent: number;
  progressTotal: number;
  lastEdited: string;
  collaborators: Collaborator[];
  /** Shows a "+N" overflow badge instead of more avatars */
  overflowCount?: number;
  tags: Tag[];
};

export default function ListCard({
  title,
  accentColor,
  progressColor,
  progressCurrent,
  progressTotal,
  lastEdited,
  collaborators,
  overflowCount,
  tags,
}: ListCardProps) {
  const percentage =
    progressTotal > 0 ? Math.round((progressCurrent / progressTotal) * 100) : 0;

  return (
    <div className="bg-surface-container-lowest rounded-xl p-md surface-level-2 hover:-translate-y-1 transition-transform cursor-pointer relative overflow-hidden group">
      {/* Color accent bar */}
      <div className={`absolute top-0 left-0 w-1 h-full ${accentColor}`} />

      <div className="flex justify-between items-start mb-sm">
        <h3 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex -space-x-2">
          {collaborators.map((collab, i) => (
            <img
              key={i}
              src={collab.src}
              alt={collab.alt}
              className="w-8 h-8 rounded-full border-2 border-surface-container-lowest object-cover"
            />
          ))}
          {overflowCount != null && (
            <div className="w-8 h-8 rounded-full border-2 border-surface-container-lowest bg-surface-container-high flex items-center justify-center font-label-sm text-label-sm text-on-surface-variant">
              +{overflowCount}
            </div>
          )}
        </div>
      </div>

      <p className="font-label-sm text-label-sm text-outline mb-md flex items-center gap-xs">
        <span className="material-symbols-outlined text-[16px]">
          edit_calendar
        </span>
        {lastEdited}
      </p>

      <div>
        <div className="flex justify-between font-label-sm text-label-sm mb-xs">
          <span className="text-on-surface-variant">Progress</span>
          <span className="text-primary font-semibold">
            {progressCurrent}/{progressTotal} Items
          </span>
        </div>
        <div className="w-full bg-surface-variant rounded-full h-2 overflow-hidden">
          <div
            className={`${progressColor} h-2 rounded-full`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {tags.length > 0 && (
        <div className="mt-md flex gap-xs flex-wrap">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-xs px-sm py-1 bg-tertiary-fixed rounded-full font-label-sm text-label-sm text-on-tertiary-fixed-variant"
            >
              <span className="material-symbols-outlined text-[14px]">
                {tag.icon}
              </span>
              {tag.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
