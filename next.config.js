/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standaone',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/meyersa/**",
      },
    ],
  },
};

