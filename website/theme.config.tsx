/* eslint sort-keys: error */
import { defineConfig, Giscus, SofaLogo, useTheme } from '@theguild/components';
import { useRouter } from 'next/router';

const SITE_NAME = 'GraphQL Sofa';

export default defineConfig({
  titleSuffix: ` – ${SITE_NAME}`,
  docsRepositoryBase:
    'https://github.com/Urigo/SOFA/tree/master/website',
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
  main: {
    extraContent() {
      const { resolvedTheme } = useTheme();
      const { route } = useRouter();

      if (route === '/') {
        return null;
      }
      return (
        <Giscus
          // ensure giscus is reloaded when client side route is changed
          key={route}
          repo="Urigo/SOFA"
          repoId="MDEwOlJlcG9zaXRvcnkxNjA1NDIzMDU="
          category="Docs Discussions"
          categoryId="DIC_kwDOCZGuYc4CSDSU"
          mapping="pathname"
          theme={resolvedTheme}
        />
      );
    },
  },
});
