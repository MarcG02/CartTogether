import Link from "next/link";
import ListCard from "@/components/dashboard/ListCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listas Activas - Cart Together",
  description: "Todas tus listas de compra activas",
};

/* ─── Sample data ─── */
const USER_LISTS = [
  {
    id: "compra-semanal",
    title: "Compra Semanal",
    accentColor: "bg-primary",
    progressColor: "bg-primary",
    progressCurrent: 12,
    progressTotal: 20,
    lastEdited: "Last edited 2 hours ago",
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
    collaborators: [],
    overflowCount: 3,
    tags: [{ icon: "local_fire_department", label: "Charcoal" }],
  },
  {
    id: "farmacia",
    title: "Farmacia",
    accentColor: "bg-tertiary",
    progressColor: "bg-tertiary",
    progressCurrent: 3,
    progressTotal: 5,
    lastEdited: "Last edited 5 days ago",
    collaborators: [],
    tags: [{ icon: "medication", label: "Health" }],
  },
];

export default function ActiveListsPage() {
  return (
    <>
      {/* Page header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="font-headline-lg-mobile md:font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-background">
            Listas Activas
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            {USER_LISTS.length} lists &bull; Organize your shopping
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
            search
          </span>
          <input
            type="text"
            placeholder="Search lists..."
            className="w-full h-11 pl-10 pr-4 rounded-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all font-body-md text-body-md text-on-surface placeholder:text-outline outline-none"
          />
        </div>
      </div>

      {/* Lists grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        {USER_LISTS.map((list) => (
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

        {/* Add new list */}
        <button className="cursor-pointer bg-transparent border-2 border-dashed border-outline-variant rounded-xl p-md flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-lowest hover:border-primary hover:text-primary transition-all group min-h-[200px]">
          <div className="w-12 h-12 rounded-full bg-surface-container-high group-hover:bg-primary-fixed flex items-center justify-center mb-sm transition-colors">
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
