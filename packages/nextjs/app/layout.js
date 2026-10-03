export const metadata = {
  title: "SaucerSwap HCS Price Attestor",
  description: "Agent-friendly Hedera Consensus Service attestation template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", maxWidth: 900, margin: "40px auto", padding: 20 }}>
        {children}
      </body>
    </html>
  );
}
