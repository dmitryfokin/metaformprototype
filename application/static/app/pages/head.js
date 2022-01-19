export default () => ({
  tag: 'head',
  children: [
    {
      tag: 'meta',
      attrs: {
        charset: 'utf-8',
      },
    },
    {
      tag: 'title',
      text: 'Metarhia example metaform prototype',
    },
    {
      tag: 'meta',
      attrs: {
        'http-equiv': 'Content-Security-Policy',
        content: "connect-src 'self' wss:; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com",
      },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'manifest',
        href: 'manifest.json',
      },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'stylesheet',
        href: 'app.css',
      },
    },
    {
      tag: 'meta',
      attrs: {
        name: 'HandheldFriendly',
        content: 'true',
      },
    },
    {
      tag: 'meta',
      attrs: {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
    },
    {
      tag: 'meta',
      attrs: {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black',
      },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'apple-touch-icon-precomposed',
        href: 'favicon.png',
      },
    },
    {
      tag: 'meta',
      attrs: {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no',
      },
    },
    {
      tag: 'meta',
      attrs: {
        name: 'format-detection',
        content: 'telephone=no',
      },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'shortcut icon',
        href: 'favicon.ico',
        type: 'image/vnd.microsoft.icon',
      },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'icon',
        href: 'favicon.ico',
        type: 'image/vnd.microsoft.icon',
      },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'apple-touch-icon',
        href: 'favicon.png',
      },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Share+Tech+Mono',
        type: 'text/css',
      },
    },
  ],
});
