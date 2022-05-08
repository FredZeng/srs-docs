/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: ['tutorial/learning-path', 'tutorial/getting-started'],
  docsSidebar: [
    'doc/introduction',
    {
      type: 'category',
      label: 'Build',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: ['doc/build/install', 'doc/build/service', 'doc/build/arm', 'doc/build/raspberrypi', 'doc/build/windows'],
    },
    'doc/git',
    {
      type: 'category',
      label: 'Main Concepts',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'doc/main-concepts/rtmp-url-vhost',
        'doc/main-concepts/rtmp-handshake',
        'doc/main-concepts/rtmp-pk-http',
        'doc/main-concepts/low-latency',
        'doc/main-concepts/time-jitter',
        'doc/main-concepts/rtmp-atc',
        'doc/main-concepts/drm',
        'doc/main-concepts/edge',
        {
          type: 'category',
          label: 'SRT',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'doc/main-concepts/srt/srt-codec',
            'doc/main-concepts/srt/srt-params',
            'doc/main-concepts/srt/srt-url',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'doc/guides/log',
        'doc/guides/log-rotate',
        'doc/guides/resource',
        'doc/guides/reload',
        'doc/guides/reuse-port',
        {
          type: 'category',
          label: 'Deploy Guides',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'doc/guides/deploy-guides/delivery-rtmp',
            'doc/guides/deploy-guides/delivery-hls',
            'doc/guides/deploy-guides/delivery-http-flv',
            'doc/guides/deploy-guides/delivery-hds',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Integration',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'doc/integration/http-api',
        'doc/integration/http-callback',
        'doc/integration/special-control',
        'doc/integration/ide',
        'doc/integration/client-sdk',
        'doc/integration/srs-lib-rtmp',
      ],
    },
  ],
  sampleSidebar: [
    'samples/sample',
    {
      type: 'category',
      label: 'RTMP',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: ['samples/rtmp/sample-rtmp', 'samples/rtmp/sample-rtmp-cluster'],
    },
    {
      type: 'category',
      label: 'HLS',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: ['samples/hls/sample-hls', 'samples/hls/sample-hls-cluster', 'samples/hls/sample-transcode-to-hls'],
    },
    {
      type: 'category',
      label: 'FLV',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: ['samples/flv/sample-http-flv', 'samples/flv/sample-http-flv-cluster'],
    },
  ],
  communitySidebar: ['community/Support', 'community/Contributing'],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
