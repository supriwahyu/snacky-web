import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Star, Heart } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');

  const products = [
    { name: 'PEANUT BUTTER POWER', subtitle: 'PROTEIN + CHOCOLATE FUEL', color: 'bg-amber-900', image: '/1.png' },
    { name: 'COCONUT CRUNCH FUEL', subtitle: 'ENERGY + COCONUT POWER', color: 'bg-green-700', image: '/2.png' },
    { name: 'THE WELLVO MIX PACK', subtitle: 'ALL FAVORITES BUNDLE', color: 'bg-green-600', image: '/3.png' },
    { name: 'THE WELLVO MIX PACK', subtitle: 'ALL FAVORITES BUNDLE', color: 'bg-green-600', image: '/4.png' },
    { name: 'THE WELLVO MIX PACK', subtitle: 'ALL FAVORITES BUNDLE', color: 'bg-green-600', image: '/5.png' }
  ];

  const images = [
    {image: '/6.png'},
    {image: '/7.png'},
    {image: '/8.png'},
  ]

  const badges = ['STUDIES', 'BE STRONG', 'BE TASTY', 'BE WELLVO', 'OMEGA FLOUR', 'JUSTE WELLVO'];

  return (
    <div className="App">
      <title>My Awesome Snacky</title>
      <div className="min-h-screen bg-yellow-100">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 to-red-800 text-white py-16 px-6 relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-start mb-8">
              <h1 className="text-4xl font-bold text-yellow-400">Snacky</h1>
              <div className="flex gap-3">
                <span className="bg-yellow-400 text-red-900 px-4 py-2 rounded-full text-sm font-bold">SHOP NOW</span>
                <span className="bg-white text-red-900 px-4 py-2 rounded-full text-sm font-bold">LOG IN</span>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h2 className="text-7xl md:text-8xl font-black text-yellow-400 mb-4">
                YU<span className="inline-block">😊</span>MMY
              </h2>
              <div className="flex justify-center items-center gap-4 mb-6">
                <div className="bg-red-700 p-3 rounded-lg transform rotate-3">
                  <div className="bg-yellow-400 w-16 h-20 rounded"></div>
                </div>
                <div className="bg-yellow-400 text-red-900 px-6 py-3 rounded-lg font-bold transform -rotate-2">
                  100% NATURAL
                </div>
              </div>
              <p className="text-white max-w-xl mx-auto text-lg">
                Fuel your body like you mean it. Packed with protein, fiber, and lip-smackingly good healthy products.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {badges.map((badge, i) => (
                <span key={i} className="bg-green-700 text-white px-4 py-2 rounded text-sm font-bold flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Re-imagined Section */}
        <section className="bg-gradient-to-b from-white to-yellow-50 py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-8 h-8 text-yellow-400 fill-current" />
              <h2 className="text-5xl font-black text-red-900">YOUR FAVES, RE-IMAGINED.</h2>
            </div>
            <p className="text-gray-700 mb-8">Classic, dessert flavours, jam bars with protein—zero guilt, full taste.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {products.map((bar, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                  <img 
                    src={bar.image}
                    alt={`Protein bar ${bar}`}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                </div>
              ))}
            </div>
            <div className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-bold transform -rotate-2">
              PROTEIN-PACKED!
            </div>
            <div className="inline-block bg-yellow-300 text-gray-800 px-6 py-3 rounded-full font-bold ml-4 transform rotate-2">
              NATURALLY CLEAN
            </div>
          </div>
        </section>

        {/* Most Popular Section */}
        <section className="bg-gradient-to-b from-yellow-400 to-yellow-500 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-12">
              <h2 className="text-5xl font-black text-red-900">MOST POPULAR FLAVOURS</h2>
              <Star className="w-10 h-10 text-green-600 fill-current" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform">
                  <div className={`${product.color} h-64 flex items-center justify-center`}>
                    <img 
                      src={product.image}
                      alt={`Protein bar ${product}`}
                      className="w-48 h-48 object-cover rounded-lg mb-3"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-black text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{product.subtitle}</p>
                    <button className="bg-amber-700 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-800 transition-colors">
                      BUY NOW
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center gap-3 mt-8">
              <button className="w-12 h-12 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"></button>
              <button className="w-12 h-12 bg-amber-900 rounded-full shadow-lg hover:scale-110 transition-transform"></button>
            </div>
          </div>
        </section>

        {/* Science Section */}
        <section className="bg-gradient-to-b from-green-700 to-green-800 py-16 px-6 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <Star className="w-12 h-12 text-yellow-300 fill-current mx-auto mb-4" />
              <h2 className="text-6xl font-black text-yellow-300 mb-4">THE SCIENCE BEHIND THE BITE.</h2>
              <p className="text-xl">Balanced macros, natural ingredients, and a boost to fuel your hustle.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {images.map((img, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl hover:bg-white/20 transition-all">
                    <img 
                      src={img.image}
                      alt={`Protein bar ${img}`}
                      className="w-48 h-48 object-cover rounded-lg mb-3"
                    />
                  <Star className="w-8 h-8 text-yellow-300 fill-current mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Pack */}
        <section className="bg-gradient-to-b from-pink-200 to-pink-300 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-start gap-8">
              <div className="flex-1">
                <div className="bg-pink-400 text-white px-4 py-2 rounded-full inline-block mb-4 font-bold text-sm">
                  BEST VALUE!
                </div>
                <h2 className="text-5xl font-black text-amber-900 mb-4">MEET THE SNACKY PACK.</h2>
                <p className="text-gray-800 mb-6">
                  Grab a variety pack! Run three, create a mixed bag. Snack on your favorites!
                </p>
                <button className="bg-amber-800 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-900 transition-colors">
                  SHOP NOW
                </button>
              </div>
              <div className="flex gap-4">
                <div className="bg-pink-400 p-4 rounded-2xl transform rotate-6 hover:rotate-0 transition-transform">
                  <div className="w-32 h-48 bg-white rounded-lg">
                    <img 
                      src="/9.png"
                      className="w-48 h-48 object-cover rounded-lg mb-3"
                    />
                  </div>
                </div>
                <div className="bg-green-600 p-4 rounded-2xl transform -rotate-3 hover:rotate-0 transition-transform">
                  <div className="w-32 h-48 bg-white rounded-lg">
                     <img 
                      src="/10.png"
                      className="w-48 h-48 object-cover rounded-lg mb-3"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Star className="w-12 h-12 text-blue-600 fill-current ml-auto mt-4" />
          </div>
        </section>

        {/* Discount Section */}
        <section className="bg-gradient-to-b from-yellow-50 to-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center items-center gap-6 mb-8">
              <div className="bg-yellow-200 w-20 h-20 rounded-full"></div>
              <Star className="w-10 h-10 text-yellow-400 fill-current" />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-amber-900 mb-4">
              GET 10% OFF<br />YOUR FIRST BITE!
            </h2>
            <p className="text-gray-700 mb-8">Join the snacky fam and unlock instant savings<br />on your first order.</p>
            
            <div className="flex max-w-md mx-auto gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL"
                className="flex-1 px-6 py-4 rounded-full border-2 border-amber-900 focus:outline-none focus:border-amber-700"
              />
              <button className="bg-yellow-400 text-amber-900 px-8 py-4 rounded-full font-black hover:bg-yellow-500 transition-colors">
                SIGN UP
              </button>
            </div>
            
            <div className="flex justify-center gap-6 mt-8">
              <Star className="w-12 h-12 text-pink-500 fill-current" />
              <div className="bg-yellow-200 w-20 h-20 rounded-2xl"></div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-red-900 to-red-950 text-white py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-5xl font-black text-yellow-400 mb-6 pr-64">Snacky</h3>
                <div className="flex items-start gap-3 text-sm">
                  <Star className="w-5 h-5 text-yellow-400 fill-current flex-shrink-0 mt-1" />
                  <p>123 Nutrition Ave,<br />Protein Plaza, New York, 10001</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-3">SHOP</h4>
                  <ul className="space-y-2 text-sm">
                    <li>RECIPES</li>
                    <li>PRODUCTS</li>
                    <li>BUNDLES</li>
                    <li>PRIVACY POLICY</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">© 2025 Snacky</h4>
                  <p className="text-sm">info@Snacky.com</p>
                  <div className="flex gap-3 mt-4">
                    <Heart className="w-6 h-6 text-yellow-400 fill-current" />
                    <div className="bg-yellow-400 w-8 h-8 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-red-800 pt-6 text-center text-sm text-gray-400">
              <p>Made with protein, passion, and purpose.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
