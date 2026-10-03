# AGENTS.md

## Goal
Maintain a Scaffold-HBAR external template that attests a live read-only SaucerSwap market observation to Hedera Consensus Service (HCS) on testnet and verifies the message via Mirror Node.

## Safety
- Never commit operator IDs, private keys, seed phrases, .env files, or generated credentials.
- Hedera operator credentials are server-only. Never expose them through NEXT_PUBLIC_* variables or browser bundles.
- SaucerSwap access is read-only. Do not add swaps, approvals, custody, or user-fund flows.
- Testnet is the only network used for HCS writes by default.

## Required checks
Before proposing a change run:
1. npm install
2. npm test
3. npm run lint
4. npm run build

The core routes / and /attestations must remain functional.

## Architecture
- packages/nextjs: UI, API routes, typed source adapter, canonicalization, HCS submission, Mirror Node verification.
- packages/hardhat: Scaffold-HBAR-compatible contracts workspace; this template does not require a custom contract for its primary HCS flow.
- template.json: external-template manifest.
- evidence/: transaction and Mirror Node evidence; never place secrets here.

## Implementation rules
Keep external integrations behind typed adapters. Canonical attestation payloads must serialize deterministically before hashing. Persist or display HCS topic ID, transaction ID, message hash, sequence number, and consensus timestamp so a reviewer can independently verify an attestation.
