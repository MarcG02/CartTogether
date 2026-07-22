import { ReactNode } from "react";

export type ExampleProduct = {
  name: string;
  unit?: string;
  notes?: string;
}

export type ExampleCategory = {
  name: string;
  icon: string | ReactNode;
  products: ExampleProduct[];
}

/**
 * Productos de ejemplo organizados por categoría.
 * Útiles para precargar sugerencias, autocompletado,
 * o para poblar una lista nueva con items de ejemplo.
 */
export const EXAMPLE_PRODUCTS_BY_CATEGORY: ExampleCategory[] = [
  {
    name: "Frutas y Verduras",
    icon: "nutrition",
    products: [
      { name: "Manzana", unit: "kg" },
      { name: "Banana", unit: "kg" },
      { name: "Naranja", unit: "kg" },
      { name: "Pera", unit: "kg" },
      { name: "Lechuga", unit: "unidad" },
      { name: "Tomate", unit: "kg" },
      { name: "Cebolla", unit: "kg" },
      { name: "Papa", unit: "kg" },
      { name: "Zanahoria", unit: "kg" },
      { name: "Espinaca", unit: "bolsa" },
      { name: "Palta", unit: "unidad" },
      { name: "Limón", unit: "kg" },
      { name: "Ajo", unit: "cabeza" },
      { name: "Morrón", unit: "unidad" },
      { name: "Batata", unit: "kg" },
      { name: "Frutilla", unit: "caja" },
      { name: "Arándanos", unit: "caja" },
      { name: "Uva", unit: "kg" },
    ],
  },
  {
    name: "Lácteos y Huevos",
    icon: "egg",
    products: [
      { name: "Leche", unit: "litro" },
      { name: "Leche desnatada", unit: "litro" },
      { name: "Huevos", unit: "docena" },
      { name: "Yogur natural", unit: "pote" },
      { name: "Queso crema", unit: "pote" },
      { name: "Queso rallado", unit: "bolsa" },
      { name: "Mantequilla", unit: "pote" },
      { name: "Yogur de frutilla", unit: "pote" },
      { name: "Queso fresco", unit: "unidad" },
      { name: "Ricota", unit: "pote" },
      { name: "Dulce de leche", unit: "pote" },
    ],
  },
  {
    name: "Carnes y Pescados",
    icon: "set_meal",
    products: [
      { name: "Carne picada", unit: "kg" },
      { name: "Pechuga de pollo", unit: "kg" },
      { name: "Milanesa de pollo", unit: "kg" },
      { name: "Milanesa de carne", unit: "kg" },
      { name: "Bife de chorizo", unit: "unidad" },
      { name: "Costeleta de cerdo", unit: "kg" },
      { name: "Carne para guiso", unit: "kg" },
      { name: "Salchichas", unit: "paquete" },
      { name: "Pescado de mar", unit: "kg" },
      { name: "Atún en lata", unit: "lata" },
      { name: "Jamón cocido", unit: "kg" },
      { name: "Salchichón", unit: "unidad" },
    ],
  },
  {
    name: "Bebidas",
    icon: "local_cafe",
    products: [
      { name: "Agua mineral", unit: "botella" },
      { name: "Agua con gas", unit: "botella" },
      { name: "Coca-Cola", unit: "lata" },
      { name: "Sprite", unit: "lata" },
      { name: "Jugo de naranja", unit: "litro" },
      { name: "Cerveza", unit: "lata" },
      { name: "Vino tinto", unit: "botella" },
      { name: "Vino blanco", unit: "botella" },
      { name: "Agua saborizada", unit: "litro" },
      { name: "Té en hebras", unit: "caja" },
      { name: "Café molido", unit: "paquete" },
      { name: "Gaseosa de naranja", unit: "lata" },
      { name: "Gaseosa de limón", unit: "lata" },
    ],
  },
  {
    name: "Panadería y Pastas",
    icon: "bakery_dining",
    products: [
      { name: "Pan francés", unit: "unidad" },
      { name: "Pan de molde", unit: "paquete" },
      { name: "Fideos secos", unit: "paquete" },
      { name: "Arroz", unit: "kg" },
      { name: "Harina", unit: "kg" },
      { name: "Pan rallado", unit: "paquete" },
      { name: "Galletitas dulces", unit: "paquete" },
      { name: "Galletitas saladas", unit: "paquete" },
      { name: "Fideos de arroz", unit: "paquete" },
      { name: "Polenta", unit: "paquete" },
      { name: "Copos de maíz", unit: "caja" },
      { name: "Avena", unit: "paquete" },
    ],
  },
  {
    name: "Almacén",
    icon: "shelves",
    products: [
      { name: "Aceite de oliva", unit: "botella" },
      { name: "Aceite de girasol", unit: "botella" },
      { name: "Sal", unit: "paquete" },
      { name: "Pimienta", unit: "frasco" },
      { name: "Azúcar", unit: "kg" },
      { name: "Vinagre", unit: "botella" },
      { name: "Salsa de tomate", unit: "botella" },
      { name: "Mayonesa", unit: "pote" },
      { name: "Mostaza", unit: "pote" },
      { name: "Ketchup", unit: "pote" },
      { name: "Lentejas", unit: "paquete" },
      { name: "Porotos negros", unit: "paquete" },
      { name: "Garbanzos", unit: "paquete" },
      { name: "Arvejas en lata", unit: "lata" },
      { name: "Tomate en lata", unit: "lata" },
      { name: "Puré de tomate", unit: "botella" },
      { name: "Caldo de verduras", unit: "cubo" },
      { name: "Caldo de pollo", unit: "cubo" },
    ],
  },
  {
    name: "Limpieza",
    icon: "cleaning_services",
    products: [
      { name: "Lavandina", unit: "litro" },
      { name: "Detergente", unit: "botella" },
      { name: "Jabón en polvo", unit: "paquete" },
      { name: "Limpiavidrios", unit: "botella" },
      { name: "Desinfectante", unit: "litro" },
      { name: "Esponja", unit: "unidad" },
      { name: "Trapo de piso", unit: "unidad" },
      { name: "Bolsa de basura", unit: "paquete" },
      { name: "Lavandita", unit: "litro" },
      { name: "Limpiador multiuso", unit: "botella" },
      { name: "Jabón líquido para manos", unit: "botella" },
      { name: "Papel higiénico", unit: "paquete" },
      { name: "Servilletas", unit: "paquete" },
    ],
  },
  {
    name: "Cuidado Personal",
    icon: "personal_injury",
    products: [
      { name: "Shampoo", unit: "botella" },
      { name: "Acondicionador", unit: "botella" },
      { name: "Jabón de tocador", unit: "unidad" },
      { name: "Desodorante", unit: "unidad" },
      { name: "Pasta dental", unit: "tubo" },
      { name: "Cepillo de dientes", unit: "unidad" },
      { name: "Hilo dental", unit: "unidad" },
      { name: "Protector solar", unit: "botella" },
      { name: "After shave", unit: "botella" },
      { name: "Toallitas femeninas", unit: "paquete" },
      { name: "Algodón", unit: "paquete" },
      { name: "Cortauñas", unit: "unidad" },
    ],
  },
  {
    name: "Congelados",
    icon: "ac_unit",
    products: [
      { name: "Papas fritas congeladas", unit: "bolsa" },
      { name: "Hamburguesas congeladas", unit: "paquete" },
      { name: "Pizza congelada", unit: "unidad" },
      { name: "Arvejas congeladas", unit: "bolsa" },
      { name: "Espinaca congelada", unit: "bolsa" },
      { name: "Helado", unit: "pote" },
      { name: "Pescado congelado", unit: "paquete" },
      { name: "Papas noisette", unit: "bolsa" },
      { name: "Medallones de verdura", unit: "paquete" },
    ],
  },
  {
    name: "Mascotas",
    icon: "pets",
    products: [
      { name: "Alimento para perro", unit: "kg" },
      { name: "Alimento para gato", unit: "kg" },
      { name: "Snacks para perro", unit: "paquete" },
      { name: "Arena para gato", unit: "bolsa" },
      { name: "Shampoo para perro", unit: "botella" },
      { name: "Cama para perro", unit: "unidad" },
      { name: "Juguete para perro", unit: "unidad" },
      { name: "Comedero", unit: "unidad" },
      { name: "Bebedero", unit: "unidad" },
    ],
  },
  {
    name: "Otros",
    icon: "category",
    products: [
      { name: "Pilas", unit: "paquete" },
      { name: "Fósforos", unit: "caja" },
      { name: "Velas", unit: "paquete" },
      { name: "Servilletas de tela", unit: "unidad" },
      { name: "Mantel", unit: "unidad" },
      { name: "Foco de luz", unit: "unidad" },
      { name: "Cinta adhesiva", unit: "unidad" },
      { name: "Tijera", unit: "unidad" },
      { name: "Cuaderno", unit: "unidad" },
      { name: "Lapicera", unit: "unidad" },
    ],
  },
];

/**
 * Versión plana de todos los productos (sin agrupar por categoría).
 * Útil para búsqueda global o autocompletado.
 */
export const ALL_EXAMPLE_PRODUCTS = EXAMPLE_PRODUCTS_BY_CATEGORY.flatMap(
  (category) => category.products,
);

/**
 * Busca productos cuyo nombre contenga el texto ingresado.
 * Devuelve hasta `limit` resultados.
 */
export function searchExampleProducts(query: string, limit = 10) {
  const q = query.toLowerCase();
  const results = ALL_EXAMPLE_PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(q),
  );
  return results.slice(0, limit);
}
