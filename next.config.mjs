/** @type {import('next').NextConfig} */
import { DB_URI, API } from "./config";

const nextConfig = {
  env: {
    DB_URI,
    API,
  },
};

export default nextConfig;
