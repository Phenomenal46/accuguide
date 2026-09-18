const blockedUserAgents = [
  "meta-externalagent",
  "GPTBot",
  "Amazonbot",
  "ShapBot",
  "Bytespider",
  "PetalBot",
];

export default () => {
  return new Response("Forbidden: AI scraper blocked", { status: 403 });
};

export const config = {
  path: "/*",
  header: {
    "user-agent": blockedUserAgents.join("|"),
  },
};
