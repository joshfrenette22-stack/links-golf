import PolicyLayout from '@/components/ui/PolicyLayout'

export default function ShippingPage() {
  return (
    <PolicyLayout title="Shipping Policy" lastUpdated="March 1, 2026">
      <h2>Free Standard Shipping</h2>
      <p>All orders over $75 ship free via UPS or FedEx Ground. Orders under $75 ship for a flat fee of $8.99.</p>
      <h2>Express Shipping</h2>
      <p>1–2 business day delivery is available at checkout for $12.99.</p>
      <h2>Processing Time</h2>
      <p>Orders placed before 2:00 PM MT Monday–Friday ship same day. Orders placed after 2 PM or on weekends ship the next business day.</p>
      <h2>Delivery Estimates</h2>
      <div style={{overflowX:'auto'}}>
        <table style={{minWidth:'400px'}}>
          <thead><tr><th>Region</th><th>Standard</th><th>Express</th></tr></thead>
          <tbody>
            <tr><td>Continental US</td><td>3–5 days</td><td>1–2 days</td></tr>
            <tr><td>Alaska / Hawaii</td><td>5–8 days</td><td>3–4 days</td></tr>
            <tr><td>Canada</td><td>7–12 days</td><td>4–6 days</td></tr>
            <tr><td>International</td><td colSpan={2}>Not currently available</td></tr>
          </tbody>
        </table>
      </div>
      <h2>Carrier &amp; Tracking</h2>
      <p>You&apos;ll receive a tracking number via email once your order ships. We ship via UPS, FedEx, and USPS depending on size and destination.</p>
      <h2>Undeliverable Packages</h2>
      <p>If a package is returned to us as undeliverable, we&apos;ll contact you to reship. Additional shipping fees may apply.</p>
      <h2>Damaged in Transit</h2>
      <p>Contact us within 48 hours of delivery with photos. We&apos;ll work with the carrier and replace or refund immediately.</p>
    </PolicyLayout>
  )
}
