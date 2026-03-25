export default function Ticker() {
  const items = [
    'Every club personally inspected',
    'Free returns within 30 days',
    'Free shipping over $75',
    '4.9 stars on Trustpilot',
  ]
  const doubled = [...items, ...items]

  return (
    <div className="bg-[#1c2e1a] text-white py-3.5 overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-ticker">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex text-[12px] font-semibold uppercase tracking-[0.1em] px-10 border-r border-white/20"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
