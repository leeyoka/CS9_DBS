'use client';

import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, ShoppingCart, Bell, Globe, ChevronRight, Zap, 
  Heart, Star, LogIn, Clock, ArrowRight, ShieldCheck, 
  Flame, ShoppingBag, UserCircle, Menu, MoreHorizontal,
  MapPin, Send, Share2, MessageCircle
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Constants & Types ---

const SHOPEE_ORANGE = "#EE4D2D";
const SHOPEE_BEIGE = "#FDF8F2";

// --- Components ---

const TopBanner = () => (
  <div className="bg-[#EE4D2D] text-white overflow-hidden py-1.5 px-4 hidden lg:block">
    <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
      <div className="flex gap-8">
        <div className="flex items-center gap-1.5"><Heart className="w-3 h-3 fill-white" /> Voucher Eksklusif Member Baru</div>
        <div className="flex items-center gap-1.5"><Zap className="w-3 h-3 fill-white" /> Flash Sale Setiap Jam</div>
        <div className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3 fill-white" /> 100% Garansi Uang Kembali</div>
        <div className="flex items-center gap-1.5"><Flame className="w-3 h-3 fill-white" /> 10.10 Mega Sale</div>
        <div className="flex items-center gap-1.5"><ChevronRight className="w-3 h-3" /> Gratis Ongkir Tanpa Minimum</div>
      </div>
      <div className="flex gap-4">
        <span className="cursor-pointer hover:opacity-80">Notifications</span>
        <span className="cursor-pointer hover:opacity-80">Help</span>
        <span className="flex items-center gap-1 cursor-pointer hover:opacity-80"><Globe className="w-3 h-3" /> EN | ID</span>
      </div>
    </div>
  </div>
);

