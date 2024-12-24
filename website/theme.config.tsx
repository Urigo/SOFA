/* eslint sort-keys: error */
import { defineConfig, Giscus, PRODUCTS, useTheme } from '@theguild/components';
import { useRouter } from 'next/router';

export default defineConfig({
  description: 'Generate RESTful APIs from your GraphQL schema',
  docsRepositoryBase: 'https://github.com/Urigo/SOFA/tree/master/website',
  main({ children }) {
    const { resolvedTheme } = useTheme();
    const { route } = useRouter();

    const comments = route !== '/' && (
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
    return (
      <>
        {children}
        {comments}
      </>
    );
  },
  // @ts-expect-error - Typings are not correct
  logo: PRODUCTS.SOFA.logo({ className: 'w-8' }),
  websiteName: 'SOFA',
});
