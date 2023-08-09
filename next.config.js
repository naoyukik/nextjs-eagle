const { join } = require("path");
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["typicode.com", "placehold.jp", "localhost", "172.22.207.117", "192.168.2.212", "172.28.241.141", "172.28.240.1"],
  },
  sassOptions: {
    includePaths: [join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
