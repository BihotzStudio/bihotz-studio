import { headers } from "next/headers";

const botUserAgents = [
  "googlebot",
  "bingbot",
  "yandexbot",
  "duckduckbot",
  "baiduspider",
  "slurp",
  "msnbot",
];

export async function isBot() {
  const headersList = await headers();
  const isBot = botUserAgents.some((bot) =>
    headersList.get("user-agent").includes(bot)
  );

  return isBot;
}
