import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, MapPin, Instagram, Phone, Menu as MenuIcon, X } from 'lucide-react';

const SaugaudinApp: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Cardápio', href: '#menu' },
    { name: 'Contato', href: '#contact' },
  ];

  const products = [
    {
      id: 1,
      name: 'Coxinhas Irresistíveis',
      description: 'O clássico brasileiro, sequinho e crocante.',
      image: 'https://drive.google.com/thumbnail?id=1zw00ot0MlR_GVchDnGfgJvQGu955frWD&sz=w1000',
      price: 'R$ 12,00',
    },
    {
      id: 2,
      name: 'Norguet Especial',
      description: 'O clássico Norguet com um molhinho especial da casa.',
      image: 'https://drive.google.com/thumbnail?id=1C7pJspi-6YCGujhD51164tUg2XsoOkCE&sz=w1000',
      price: 'R$ 15,00',
    },
    {
      id: 3,
      name: 'Cachorrinho de festa',
      description: 'Delicioso a ponto de festejar todo dia.',
      image: 'https://drive.google.com/thumbnail?id=1HtR1UflNHppDHlthV6vKVQwYYF3UBoNC&sz=w1000',
      price: 'R$ 18,00',
    },
    {
      id: 4,
      name: 'Dadinho de Tapioca',
      description: 'Este realmente se chama dadinho',
      image: 'https://drive.google.com/thumbnail?id=18KkPvluV49hsyOsj_EpL_aHcNVu-k338&sz=w1000',
      price: 'R$ 10,00',
    },
  ];

  return (
    <div className="min-h-screen selection:bg-retro-orange selection:text-white overflow-x-hidden relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-base/80 backdrop-blur-md border-b-2 border-retro-brown/10">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://drive.google.com/thumbnail?id=1OamKOs9OoDEkte9pUF381PySosglFLYn&sz=w400" alt="Saugaudin" className="h-12 w-auto" referrerPolicy="no-referrer" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-woobly text-lg hover:text-retro-orange transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://www.instagram.com/saugaudin/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-retro-brown hover:text-retro-orange transition-colors"
            >
              <Instagram size={24} />
            </a>
            <button className="bg-retro-green text-white px-6 py-2 rounded-full font-woobly text-lg hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer">
              <ShoppingCart size={20} />
              Pedir Agora
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-retro-brown cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <MenuIcon size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-base border-b-2 border-retro-brown/10 p-4 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-woobly text-xl py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://www.instagram.com/saugaudin/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-woobly text-xl py-2 text-retro-brown"
            >
              <Instagram size={24} />
              Instagram
            </a>
            <button className="bg-retro-green text-white px-6 py-3 rounded-full font-woobly text-xl flex items-center justify-center gap-2 cursor-pointer">
              <ShoppingCart size={24} />
              Pedir Agora
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 overflow-hidden bg-retro-green">
        {/* Paper Texture Overlay for Hero Section Only */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-30 mix-blend-multiply"
          style={{ 
            backgroundImage: 'url("https://drive.google.com/thumbnail?id=1Cme8UIw9NtvuLiiB7VWb8KmGtN4RmWW5&sz=w1920")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Decorative Corner Elements */}
        <img 
          src="https://drive.google.com/thumbnail?id=1qRaZQjrSlqHY3OMbp9I_jAizowQ-pxzn&sz=w600"
          className="absolute -top-16 -left-16 sm:-top-24 sm:-left-24 w-40 sm:w-80 h-auto -rotate-12 pointer-events-none z-10"
          referrerPolicy="no-referrer"
        />
        <img 
          src="https://drive.google.com/thumbnail?id=1qRaZQjrSlqHY3OMbp9I_jAizowQ-pxzn&sz=w600"
          className="absolute -bottom-16 -right-16 sm:-bottom-24 sm:-right-24 w-40 sm:w-80 h-auto rotate-12 pointer-events-none z-10"
          referrerPolicy="no-referrer"
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              animate={{ y: [0, -5, 0], rotate: [-2, -1, -2] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="inline-block bg-retro-orange text-white px-4 py-1 rounded-full font-woobly text-sm mb-6"
            >
              NOVIDADE NA ÁREA!
            </motion.div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl leading-[0.9] text-base mb-8 font-woobly">
              O SABOR QUE <span className="text-retro-orange italic">TRANSCENDE</span> A EXISTÊNCIA.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-base/80 mb-10 max-w-lg">
              Fritinhos, crocantes e com aquele tempero que só a gente sabe fazer.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#menu"
                className="bg-retro-orange text-white px-8 py-4 rounded-2xl font-woobly text-2xl hover:bg-retro-brown transition-colors shadow-lg cursor-pointer inline-block text-center"
              >
                VER CARDÁPIO
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 md:mt-0"
          >
            <img src="https://drive.google.com/thumbnail?id=1sAlUX4X8yU5gqlpfo_PAZhsWhNBAB0Bd&sz=w1000" alt="Saugaudin Experience" className="w-full h-auto relative z-10 max-w-[400px] md:max-w-none mx-auto" referrerPolicy="no-referrer" />
            
            {/* Decorative Stickers */}
            <motion.img 
              animate={{ rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              src="https://drive.google.com/thumbnail?id=1ARaqkBD-Cr6QHTL4CoJbKJqTzWn3j5iW&sz=w400" 
              className="absolute top-0 right-0 md:top-4 md:right-4 w-24 sm:w-32 h-auto z-20 drop-shadow-lg" 
              referrerPolicy="no-referrer"
            />
            <motion.img 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              src="https://drive.google.com/thumbnail?id=16GWbaL1dDiulZGpAMYzJx9MtH4RCn-dP&sz=w400" 
              className="absolute bottom-0 left-0 md:bottom-4 md:left-4 w-20 sm:w-24 h-auto z-20 drop-shadow-lg" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] md:w-[120%] md:h-[120%] bg-retro-green/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="bg-checkered h-8 border-y-4 border-retro-brown" />
      <div className="bg-retro-green py-6 overflow-hidden border-b-4 border-retro-brown">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-white font-woobly text-3xl mx-8 flex items-center gap-4">
              FRITINHOS & IRRESISTÍVEIS <img src="https://drive.google.com/thumbnail?id=1qRaZQjrSlqHY3OMbp9I_jAizowQ-pxzn&sz=w200" className="h-10 w-auto" referrerPolicy="no-referrer" />
            </span>
          ))}
        </div>
      </div>

      {/* Menu Highlights */}
      <section id="menu" className="py-24 px-4 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-6xl md:text-7xl mb-4 font-woobly">O QUE TEM DE BOM?</h2>
            <p className="text-lg sm:text-xl text-retro-brown/70">Escolha o seu favorito e seja feliz.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-base p-6 rounded-[32px] border-4 border-retro-brown hover:translate-y-[-8px] transition-transform group"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 border-2 border-retro-brown/10 bg-white">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl mb-2 font-woobly">{product.name}</h3>
                <p className="text-retro-brown/60 mb-4 h-12 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-retro-orange">{product.price}</span>
                  <button className="bg-retro-brown text-white p-3 rounded-xl hover:bg-retro-green transition-colors cursor-pointer">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Retro TV Section */}
      <section className="py-16 sm:py-24 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto bg-retro-orange rounded-[40px] sm:rounded-[60px] p-8 sm:p-16 md:p-24 border-8 border-retro-brown relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-checkered" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl text-white mb-8 leading-tight font-woobly">
                O MAIOR INIMIGO DA SUA FOME!
              </h2>
              <p className="text-white/90 text-lg sm:text-xl mb-10">
                Não importa a hora, o Saugaudin tá aqui pra te salvar. 
                Peça pelo delivery ou venha nos visitar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-4 bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                  <Phone className="text-white" />
                  <div>
                    <p className="text-white/60 text-sm">Delivery</p>
                    <p className="text-white font-bold">(51) 12345-6789</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                  <MapPin className="text-white" />
                  <div>
                    <p className="text-white/60 text-sm">Onde estamos</p>
                    <p className="text-white font-bold">R. dos bobos, 0</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center mt-12 md:mt-0">
              <img src="https://drive.google.com/thumbnail?id=14nDYqRhjEiIRjKKB1rqS5ZG2RfFlKYqy&sz=w1000" className="w-full h-auto drop-shadow-2xl relative z-10 scale-110 md:scale-125" referrerPolicy="no-referrer" />
              <motion.img 
                animate={{ 
                  y: [0, -10, 0, 10, 0],
                  rotate: [0, 3, 0, -3, 0],
                  scale: [1.1, 1.2, 1.1, 1.2, 1.1]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ transformOrigin: "center center" }}
                src="https://drive.google.com/thumbnail?id=1vqcfzyqlbXjefNe1GME0Zh348-I0RyXA&sz=w600" 
                className="w-1/2 sm:w-1/3 h-auto drop-shadow-xl absolute top-0 right-0 md:top-4 md:right-4 z-20" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-checkered h-8 border-y-4 border-retro-brown" />
      <footer className="bg-retro-brown text-base py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <img src="https://drive.google.com/thumbnail?id=1OamKOs9OoDEkte9pUF381PySosglFLYn&sz=w600" alt="Saugaudin" className="h-12 sm:h-16 w-auto mb-8 grayscale invert" referrerPolicy="no-referrer" />
            <p className="text-base/60 text-lg sm:text-xl max-w-md mb-8">
              Levando o sabor autêntico e a alegria da lanchonete brasileira para o mundo. <br />
              Fritinhos com amor desde sempre.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/saugaudin/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-retro-orange transition-colors"
              >
                <Instagram />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-retro-orange transition-colors">
                <Phone />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-2xl mb-6 font-woobly">Links Rápidos</h4>
            <ul className="flex flex-col gap-4 text-base/60 text-lg">
              <li><a href="#" className="hover:text-white transition-colors">Cardápio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Franquias</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl mb-6 font-woobly">Newsletter</h4>
            <p className="text-base/60 mb-4">Receba promos e novidades quentinhas.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-white/10 border-2 border-white/20 rounded-xl px-4 py-2 flex-1 focus:outline-none focus:border-retro-orange transition-colors"
              />
              <button className="bg-retro-orange text-white px-4 py-2 rounded-xl font-woobly cursor-pointer">OK</button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-base/40">
          <p>© 2026 Saugaudin. Todos os direitos reservados. Feito com muito esmero.</p>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
};

export default SaugaudinApp;
