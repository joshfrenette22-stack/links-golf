import PolicyLayout from '@/components/ui/PolicyLayout'

export default function PrivacyPage() {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="March 1, 2026">
      <h2>Information We Collect</h2><p>Name, email, shipping address, and payment information (processed by our payment provider — we never store card numbers). We also collect browsing behavior to improve your experience.</p>
      <h2>How We Use Your Information</h2><ul><li>Fulfill and ship your orders</li><li>Send transactional emails (order confirmation, shipping updates)</li><li>Improve site experience based on analytics</li><li>Send marketing emails (with your consent only)</li></ul>
      <h2>Cookies</h2><p>We use cookies for cart persistence, analytics, and session management. You can disable cookies in your browser settings, though some features may not function correctly.</p>
      <h2>Third-Party Services</h2><p>We use Stripe for payment processing, UPS/FedEx for shipping, and Google Analytics for site analytics. Each has their own privacy policy.</p>
      <h2>Data Retention</h2><p>We retain order data for 7 years for tax purposes. You may request deletion of your personal account data at any time.</p>
      <h2>Your Rights</h2><p>You have the right to access, correct, or delete your personal information. Email <a href="mailto:privacy@linksgolf.com">privacy@linksgolf.com</a>.</p>
      <h2>Children&apos;s Privacy</h2><p>This site is not directed to children under 13. We do not knowingly collect personal information from children.</p>
      <h2>Changes to This Policy</h2><p>We&apos;ll notify you of material changes via email or a prominent notice on this site.</p>
      <h2>Contact</h2><p><a href="mailto:privacy@linksgolf.com">privacy@linksgolf.com</a></p>
    </PolicyLayout>
  )
}
