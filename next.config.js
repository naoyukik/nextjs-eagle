const { join } = require("path");
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["placehold.jp"],
  },
  sassOptions: {
    includePaths: [join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
