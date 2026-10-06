export const metadata = {
  title: "SaucerSwap HCS Price Attestor",
  description: "Agent-friendly Hedera Consensus Service attestation template",
};

// This app is an operational attestation UI, not a static export. Keeping the
// route tree dynamic also avoids Next trying to prerender its internal 404
// boundary in CI, where the current Next/React combination can hit a null
// dispatcher during static generation.
export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", maxWidth: 900, margin: "40px auto", padding: 20 }}>
        {children}
      </body>
    </html>
  );
}
