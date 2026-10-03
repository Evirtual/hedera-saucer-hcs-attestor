# Saucer HCS Attestor

A small Hedera starter workspace for creating deterministic attestations and publishing their digest to Hedera Consensus Service (HCS).

## What it demonstrates

- deterministic JSON canonicalization and SHA-256 attestation digests
- an HCS-oriented attestation module and CLI
- a Next.js package for the example UI
- environment-variable based Hedera testnet configuration
- reproducible evidence intended for verification against Hedera testnet

## Setup

```bash
cd workspaces/hedera-saucer-hcs-attestor
npm install
```

Copy `.env.example` to `.env` and provide the required Hedera testnet values locally. Never commit account credentials or private keys.

## Run

Use the workspace scripts defined in `package.json`. The CLI accepts the attestation payload and produces the deterministic representation/digest used by the Hedera flow.

## Verification

A valid bounty submission must use a real Hedera testnet transaction. Transaction IDs, topic IDs, timestamps, hashes, or Mirror Node evidence must only be added after they have actually been produced and independently verified; this repository intentionally contains no fabricated chain evidence.

## Structure

- `src/canonical.js` — canonical serialization and hashing
- `src/attestation.js` — attestation/HCS logic
- `src/cli.js` — command-line entry point
- `packages/nextjs/` — example web package
- `template.json` — template manifest
- `AGENTS.md` — agent implementation guidance

## License

MIT
