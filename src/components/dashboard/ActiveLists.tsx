import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ListCard from "./ListCard";

/* ─── Sample data ─── */
type ListData = {
  id: string;
  title: string;
  accentColor: string;
  progressColor: string;
  progressCurrent: number;
  progressTotal: number;
  lastEdited: string;
  lastEditedDate: Date;
  collaborators: { src: string; alt: string }[];
  overflowCount?: number;
  tags: { icon: string; label: string }[];
};

const ALL_LISTS: ListData[] = [
  {
    id: "compra-semanal",
    title: "Compra Semanal",
    accentColor: "bg-primary",
    progressColor: "bg-primary",
    progressCurrent: 12,
    progressTotal: 20,
    lastEdited: "Last edited 2 hours ago",
    lastEditedDate: new Date("2026-07-22T10:00:00"),
    collaborators: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOY6GyHWNRcqhtBGfLSvzd1CLfxvHs8Z-LamJhjHTcDYob1Vsr22t2FversdAPvkP79jsHL9-PL3ibLIDbk_9o8Xy6zWNsV1ETaRMhVaShLdkU-KHR5xBHz1WRSNYKVrRdeuBLYtKZNxNWkHWbnQ4QvQJRAsdEX2JvDGEyT8SoP3bdQ8WjHU8p8EqNAUXkDOx7mkMBlszQxxe1JJ9YKQ11wK2N19abfjkMGPZW6rjOl-Ar76itjllJ",
        alt: "Colaborador 1",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHcleNMDhde4kt_5kmMAm5XXdOAIMxzwzRwzPJUk5k1bNpVYcS4u-HJLsqRqIFu3qJv-wj8c93GbskIBXMkg8kw6j588JlrIo5xdLJhbligLnyKMZ4DrKiOI64BYS_s3pW4xJjDvlRlVaw1KDJ_s7ebXmB-kplGl5t7JZawSI9_jrOuGMmDLo2gByIC2blTs6gTKqV2WQh6pcxizPhc0xudjhuBbFqDcyUf7PBTKXf5pSNmrhkhaUW",
        alt: "Colaborador 2",
      },
    ],
    tags: [
      { icon: "nutrition", label: "Produce" },
      { icon: "egg", label: "Dairy" },
    ],
  },
  {
    id: "cena-viernes",
    title: "Cena Viernes",
    accentColor: "bg-secondary",
    progressColor: "bg-secondary",
    progressCurrent: 5,
    progressTotal: 8,
    lastEdited: "Last edited yesterday",
    lastEditedDate: new Date("2026-07-21T18:30:00"),
    collaborators: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdPInk8Ixk2wVyBLVQ-noxA7N3fO44NRscA3LKiuW4IIlPGACdOuOBkrzMwNNxr1Z1iWGclwzWsADXlc_5HPU8ZQNUMudnbO4B2fA46Dy5mx_4ytk_yK-AM_ASZs_-D5wIuVdEXBcPELMZXW2Irguv8gg7vjrVw5fdTJGGYvs8Oogt1B9l-tLSeQCvKtHj19gFujsuzAgoZVfEFZj7t551nA8qDeydAdoL9qcSgpeV7fsGmxO-RHEU",
        alt: "Colaborador 1",
      },
    ],
    tags: [
      { icon: "liquor", label: "Beverages" },
      { icon: "restaurant", label: "Meat" },
    ],
  },
  {
    id: "barbacoa",
    title: "Barbacoa",
    accentColor: "bg-tertiary-container",
    progressColor: "bg-tertiary-container",
    progressCurrent: 0,
    progressTotal: 15,
    lastEdited: "Last edited 3 days ago",
    lastEditedDate: new Date("2026-07-19T14:00:00"),
    collaborators: [],
    overflowCount: 3,
    tags: [{ icon: "local_fire_department", label: "Charcoal" }],
  },
];

const RECENT_LIMIT = 3;

export default function ActiveLists() {
  const recentLists = [...ALL_LISTS]
    .sort((a, b) => b.lastEditedDate.getTime() - a.lastEditedDate.getTime())
    .slice(0, RECENT_LIMIT);

  return (
    <>
      <div className="mb-md flex items-end justify-between">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
          Listas Activas
        </h2>
        <Link
          href="/active-list"
          className="text-primary hover:text-surface-tint font-label-md text-label-md gap-xs flex cursor-pointer items-center"
        >
          Ver todas
          <span className="material-symbols-outlined text-sm">
            <ArrowRight />
          </span>
        </Link>
      </div>

      <div className="gap-md grid grid-cols-1 md:grid-cols-2">
        {recentLists.map((list) => (
          <Link
            key={list.id}
            href={`/active-list/${list.id}`}
            className="block"
          >
            <ListCard
              title={list.title}
              accentColor={list.accentColor}
              progressColor={list.progressColor}
              progressCurrent={list.progressCurrent}
              progressTotal={list.progressTotal}
              lastEdited={list.lastEdited}
              collaborators={list.collaborators}
              overflowCount={list.overflowCount}
              tags={list.tags}
            />
          </Link>
        ))}

        {/* ── Add New List ── */}
        <button className="border-outline-variant p-md text-on-surface-variant hover:bg-surface-container-lowest hover:border-primary hover:text-primary group flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed bg-transparent transition-all">
          <div className="bg-surface-container-high group-hover:bg-primary-fixed mb-sm flex h-12 w-12 items-center justify-center rounded-full transition-colors">
            <span className="material-symbols-outlined text-[24px]">add</span>
          </div>
          <span className="font-label-md text-label-md font-semibold">
            Crear lista
          </span>
        </button>
      </div>
    </>
  );
}
