import { Camera, Play, Music2, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2e4a2c] text-white pt-16 pb-10 px-6 md:px-12">
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
          <div className="flex gap-4 mt-1">
            {[
              { Icon: Camera, label: 'Instagram' },
              { Icon: Play,   label: 'YouTube'   },
              { Icon: Music2, label: 'TikTok'    },
              { Icon: Globe,  label: 'X'         },
            ].map(({ Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="text-white/75 hover:text-white transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        {/* Newsletter */}
        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-widest mb-4">Newsletter</h3>
          <p className="text-sm text-white/70 mb-4">Get the latest deals and drops.</p>
          <div className="mt-3 flex border border-white/40">
            <input
              type="email"
              placeholder="email@example.com"
              aria-label="Email address for newsletter"
              className="flex-1 bg-transparent border-none outline-none text-white text-[13px] px-4 py-3 placeholder:text-white/45"
            />
            <button
              type="submit"
              className="bg-black text-white text-[11px] font-bold uppercase tracking-[0.1em] px-5 py-3 hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row flex-wrap justify-between items-center gap-4">
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
