import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  transpilePackages: [
    'rc-input',
    'rc-tree',
    'rc-util',
    'rc-table',
    '@ant-design',
    '@ant-design/pro-editor',
    'antd',
    '@ant-design/icons',
    '@ant-design/pro-components',
    '@ant-design/pro-layout',
    '@ant-design/pro-utils',
    '@ant-design/pro-provider',
    'kitchen-flow-editor',
    'zustand', 'leva', 'antd',
    'rc-pagination',
    'rc-picker',
    '@rc-component'
  ],
};

export default nextConfig;
