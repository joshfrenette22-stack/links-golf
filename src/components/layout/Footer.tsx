import { Camera, Play, Music2, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2e4a2c] text-white pt-16 pb-10 px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Quick Links */}
        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-widest mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['Shop All', 'Drivers', 'Irons', 'Wedges', 'Putters', 'Bags'].map(l => (
              <li key={l}><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        {/* Help */}
        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-widest mb-4">Help</h3>
          <ul className="space-y-2">
            {['FAQ', 'Shipping & Returns', 'Club Grading', 'Contact Us', 'Trade-In'].map(l => (
              <li key={l}><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        {/* Follow Us */}
        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-widest mb-4">Follow Us</h3>
          <div className="flex gap-3 mt-2">
            {[Camera, Play, Music2, Globe].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 flex items-center justify-center border border-white/30 rounded hover:bg-white/10 transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        {/* Newsletter */}
        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-widest mb-4">Newsletter</h3>
          <p className="text-sm text-white/70 mb-4">Get the latest deals and drops.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 text-sm text-[#1a1a18] bg-white outline-none"
              aria-label="Email for newsletter"
            />
            <button className="bg-black text-white text-xs uppercase tracking-wider px-4 py-2 hover:bg-[#1a1a18] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <select className="bg-transparent text-white/70 text-xs border border-white/30 px-2 py-1">
            <option>United States (USD $)</option>
          </select>
          <span className="text-white/50 text-xs">© 2026 LINKS Golf. All rights reserved.</span>
        </div>
        <div className="flex gap-2">
          {['Visa', 'MC', 'Amex', 'PayPal', 'Diners', 'Discover'].map(p => (
            <span key={p} className="bg-white/90 text-[#1a1a18] text-[9px] font-bold px-2 py-1 rounded">{p}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}
