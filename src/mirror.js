const DEFAULT_MIRROR_BASE = "https://testnet.mirrornode.hedera.com";

export function normalizeTransactionId(transactionId) {
  if (!transactionId) throw new Error("transactionId is required");
  return transactionId.replace("@", "-").replace(".", "-");
}

export async function fetchMirrorTransaction(transactionId, {
  baseUrl = DEFAULT_MIRROR_BASE,
  fetchImpl = fetch
} = {}) {
  const normalized = normalizeTransactionId(transactionId);
  const response = await fetchImpl(`${baseUrl}/api/v1/transactions/${encodeURIComponent(normalized)}`);
  if (!response.ok) throw new Error(`Mirror Node transaction lookup failed: ${response.status}`);
  const body = await response.json();
  const transactions = body.transactions || [];
  if (transactions.length === 0) throw new Error("Transaction not found on Mirror Node");
  return transactions;
}

export async function fetchTopicMessages(topicId, {
  baseUrl = DEFAULT_MIRROR_BASE,
  limit = 25,
  fetchImpl = fetch
} = {}) {
  if (!topicId) throw new Error("topicId is required");
  const url = new URL(`${baseUrl}/api/v1/topics/${encodeURIComponent(topicId)}/messages`);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("order", "desc");
  const response = await fetchImpl(url);
  if (!response.ok) throw new Error(`Mirror Node topic lookup failed: ${response.status}`);
  return response.json();
}
