export function ProductShareRow() {
  return (
    <div className="flex items-center gap-3 mt-6 pt-5 border-t border-[#e8e6e0]">
      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1a1a18] mr-1">Share</span>
      {/* Facebook */}
      <button className="w-[34px] h-[34px] border border-[#e8e6e0] rounded-full flex items-center justify-center cursor-pointer hover:border-[#1a1a18] hover:bg-[#f5f3ef] transition-all" aria-label="Share on Facebook">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      </button>
      {/* X/Twitter */}
      <button className="w-[34px] h-[34px] border border-[#e8e6e0] rounded-full flex items-center justify-center cursor-pointer hover:border-[#1a1a18] hover:bg-[#f5f3ef] transition-all" aria-label="Share on X">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </button>
      {/* Pinterest */}
      <button className="w-[34px] h-[34px] border border-[#e8e6e0] rounded-full flex items-center justify-center cursor-pointer hover:border-[#1a1a18] hover:bg-[#f5f3ef] transition-all" aria-label="Share on Pinterest">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.76 1.27-5.37 1.27-5.37s-.32-.65-.32-1.61c0-1.51.88-2.64 1.97-2.64.93 0 1.38.7 1.38 1.54 0 .94-.6 2.34-.91 3.64-.26 1.09.54 1.97 1.6 1.97 1.92 0 3.22-2.47 3.22-5.4 0-2.23-1.51-3.79-3.67-3.79-2.5 0-3.97 1.87-3.97 3.81 0 .75.29 1.56.65 2 .07.09.08.17.06.26-.07.27-.22.87-.25.99-.04.16-.13.19-.3.12C7.16 14.1 6.5 12.4 6.5 11c0-2.77 2.01-5.32 5.8-5.32 3.04 0 5.41 2.17 5.41 5.07 0 3.02-1.91 5.45-4.56 5.45-.89 0-1.73-.46-2.01-1.01l-.55 2.05c-.2.76-.73 1.72-1.09 2.3.82.25 1.69.39 2.5.39 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
        </svg>
      </button>
    </div>
  )
}
