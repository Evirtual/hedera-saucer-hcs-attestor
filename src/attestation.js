import { Client, TopicMessageSubmitTransaction } from "@hashgraph/sdk";

export function buildAttestation({ artifact, sha256, agent = "scaffold-hbar-agent" }) {
  if (!artifact || !sha256) throw new Error("artifact and sha256 are required");
  return {
    schema: "hcs-artifact-attestation/v1",
    artifact,
    sha256,
    agent,
    createdAt: new Date().toISOString()
  };
}

export async function submitAttestation({ accountId, privateKey, topicId, attestation }) {
  if (!accountId || !privateKey || !topicId) {
    throw new Error("HEDERA_ACCOUNT_ID, HEDERA_PRIVATE_KEY and HEDERA_TOPIC_ID are required");
  }
  const client = Client.forTestnet().setOperator(accountId, privateKey);
  try {
    const tx = await new TopicMessageSubmitTransaction({
      topicId,
      message: JSON.stringify(attestation)
    }).execute(client);
    const receipt = await tx.getReceipt(client);
    return { transactionId: tx.transactionId.toString(), status: receipt.status.toString() };
  } finally {
    client.close();
  }
}
