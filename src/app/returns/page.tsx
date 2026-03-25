import PolicyLayout from '@/components/ui/PolicyLayout'

export default function ReturnsPage() {
  return (
    <PolicyLayout title="Returns & Refunds" lastUpdated="March 1, 2026">
      <h2>Our 30-Day Guarantee</h2>
      <p>We stand behind every club we grade. If the condition doesn&apos;t match the description, we&apos;ll make it right — no questions asked.</p>
      <h2>What&apos;s Eligible</h2>
      <p>Items returned within 30 days of delivery in the same condition received. Include original packaging if possible.</p>
      <h2>What&apos;s Not Eligible</h2>
      <p>Clubs that have been regripped, reshafted, or show damage beyond what was disclosed at purchase. Items returned after 30 days.</p>
      <h2>How to Start a Return</h2>
      <ol>
        <li>Log in to your account</li>
        <li>Find your order and click &quot;Start Return&quot;</li>
        <li>Print your free return label</li>
        <li>Ship the item within 5 days of initiating the return</li>
      </ol>
      <h2>Refund Timeline</h2>
      <p>Refunds are processed within 3–5 business days of receiving the returned item. Refunds are issued to your original payment method.</p>
      <h2>Exchanges</h2>
      <p>We recommend returning for a refund and placing a new order for the fastest turnaround. This ensures availability and the quickest processing time.</p>
      <h2>Contact Us</h2>
      <p>If any issues arise, please <a href="/contact">contact us</a> and we&apos;ll sort it out promptly.</p>
    </PolicyLayout>
  )
}
