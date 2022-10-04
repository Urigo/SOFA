/* eslint sort-keys: error */
import { SofaLogo, defineConfig } from '@theguild/components';

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
});
