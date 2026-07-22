import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full px-margin-mobile md:px-margin-desktop py-xl md:py-[120px] flex flex-col md:flex-row items-center gap-xl relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary-fixed rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-fixed rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />

      {/* Left Column: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-lg z-10">
        <div className="flex flex-col gap-sm">
          <h1 className="font-headline-xl text-headline-xl text-4xl font-bold text-primary md:leading-[1.1]">
            Organiza tu compra, <br />
            simplifica tu vida
          </h1>

          <p className="font-body-lg text-body-lg text-xl text-on-surface-variant max-w-md md:max-w-2xl xl:max-w-3xl">
            Transforma el caos del supermercado en una experiencia estructurada
            y agradable. Ahorra tiempo, reduce gastos innecesarios y planifica
            tus comidas con elegancia.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-sm w-full sm:w-auto">
          <Link
            href="/dashboard"
            className="font-label-md text-label-md cursor-pointer bg-primary text-on-primary py-4 px-md rounded-lg hover:bg-surface-tint transition-colors w-full sm:w-auto text-center shadow-[0px_4px_20px_rgba(45,106,79,0.15)] active:scale-95"
          >
            Empezar Gratis
          </Link>
        </div>

        {/* Social Proof */}
        <SocialProof />
      </div>

      {/* Right Column: Image */}
      <div className="w-full md:w-1/2 z-10">
        <HeroImage />
      </div>
    </section>
  );
}

/* ─── Social Proof ─── */
function SocialProof() {
  const users = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-7kNDrKPcNroAU6A7COUHXjjdJcB1W1zZ453nUAH2nIy3RDleUOpgB2N5nNfwZ2Ih-VI3VNDMHBLYxzflPJyqplYRaLiJagie-8_HjdgaRaqk63gM2nGS17EOu8de5dPcQ7_FcaYPSnwrsKLtzWqRZn0BuGHY1RdRoP8an0cBEdVpH3bqZugWdAZrq-Hs3JV56gfZ0JITdEsEVn4GHlC1l669vebyHKGFoK1cWCG6y0jftl9Gcoqf",
      alt: "Foto de usuaria satisfecha",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgjVulYoZw11W-MGNaNvWZWoCaCzUjGcrzBXucwHGtk1FaEEBaXEE6JV8MyoLZLYhlEz4_riRxF-HkbjwMjeJ-EuTMgC_EuFiRabg1JAQymdYM7sr1rQkH5T4LfrQHGYtUcO2LkAjU2-yT84Nh1xDR55b1-566-wIBH0vNolhJSSxEBqo--zMy9IekWAa_rode-zptDoiefPFMQc0Ra0-cX7zbvbDX4aWNXz-f2zFwBW46MzxMcAmc",
      alt: "Foto de usuario satisfecho",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0wbkF4S40CNc-WBKZ_2kh25Bkw4XOSfAO-tE45IJb3_FsQJYv4zxvRzn_vGG1fRb7vVYqsMLaD2-UqOSzDTojYaOJbKp8eBZzGUVnCMFUVRO3BbtWa8I_LHmi6kLFkv7rs5XTSkHJCkgG2FF-Wn6MFjXZp0MZ6kR7OFUwqmBvHpCmKaeAsiMqVY6pzyPJMkwL06llNqKRJaJMvq7N6p5hcsNv46liU4SGikU06MVY3BOAby3a_fch",
      alt: "Foto de usuario activo",
    },
  ];

  return (
    <div className="flex items-center gap-sm mt-sm">
      <div className="flex -space-x-3">
        {users.map((user, i) => (
          <img
            key={i}
            src={user.src}
            alt={user.alt}
            className="w-8 h-8 rounded-full border-2 border-surface object-cover"
          />
        ))}
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant">
        +10,000 familias organizadas
      </span>
    </div>
  );
}

/* ─── Hero Image with Floating Card ─── */
function HeroImage() {
  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden surface-level-2 border border-surface-variant group">
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMqbAlVvRGQGvafmK1I2YdxbRi-2T3rrifXe7b8DDHD_0n5PTtdgZSP4k_tlDdDRf0jz15FJaFP3mXp3ZLc9xmNNg8ohmobCbLuhwzVQGzlWnShWwtcMgmpPmfBAQn137QyXEFYqgNxsRnpnqUcJkOkrGSp3iTXmhg70TYUNjiFjhZZu1dDNt3og6iew6iAHob_C859kyU40PrYyNWllalbO8fWLyHXb6p-HmH0W8gvJSAqdV_w3nF"
        alt="Despensa perfectamente organizada con frascos y cestas. Estética minimalista y luminosa."
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
      />

      {/* Floating UI Card */}
      <div className="absolute bottom-md left-md right-md sm:right-auto sm:w-72 surface-level-3 p-md rounded-lg flex flex-col gap-sm animate-gentle-bounce">
        <div className="flex justify-between items-center">
          <span className="font-label-md text-label-md text-on-surface">
            Compra Semanal
          </span>
          <span className="material-symbols-outlined text-primary">
            more_horiz
          </span>
        </div>
        <div className="flex flex-col gap-xs">
          <div className="flex items-center gap-xs">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[16px]">
                check
              </span>
            </div>
            <span className="font-body-md text-body-md text-on-surface-variant line-through">
              Manzanas Fuji
            </span>
          </div>
          <div className="flex items-center gap-xs">
            <div className="w-6 h-6 rounded border border-outline-variant flex items-center justify-center" />
            <span className="font-body-md text-body-md text-on-surface">
              Leche de Avena
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
