import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ListCard from "./ListCard";

export default function ActiveLists() {
  return (
    <>
      <div className="flex justify-between items-end mb-md">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
          Listas Activas
        </h2>
        <Link
          href="/active-list"
          className="text-primary cursor-pointer hover:text-surface-tint font-label-md text-label-md flex items-center gap-xs"
        >
          Ver todas
          <span className="material-symbols-outlined text-sm">
            <ArrowRight />
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        {/* ── List Card 1 ── */}
        <ListCard
          title="Compra Semanal"
          accentColor="bg-primary"
          progressColor="bg-primary"
          progressCurrent={12}
          progressTotal={20}
          lastEdited="Last edited 2 hours ago"
          collaborators={[
            {
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOY6GyHWNRcqhtBGfLSvzd1CLfxvHs8Z-LamJhjHTcDYob1Vsr22t2FversdAPvkP79jsHL9-PL3ibLIDbk_9o8Xy6zWNsV1ETaRMhVaShLdkU-KHR5xBHz1WRSNYKVrRdeuBLYtKZNxNWkHWbnQ4QvQJRAsdEX2JvDGEyT8SoP3bdQ8WjHU8p8EqNAUXkDOx7mkMBlszQxxe1JJ9YKQ11wK2N19abfjkMGPZW6rjOl-Ar76itjllJ",
              alt: "Colaborador 1",
            },
            {
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHcleNMDhde4kt_5kmMAm5XXdOAIMxzwzRwzPJUk5k1bNpVYcS4u-HJLsqRqIFu3qJv-wj8c93GbskIBXMkg8kw6j588JlrIo5xdLJhbligLnyKMZ4DrKiOI64BYS_s3pW4xJjDvlRlVaw1KDJ_s7ebXmB-kplGl5t7JZawSI9_jrOuGMmDLo2gByIC2blTs6gTKqV2WQh6pcxizPhc0xudjhuBbFqDcyUf7PBTKXf5pSNmrhkhaUW",
              alt: "Colaborador 2",
            },
          ]}
          tags={[
            { icon: "nutrition", label: "Produce" },
            { icon: "egg", label: "Dairy" },
          ]}
        />

        {/* ── List Card 2 ── */}
        <ListCard
          title="Cena Viernes"
          accentColor="bg-secondary"
          progressColor="bg-secondary"
          progressCurrent={5}
          progressTotal={8}
          lastEdited="Last edited yesterday"
          collaborators={[
            {
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdPInk8Ixk2wVyBLVQ-noxA7N3fO44NRscA3LKiuW4IIlPGACdOuOBkrzMwNNxr1Z1iWGclwzWsADXlc_5HPU8ZQNUMudnbO4B2fA46Dy5mx_4ytk_yK-AM_ASZs_-D5wIuVdEXBcPELMZXW2Irguv8gg7vjrVw5fdTJGGYvs8Oogt1B9l-tLSeQCvKtHj19gFujsuzAgoZVfEFZj7t551nA8qDeydAdoL9qcSgpeV7fsGmxO-RHEU",
              alt: "Colaborador 1",
            },
          ]}
          tags={[
            { icon: "liquor", label: "Beverages" },
            { icon: "restaurant", label: "Meat" },
          ]}
        />

        {/* ── List Card 3 ── */}
        <ListCard
          title="Barbacoa"
          accentColor="bg-tertiary-container"
          progressColor="bg-tertiary-container"
          progressCurrent={0}
          progressTotal={15}
          lastEdited="Last edited 3 days ago"
          collaborators={[]}
          overflowCount={3}
          tags={[{ icon: "local_fire_department", label: "Charcoal" }]}
        />

        {/* ── Add New List ── */}
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
