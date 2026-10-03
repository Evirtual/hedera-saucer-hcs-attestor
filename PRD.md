# SaucerSwap HCS Price Attestor — bounty build PRD

## Product
A production-quality Scaffold-HBAR external template for developers who need an auditable market-data observation on Hedera.

The template reads a live, read-only SaucerSwap quote, normalizes the observation, hashes the canonical payload, submits the payload/hash to a Hedera Consensus Service topic, and verifies it through the Hedera Mirror Node. The UI shows the source quote beside the immutable HCS consensus timestamp and transaction/topic evidence.

## Why the integration is load-bearing
SaucerSwap supplies the market observation. HCS supplies consensus ordering and timestamping. Removing SaucerSwap removes the market-data product; removing HCS removes the attestation/audit property.

## Core flow
1. Fetch a supported SaucerSwap pair/quote.
2. Normalize symbol, pool identifier, price, liquidity, source timestamp and retrieval timestamp.
3. Canonicalize JSON and compute SHA-256.
4. Submit an attestation message to a configured HCS topic on Hedera testnet.
5. Poll Mirror Node until the message is visible.
6. Render source data, hash, consensus timestamp, sequence number and explorer/mirror evidence.
7. Allow a developer to repeat the flow with another supported pair.

## Mechanical gate
- Public MIT repository.
- Monorepo with packages/hardhat and packages/nextjs.
- Valid template.json.
- README.md and AGENTS.md.
- Fresh scaffold installs, lints and builds.
- Core routes / and /attestations return OK.
- Genuine HCS transaction on testnet with mirror-node or HashScan evidence.
- No committed .env or secrets.

## Scoring plan
- Ecosystem integration (35): SaucerSwap is the live source and is required for the core flow.
- Docs (30): quickstart, architecture, env reference, troubleshooting, evidence walkthrough, agent instructions.
- Code quality (20): typed boundaries, canonicalization unit tests, source adapter tests, HCS service isolation, deterministic error handling.
- Hedera depth (15): HCS topic creation/message submission + Mirror Node verification and replay.

## Implementation boundaries
- No private key ever reaches the browser.
- Server-only Hedera operator credentials.
- SaucerSwap integration is read-only; no user funds or swaps.
- The default demo is testnet-safe.
- If SaucerSwap has no equivalent testnet market endpoint, mainnet data may be read-only while the attestation transaction remains on Hedera testnet, consistent with bounty rules.

## Definition of done
A fresh user can run the Scaffold-HBAR external-template command, configure testnet credentials, boot the app, attest one market observation, and follow the returned evidence to independently verify it.
