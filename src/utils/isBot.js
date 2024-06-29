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

export function isBot() {
  const headersList = headers();
  const isBot = botUserAgents.some((bot) =>
    headersList.get("user-agent").includes(bot)
  );

  return isBot;
}
