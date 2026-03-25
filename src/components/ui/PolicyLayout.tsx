import PageHero from './PageHero'

interface Props { title: string; lastUpdated: string; children: React.ReactNode }

export default function PolicyLayout({ title, lastUpdated, children }: Props) {
  return (
    <>
      <PageHero title={title} size="sm" />
      <div className="max-w-[760px] mx-auto px-6 py-16">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#7a7870] mb-10">
          Last updated: {lastUpdated}
        </p>
        <div className="prose-policy">{children}</div>
      </div>
    </>
  )
}