const SubHeader = () => (
  <div className="bg-[#EE4D2D] text-white/90 py-1.5 px-4 hidden lg:block border-t border-white/10">
    <div className="max-w-7xl mx-auto flex justify-between items-center text-[11px]">
      <div className="flex gap-4">
        <a href="#" className="hover:text-white">Seller Centre</a>
        <a href="#" className="hover:text-white">Start Selling</a>
        <a href="#" className="hover:text-white">Download App</a>
        <a href="#" className="hover:text-white">Follow us on</a>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-4 lg:gap-10">
          {/* Logo */}
          <motion.a 
            href="#"
            whileHover={{ scale: 1.02 }}
            className="flex-shrink-0 cursor-pointer flex items-center text-[#EE4D2D]"
          >
            <div className="w-10 h-10 bg-[#EE4D2D] rounded-xl flex items-center justify-center text-white p-2">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z" />
              </svg>
            </div>
            <div className="ml-2 flex flex-col">
              <span className="text-2xl font-black leading-none tracking-tighter">Shopee</span>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] opacity-60">Reimagined</span>
            </div>
          </motion.a>

          {/* Search Bar - Reimagined */}
          <div className="flex-grow flex flex-col gap-1.5">
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#EE4D2D] transition-colors">
                <Search className="w-4 h-4" />
              </div>
              <input 
                type="text" 
                placeholder="Cari sepatu, gadget, fashion, hingga groceries..."
                className="w-full bg-gray-100/80 border-transparent focus:bg-white border focus:border-[#EE4D2D]/40 py-2.5 pl-11 pr-24 rounded-full outline-none transition-all text-sm font-medium"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 px-6 rounded-full flex items-center justify-center transition-all bg-[#EE4D2D] text-white hover:bg-[#D73211] shadow-lg font-bold text-sm">
                Search
              </button>
            </div>
            <div className="hidden lg:flex gap-4 text-[11px] text-gray-500 font-medium ml-4">
              <span className="hover:text-[#EE4D2D] cursor-pointer">iPhone 15</span>
              <span className="hover:text-[#EE4D2D] cursor-pointer">Sneakers</span>
              <span className="hover:text-[#EE4D2D] cursor-pointer">Skincare</span>
              <span className="hover:text-[#EE4D2D] cursor-pointer">Headphones</span>
              <span className="hover:text-[#EE4D2D] cursor-pointer">Hijab</span>
              <span className="hover:text-[#EE4D2D] cursor-pointer">Air Fryer</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-5 text-gray-500">
               <Bell className="w-5 h-5 cursor-pointer hover:text-[#EE4D2D] transition-colors" />
               <Heart className="w-5 h-5 cursor-pointer hover:text-[#EE4D2D] transition-colors" />
               <div className="relative cursor-pointer group">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#EE4D2D]/10 hover:text-[#EE4D2D] transition-all">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <span className="absolute -top-1 -right-1 bg-[#EE4D2D] text-white text-[9px] font-black px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm">3</span>
               </div>
            </div>
            <a href="https://shopee.co.id/buyer/login?next=https%3A%2F%2Fshopee.co.id%2F" className="flex items-center gap-2 px-6 py-2.5 bg-[#EE4D2D] text-white font-bold rounded-2xl shadow-xl hover:bg-[#D73211] transition-all transform hover:-translate-y-0.5 text-sm group">
              <UserCircle className="w-5 h-5" />
              <span>Login</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 lg:pt-48 pb-20 relative overflow-hidden bg-gradient-to-br from-[#FDF8F2] via-white to-white">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EE4D2D]/5 rounded-full blur-[100px] -mr-48 -mt-24" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/50 rounded-full blur-[100px] -ml-24 -mb-24" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="flex items-center gap-2 mb-6 bg-white/60 backdrop-blur-sm border border-orange-100 w-fit px-4 py-1.5 rounded-full shadow-sm"
            >
              <SparklesIcon className="w-4 h-4 text-[#EE4D2D]" />
              <span className="text-[11px] font-black text-[#EE4D2D] uppercase tracking-widest">10.10 Mega Sale — Live Now</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl lg:text-7xl font-black text-[#2e2e2e] leading-[1.05] tracking-tighter mb-8"
            >
              Belanja jadi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE4D2D] to-orange-400">menyenangkan lagi.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-500 font-medium leading-relaxed max-w-lg mb-10"
            >
              Penemuan produk yang lebih cepat, harga yang lebih jujur, dan tampilan yang akhirnya nyaman di mata. Inilah Shopee yang seharusnya — dirancang ulang untuk kamu.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgb(238 77 45 / 0.25)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#EE4D2D] text-white px-8 py-5 rounded-[28px] font-black text-base shadow-2xl flex items-center gap-3 transition-all"
              >
                Mulai Belanja Sekarang <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, background: "rgba(238, 77, 45, 0.05)" }}
                className="bg-white border border-[#EE4D2D]/20 text-[#2e2e2e] px-8 py-5 rounded-[28px] font-black text-base transition-all"
              >
                Lihat Penawaran
              </motion.button>
            </motion.div>
          </div>

          {/* Right Image Container */}
          <div className="relative">
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="relative rounded-[48px] overflow-hidden shadow-2xl ring-8 ring-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" 
                alt="Shopping Experience" 
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent pointer-events-none" />
              
              {/* Stats Pills */}
              <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md p-4 rounded-3xl shadow-xl flex items-center gap-4 border border-orange-100">
                <div className="w-10 h-10 bg-emerald-50 rounded-2xl flex items-center justify-center">
                  <ArrowUpIcon className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Penjualan Hari Ini</p>
                  <p className="text-xl font-black text-gray-900">2.4M+ produk</p>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-4 rounded-3xl shadow-xl flex items-center gap-4 border border-orange-100">
                <div className="w-10 h-10 bg-orange-50 rounded-2xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-[#EE4D2D] fill-[#EE4D2D]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Rating Pengguna</p>
                  <p className="text-xl font-black text-gray-900">4.9 / 5.0</p>
                </div>
              </div>
            </motion.div>
            
            {/* Background Decorative Frame */}
            <div className="absolute inset-x-0 -bottom-6 h-12 bg-gradient-to-r from-[#EE4D2D] to-orange-400 rounded-b-[48px] -z-10 blur-sm opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  const cats = [
    { name: "Fashion", count: "120K+", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f" },
    { name: "Elektronik", count: "78K+", img: "https://images.unsplash.com/photo-1498049794561-7780e7231661" },
    { name: "Kecantikan", count: "54K+", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881" },
    { name: "Rumah & Hidup", count: "43K+", img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15" },
    { name: "Groceries", count: "31K+", img: "https://images.unsplash.com/photo-1542838132-92c53300491e" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-black text-gray-900 tracking-tighter mb-2">Jelajahi Kategori</h2>
            <p className="text-gray-500 font-medium">Temukan apa pun yang kamu butuhkan, dengan tampilan yang lebih bersih.</p>
          </div>
          <a href="#" className="flex items-center gap-1.5 text-[#EE4D2D] font-black uppercase text-xs tracking-widest hover:underline">
            Lihat semua <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cats.map((c, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="relative aspect-[3/4] rounded-[32px] overflow-hidden group cursor-pointer shadow-lg"
            >
              <img 
                src={`${c.img}?auto=format&fit=crop&w=400&h=533`} 
                alt={c.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-black leading-tight tracking-tight mb-1">{c.name}</h3>
                <p className="text-xs font-bold text-white/70 uppercase tracking-widest">{c.count} produk</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FlashSale = () => {
  const items = [
    { name: "TWS Earbuds Pro Active Noise Cancelling", price: "189.000", oldPrice: "499.000", stock: 28, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df" },
    { name: "Sneakers Daily Comfort Unisex", price: "245.000", oldPrice: "459.000", stock: 41, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
    { name: "Smartwatch Sport S9 Bluetooth Call", price: "329.000", oldPrice: "799.000", stock: 12, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
    { name: "Matte Velvet Lipstick Long Lasting", price: "49.000", oldPrice: "119.000", stock: 67, img: "https://images.unsplash.com/photo-1586776977607-310e9c725c37" },
    { name: "Leather Tote Bag Premium", price: "279.000", oldPrice: "549.000", stock: 19, img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3" },
    { name: "RGB Mechanical Gaming Keyboard", price: "379.000", oldPrice: "799.000", stock: 8, img: "https://images.unsplash.com/photo-1595225476474-87563907a212" },
  ];

  return (
    <section className="py-20 bg-[#FDF8F2]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-[48px] p-10 border-4 border-[#EE4D2D]/10 relative shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 bg-[#EE4D2D] rounded-[24px] flex items-center justify-center text-white shadow-xl rotate-12">
                <Zap className="w-8 h-8 fill-white" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-4xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
                  Flash Sale
                </h2>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Berakhir dalam</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-gray-900 text-white px-4 py-2 rounded-2xl font-black text-lg">02</div>
                <span className="text-gray-900 font-black text-2xl">:</span>
                <div className="bg-gray-900 text-white px-4 py-2 rounded-2xl font-black text-lg">45</div>
                <span className="text-gray-900 font-black text-2xl">:</span>
                <div className="bg-gray-900 text-white px-4 py-2 rounded-2xl font-black text-lg">09</div>
              </div>
            </div>
            <a href="#" className="flex items-center gap-1.5 text-[#EE4D2D] font-black uppercase text-xs tracking-widest hover:underline">
              Lihat semua <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {items.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square rounded-[36px] overflow-hidden mb-5 shadow-lg">
                  <img src={`${item.img}?auto=format&fit=crop&w=400&h=400`} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#EE4D2D] text-[10px] font-black px-2.5 py-1.5 rounded-xl shadow-sm">
                    -{45 + (i * 5)}%
                  </div>
                </div>
                <div className="px-1">
                  <h3 className="text-xs font-bold text-gray-800 line-clamp-2 mb-2 leading-relaxed min-h-[32px]">{item.name}</h3>
                  <div className="flex flex-col mb-4">
                    <span className="text-[#EE4D2D] text-xl font-black">Rp{item.price}</span>
                    <span className="text-[10px] text-gray-400 font-bold line-through">Rp{item.oldPrice}</span>
                  </div>
                  <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${70 - (i * 10)}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-[#EE4D2D] to-orange-400"
                    />
                  </div>
                  <div className="flex items-center gap-1.5 mt-2.5">
                    <Flame className="w-3 h-3 text-[#EE4D2D]" />
                    <span className="text-[9px] font-black text-[#EE4D2D] uppercase tracking-widest">Tersisa {item.stock}!</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const LoginSection = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="relative bg-gradient-to-br from-[#EE4D2D] to-orange-500 rounded-[56px] p-12 lg:p-20 shadow-2xl overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-[800px] h-full bg-white/5 skew-x-12 -mr-48" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 border border-white/20">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Eksklusif untuk member</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white leading-[1.1] tracking-tighter mb-8">
              Login untuk lihat lebih <br /> banyak penawaran <br /> spesial.
            </h2>
            <p className="text-white/80 font-medium text-lg mb-12 max-w-xl">
              Dapatkan koin Shopee, voucher tersembunyi, rekomendasi yang lebih personal, dan akses ke flash sale eksklusif member.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="https://shopee.co.id/buyer/login?next=https%3A%2F%2Fshopee.co.id%2F"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#EE4D2D] px-10 py-5 rounded-[28px] font-black text-lg shadow-2xl transition-all flex items-center gap-3"
              >
                Login Sekarang <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.button 
                whileHover={{ background: "rgba(255, 255, 255, 0.15)" }}
                className="border border-white/30 text-white px-10 py-5 rounded-[28px] font-black text-lg transition-all"
              >
                Daftar Gratis
              </motion.button>
            </div>
            <div className="flex items-center gap-2 mt-12">
               <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
               </div>
               <span className="text-white/80 font-bold text-sm">Dipercaya 100 juta+ pengguna di Asia Tenggara</span>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {[
              { label: "Voucher Rp50.000", desc: "Tersembunyi untuk member" },
              { label: "Cashback 25% koin", desc: "Setiap transaksi" },
              { label: "Free Ongkir XTRA", desc: "Tanpa minimum belanja" },
              { label: "Akses Flash Sale Awal", desc: "10 menit lebih dulu" },
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[32px] flex items-center justify-between group hover:bg-white/20 transition-all cursor-default"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                    <ShieldCheck className="w-6 h-6 opacity-60" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-lg">{benefit.label}</h4>
                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest">{benefit.desc}</p>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black text-white uppercase tracking-widest group-hover:bg-white group-hover:text-[#EE4D2D] transition-all">
                  Locked
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Recommended = () => {
  const products = [
    { name: "TWS Earbuds Pro ANC Bluetooth 5.3", price: "189.000", rating: 4.9, sold: "1.8RB", loc: "Jakarta", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df" },
    { name: "Sneakers Daily Comfort Unisex Original", price: "245.000", rating: 4.8, sold: "940", loc: "Bandung", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
    { name: "Smartwatch Sport S9 Layar AMOLED", price: "329.000", rating: 4.9, sold: "2.3RB", loc: "Surabaya", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
    { name: "Matte Velvet Lipstick Long Lasting 24H", price: "49.000", rating: 4.7, sold: "5.4RB", loc: "Jakarta", img: "https://images.unsplash.com/photo-1586776977607-310e9c725c37" },
    { name: "Leather Tote Bag Premium Wanita", price: "279.000", rating: 4.8, sold: "612", loc: "Yogyakarta", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3" },
    { name: "RGB Mechanical Gaming Keyboard 87 Keys", price: "379.000", rating: 4.9, sold: "1.1RB", loc: "Tangerang", img: "https://images.unsplash.com/photo-1595225476474-87563907a212" },
    { name: "Skincare Set Lengkap Glowing 5in1", price: "159.000", rating: 4.8, sold: "3.2RB", loc: "Bekasi", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03" },
    { name: "Kemeja Oversize Korean Style Pria", price: "99.000", rating: 4.7, sold: "2.0RB", loc: "Depok", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c" },
    { name: "Power Bank 20.000mAh Fast Charging", price: "169.000", rating: 4.9, sold: "4.5RB", loc: "Jakarta", img: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 tracking-tighter mb-4">
            <span className="text-[#EE4D2D]">Untukmu</span> — Rekomendasi Pilihan
          </h2>
          <p className="text-gray-500 font-medium text-lg">Diseleksi berdasarkan minat & tren terkini.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-gray-100 flex flex-col group cursor-pointer"
            >
              <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100">
                <img src={`${p.img}?auto=format&fit=crop&w=500&h=500`} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-yellow-400 text-[#EE4D2D] text-[9px] font-black px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm uppercase tracking-widest">
                  <Star className="w-3 h-3 fill-[#EE4D2D]" /> Pilihan
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-sm font-bold text-gray-800 line-clamp-2 mb-4 leading-relaxed group-hover:text-[#EE4D2D] transition-colors h-[40px]">{p.name}</h3>
                <div className="mt-auto">
                  <div className="text-[#EE4D2D] text-2xl font-black tracking-tighter mb-4">Rp{p.price}</div>
                  <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-[10px] font-black text-gray-700">{p.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-tight">
                        <MapPin className="w-2.5 h-2.5 text-pink-400" /> {p.loc}
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-gray-400">{p.sold} terjual</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#FDF8F2] pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
             <div className="flex items-center text-[#EE4D2D] mb-8">
                <div className="w-12 h-12 bg-[#EE4D2D] rounded-2xl flex items-center justify-center text-white p-2.5">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z" />
                  </svg>
                </div>
                <span className="ml-3 text-3xl font-black uppercase tracking-tighter">Shopee</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                Shopee adalah platform belanja online terdepan di Asia Tenggara yang menghubungkan jutaan pembeli dan penjual. Temukan produk fashion, elektronik, kecantikan, hingga kebutuhan harian dengan harga terbaik, gratis ongkir, dan pembayaran yang aman dan mudah.
              </p>
              <div className="flex gap-4 mt-8">
                 {[Globe, Send, Share2, MessageCircle].map((Icon, i) => (
                   <div key={i} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-[#EE4D2D] hover:bg-white shadow-sm transition-all cursor-pointer">
                      <Icon className="w-5 h-5" />
                   </div>
                 ))}
              </div>
          </div>
          <div>
            <h4 className="font-black text-sm uppercase mb-10 text-gray-900 tracking-widest">Customer Service</h4>
            <ul className="text-sm text-gray-500 space-y-4 font-bold uppercase tracking-tight">
              <li className="hover:text-[#EE4D2D] cursor-pointer">Bantuan</li>
              <li className="hover:text-[#EE4D2D] cursor-pointer">Pusat Resolusi</li>
              <li className="hover:text-[#EE4D2D] cursor-pointer">Kebijakan</li>
              <li className="hover:text-[#EE4D2D] cursor-pointer">Hubungi Kami</li>
              <li className="hover:text-[#EE4D2D] cursor-pointer">Garansi</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-sm uppercase mb-10 text-gray-900 tracking-widest">Tentang Shopee</h4>
            <ul className="text-sm text-gray-500 space-y-4 font-bold uppercase tracking-tight">
              <li className="hover:text-[#EE4D2D] cursor-pointer">Tentang Kami</li>
              <li className="hover:text-[#EE4D2D] cursor-pointer">Karier</li>
              <li className="hover:text-[#EE4D2D] cursor-pointer">Blog</li>
              <li className="hover:text-[#EE4D2D] cursor-pointer">Kebijakan Privasi</li>
              <li className="hover:text-[#EE4D2D] cursor-pointer">Seller Centre</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-sm uppercase mb-10 text-gray-900 tracking-widest">Pembayaran</h4>
            <ul className="text-sm text-gray-500 space-y-4 font-bold uppercase tracking-tight">
              <li className="hover:text-[#EE4D2D] cursor-pointer">Visa / Mastercard</li>
              <li className="hover:text-[#EE4D2D] cursor-pointer">ShopeePay</li>
              <li className="hover:text-[#EE4D2D] cursor-pointer">Transfer Bank</li>
              <li className="hover:text-[#EE4D2D] cursor-pointer">Indomaret</li>
              <li className="hover:text-[#EE4D2D] cursor-pointer">Cicilan 0%</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-10 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-400 gap-6 uppercase tracking-widest font-bold">
          <div className="flex gap-4">
            <span>© 2026 Shopee — Case Study by Yohana Indah Nathania (NPM 2406368946).</span>
          </div>
          <div className="flex gap-6">
             <span className="text-gray-900">Privacy Policy</span>
             <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- Icons Helper ---

const SparklesIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
  </svg>
);

const ArrowUpIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m5 12 7-7 7 7" /><path d="M12 19V5" />
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden selection:bg-[#EE4D2D]/20">
      <TopBanner />
      <SubHeader />
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FlashSale />
        <LoginSection />
        <Recommended />
      </main>
      <Footer />
      
      {/* Decorative Floating Element */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-10 right-10 z-50 lg:flex flex-col items-center gap-4 hidden"
      >
        <div className="w-16 h-16 bg-white border border-gray-100 rounded-full shadow-2xl flex items-center justify-center text-gray-400 hover:text-[#EE4D2D] hover:scale-110 transition-all cursor-pointer">
           <Heart className="w-6 h-6" />
        </div>
        <div className="w-16 h-16 bg-[#EE4D2D] text-white rounded-[24px] shadow-2xl flex items-center justify-center hover:scale-110 transition-all cursor-pointer">
           <ShoppingCart className="w-6 h-6" />
        </div>
      </motion.div>
    </div>
  );
}
