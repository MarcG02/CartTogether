import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section
      id="features"
      className="w-full px-margin-mobile md:px-margin-desktop py-xl bg-surface-container-low"
    >
      <div className="flex flex-col items-center mb-lg text-center">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">
          Diseñado para la eficiencia
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Todo lo que necesitas para que tu próxima visita al supermercado sea
          rápida, económica y sin estrés.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-md max-w-[1280px] mx-auto">
        {/* Feature 1: Listas Compartidas (2 cols) */}
        <FeatureCard
          icon="group"
          iconBgColor="bg-secondary-container"
          iconColor="text-on-secondary-container"
          title="Listas Compartidas en Tiempo Real"
          description="Sincroniza la lista de la compra con toda tu familia. Si alguien añade leche, todos lo ven al instante. Adiós a las compras duplicadas."
          badge="Colaboración"
          className="md:col-span-2"
          image={{
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFh_qF6-mGdlahNxq2mI400svqxuZj-YV9w4IGAlS3lc44cpUTzu6ZgjQVrHRAwyODd3gqyS4YRRz_reeoc4gph44TrDGaN9-YauMwjWjZVGJVPJiUxSHNXdfDjziFv7fcYnVTrRl7V-tYDPoxOgbDzRTDGmdsJWP-_yCaS-aDt_VssP3bIpAKKjtbzZJvQbL0xBZmKdc1rKMrpZQ86EI6cfBGA-Jvzjoobs1NEENzepc6bhQSlVoM",
            alt: "Dos smartphones mostrando la misma interfaz de lista de compras sincronizada",
          }}
        />

        {/* Feature 2: Conversor de Recetas */}
        <FeatureCard
          icon="restaurant_menu"
          iconBgColor="bg-primary-container"
          iconColor="text-on-primary-container"
          title="Conversor de Recetas"
          description="Pega el enlace de cualquier receta y Listo extraerá automáticamente los ingredientes a tu lista."
        />

        {/* Feature 3: Categorización Inteligente */}
        <FeatureCard
          icon="category"
          iconBgColor="bg-tertiary-container"
          iconColor="text-on-tertiary-container"
          title="Categorización Inteligente"
          description="Los artículos se agrupan automáticamente por pasillo (Frutas, Lácteos) para que no des vueltas por el supermercado."
        />

        {/* Feature 4: Control de Presupuesto (2 cols, gradient) */}
        <FeatureCard
          icon="savings"
          iconBgColor="bg-inverse-surface"
          iconColor="text-inverse-on-surface"
          title="Control de Presupuesto"
          description="Establece límites semanales y visualiza tus gastos proyectados antes de llegar a la caja. Mantén tus finanzas del hogar bajo control."
          className="md:col-span-2"
          gradient
        />
      </div>
    </section>
  );
}
