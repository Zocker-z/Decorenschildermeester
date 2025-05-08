import Image from "next/image"
import { Brush, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Painting background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">DECOR EN SCHILDER MEESTER</h1>
          <div className="flex justify-center gap-4">
            <Link
              href="#contact"
              className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
            >
              Contact Ons
            </Link>
            <Link
              href="#over-mij"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-all"
            >
              Meer Informatie
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="over-mij" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">OVER MIJ</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed mb-6">
            Als een team dat gespecialiseerd is in decoratieve binnenverf, pleisterwerk en industriële verf, voegen we
            esthetiek en duurzaamheid toe aan uw woon- en werkruimtes. Met hoogwaardige materialen en professioneel
            vakmanschap streven we ernaar om in elk project de beste resultaten te leveren.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Voor uw interieurs bieden wij decoratieve verf- en pleistertoepassingen voor een moderne en stijlvolle
            uitstraling, terwijl wij met industriële verf duurzame en langdurige oplossingen leveren voor uw
            bedrijfspanden. Wij stellen klanttevredenheid voorop en zorgen ervoor dat uw projecten op tijd en volgens de
            hoogste normen worden afgerond.
          </p>
          <p className="text-lg leading-relaxed">
            Bent u op zoek naar een betrouwbare partner voor verf- en afwerkingswerkzaamheden? Neem dan contact met ons
            op. Wij staan klaar om uw ruimtes te vernieuwen en te beschermen!
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">ONZE DIENSTEN</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Decoratieve binnenverf"
                  width={300}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Decoratieve Binnenverf</h3>
              <p className="text-gray-700">
                Wij bieden hoogwaardige decoratieve verfoplossingen voor uw interieur, met aandacht voor detail en
                afwerking.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Pleisterwerk"
                  width={300}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Pleisterwerk</h3>
              <p className="text-gray-700">
                Professioneel pleisterwerk voor een perfecte afwerking van uw muren en plafonds, met oog voor kwaliteit.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Industriële Verf"
                  width={300}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Industriële Verf</h3>
              <p className="text-gray-700">
                Duurzame industriële verfoplossingen voor bedrijfspanden, met focus op langdurige bescherming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">CONTACT ONS</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Neem Contact Op</h3>
            <p className="mb-6">
              Bent u geïnteresseerd in onze diensten of heeft u vragen? Neem gerust contact met ons op. Wij staan klaar
              om u te helpen!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <span>+31 123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <span>info@decorenschildermeester.nl</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <span>Amsterdam, Nederland</span>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                  Naam
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">
                  Bericht
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all"
              >
                Versturen
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">DECOR EN SCHILDER MEESTER</h3>
            <p className="text-gray-400">Professionele verf- en afwerkingsdiensten</p>
          </div>
          <div className="flex items-center">
            <Brush className="w-5 h-5 mr-2" />
            <span>© {new Date().getFullYear()} Alle rechten voorbehouden</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
