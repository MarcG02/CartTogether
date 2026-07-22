import ListPageHeader from "@/components/list/ListPageHeader";
import ListCategoryGroup, {
  type ListCategoryData,
} from "@/components/list/ListCategoryGroup";
import ListQuickAdd from "@/components/list/ListQuickAdd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "List Detail - Cart Together",
  description: "Detalle de tu lista de compra",
};

/* ─── Sample data ─── */
const SAMPLE_CATEGORIES: ListCategoryData[] = [
  {
    name: "Frutas & Verduras",
    icon: "eco",
    items: [
      {
        id: "item-1",
        title: "Manzanas Fuji",
        notes: "Buscar las más rojas",
        quantity: 6,
        checked: false,
      },
      {
        id: "item-2",
        title: "Plátanos",
        quantity: 1,
        unit: "1 racimo",
        checked: true,
      },
    ],
  },
  {
    name: "Lácteos",
    icon: "water_drop",
    items: [
      {
        id: "item-3",
        title: "Leche Entera",
        quantity: 2,
        checked: false,
        photoUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCcf7ZjeuepUS28tW9V4DZyEjDXsWJpqnr8Qln6e4JrvgohDoqLQjQRopaHStKEuTh8J7_-bLteVnMY7iiwK95X_Gin_g4FiVsRU-FnxD0Ghs3W3Qrz_mo3oA0mrTwqiW8inXOa_tGUOr_3SqAVqbHH9eQCpSagmNjgw5Qy3SFnav090lSVKoL6yagWGCvhgg49oM3xDjrrx6HtfNsav_96mBKjtXTD877nAnicuEnJsPR3C66jttzw",
      },
    ],
  },
  {
    name: "Bebidas",
    icon: "liquor",
    items: [
      {
        id: "item-4",
        title: "Agua Mineral",
        quantity: 6,
        unit: "botellas",
        checked: false,
      },
      {
        id: "item-5",
        title: "Jugo de Naranja",
        notes: "Sin azúcar agregada",
        quantity: 2,
        checked: false,
      },
    ],
  },
  {
    name: "Carnes",
    icon: "restaurant",
    items: [
      {
        id: "item-6",
        title: "Pechuga de Pollo",
        quantity: 1,
        unit: "kg",
        checked: false,
      },
      {
        id: "item-7",
        title: "Carne Picada",
        notes: "500g para hamburguesas",
        quantity: 500,
        unit: "g",
        checked: false,
      },
    ],
  },
];

export default function ListDetailPage() {
  const listTitle = "Compra Semanal";
  const remainingItems = 24;
  const estimatedCost = 120.0;

  return (
    <>
      <ListPageHeader
        title={listTitle}
        date="Oct 24, 2023"
        remainingItems={remainingItems}
        estimatedCost={estimatedCost}
      />

      <div className="space-y-6 max-w-4xl">
        {SAMPLE_CATEGORIES.map((category) => (
          <ListCategoryGroup key={category.name} category={category} />
        ))}
      </div>

      <ListQuickAdd listTitle={listTitle} />
    </>
  );
}
