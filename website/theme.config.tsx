/* eslint sort-keys: error */
import {
  SofaLogo,
  FooterExtended,
  mdxComponents,
  Header,
  Navbar,
} from '@theguild/components';
import { DocsThemeConfig } from 'nextra-theme-docs';

const SITE_NAME = 'GraphQL Sofa';

const config: DocsThemeConfig = {
  components: mdxComponents,
  docsRepositoryBase:
    'https://github.com/Urigo/SOFA/tree/master/website/src/pages',
  editLink: {
    text: 'Edit this page on GitHub',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'kind/docs',
  },
  footer: {
    component: <FooterExtended />,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={`${SITE_NAME}: documentation`} />
      <meta name="og:title" content={`${SITE_NAME}: documentation`} />
    </>
  ),
  logo: (
    <>
      <SofaLogo className="mr-1.5 h-9 w-9" />
      <div>
        <h1 className="md:text-md text-sm font-medium">{SITE_NAME}</h1>
        <h2 className="hidden text-xs sm:block">Now you can Rest with Sofa</h2>
      </div>
    </>
  ),
  navbar: (props) => (
    <>
      <Header
        accentColor="#1cc8ee"
        themeSwitch
        searchBarProps={{ version: 'v2' }}
      />
      <Navbar {...props} />
    </>
  ),
  project: {
    link: 'https://github.com/Urigo/SOFA',
  },
  search: {
    component: null,
  },
  sidebar: {
    defaultMenuCollapsed: true,
  },
  titleSuffix: ` – ${SITE_NAME}`,
};

export default config;
