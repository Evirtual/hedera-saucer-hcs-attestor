#!/usr/bin/env node
import "dotenv/config";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { buildAttestation, submitAttestation } from "./attestation.js";

function arg(name) {
  const i = process.argv.indexOf("--" + name);
  return i >= 0 ? process.argv[i + 1] : undefined;
}

async function main() {
  const artifact = arg("artifact");
  const topicId = arg("topic") || process.env.HEDERA_TOPIC_ID;
  if (!artifact) throw new Error("Usage: saucer-attest --artifact <path> [--topic <id>]");
  if (!topicId) throw new Error("Missing --topic or HEDERA_TOPIC_ID");

  const bytes = await readFile(artifact);
  const sha256 = createHash("sha256").update(bytes).digest("hex");
  const attestation = buildAttestation({ artifact, sha256 });
  const result = await submitAttestation({
    accountId: process.env.HEDERA_ACCOUNT_ID,
    privateKey: process.env.HEDERA_PRIVATE_KEY,
    topicId,
    attestation
  });

  process.stdout.write(JSON.stringify({ artifact, sha256, attestation, ...result }, null, 2) + "\n");
}

main().catch((error) => {
  console.error(error?.stack || error);
  process.exitCode = 1;
});
