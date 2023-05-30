import fs from "fs";
import path from "path";

const pfs = fs.promises;

const configPath = path.join(__dirname, ".vercel/output/config.json");
const existingConfig = JSON.parse(await pfs.readFile(configPath, "utf-8"));

const newConfig = {
  ...existingConfig,
  images: {
    sizes: [640, 750, 828, 1080, 1200],
    domains: [],
    minimumCacheTTL: 60,
    formats: ["image/avif", "image/webp"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "^avatars1\\.githubusercontent\\.com$",
    //     pathname: "^/u/578259",
    //   },
    // ],
  },
};

// write the new config file
await fs.writeFile(configPath, JSON.stringify(newConfig, null, 2));
