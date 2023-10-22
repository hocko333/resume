import { css } from '@emotion/react'

export const globalStyles = css(
  `
  :root {
    --text-color: black;
    --bgc: white;
    --hr-color: #cccccc;
    --float-actions-bgc: white;
    --float-actions-border-color: #f0f0f0;
    --p-text-color: #24292e;
    --ant-float-btn-bgc: white;

    color: var(--text-color);
    background-color: var(--bgc);
    transition: all 0.3s;
  }

  [data-theme="dark"] {
    --text-color: white;
    --bgc: #161f32;
    --hr-color: #6e6e6e;
    --float-actions-bgc: #1f2024;
    --float-actions-border-color: #585858;
    --p-text-color: #cccccc;
    --ant-float-btn-bgc: #1f2024;
  }

  @media print {
    [data-theme="dark"] {
      --text-color: black;
      --bgc: white;
      --hr-color: #cccccc;
      --float-actions-bgc: white;
      --float-actions-border-color: #f0f0f0;
      --p-text-color: #24292e;
      --ant-float-btn-bgc: white;
    }
  }
  
  html,
  body,
  div,
  span,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  abbr,
  address,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  samp,
  small,
  strong,
  sub,
  sup,
  var,
  b,
  i,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }

  body {
    line-height: 1;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  nav ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  a {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }

  /* change colours to suit your needs */
  ins {
    background-color: #ff9;
    color: var(--text-color);
    text-decoration: none;
  }

  /* change colours to suit your needs */
  mark {
    background-color: #ff9;
    color: var(--text-color);
    font-style: italic;
    font-weight: bold;
  }

  del {
    text-decoration: line-through;
  }

  abbr[title],
  dfn[title] {
    border-bottom: 1px dotted;
    cursor: help;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* change border colour to suit your needs */
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid var(--hr-color);
    margin: 1em 0;
    padding: 0;
  }

  input,
  select {
    vertical-align: middle;
  }

  a:link,
  a:visited,
  a:focus {
    color: black;
    text-decoration: none;
  }
  a:hover {
    color: black;
    text-decoration: none;
  }
  a:active {
    color: black;
    text-decoration: none;
  }
`,
  {
    '#root': {
      position: 'absolute',
      maxWidth: '900px',
      left: '0',
      right: '0',
      margin: '0 auto 100px auto',
      fontFamily:
        '-apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif',
    },
    hr: {
      marginRight: '10px',
    },

    '@media (max-width: 600px)': {
      '#root': {
        width: '90%',
        left: '5%',
      },
      '.hide-on-mobile': {
        display: 'none',
      },
    },
    code: {
      fontFamily: "'Monaco', 'Courier New'",
      fontWeight: 600,
    },

    blockquote: {
      padding: '0 1em',
      borderLeft: '0.25em solid #dfe2e5',
      p: {
        color: '#6a737d !important',
      },
    },

    section: {
      li: {
        marginTop: '5px',
      },

      'li:last-child': {
        marginBottom: '5px',
      },

      'p, li': {
        color: 'var(--p-text-color)',
        lineHeight: '24px',
      },

      'a, a:link, a:visited': {
        color: '#0366d6',
      },

      'a:focus, a:hover': {
        color: '#03a9f4',
      },
    },

    'li ul': {
      marginLeft: '20px',
    },

    'div.ant-typography': {
      color: 'var(--text-color)',
    },

    'button.ant-float-btn-default': {
      '.ant-float-btn-body': {
        backgroundColor: 'var(--ant-float-btn-bgc)',
      },
    },
  },
)
