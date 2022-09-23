import { withGuildDocs } from '@theguild/components/next.config';

export default withGuildDocs({
  basePath:
    process.env.NEXT_BASE_PATH && process.env.NEXT_BASE_PATH !== ''
      ? process.env.NEXT_BASE_PATH
      : undefined,
  images: {
    unoptimized: true, // doesn't work with `next export`
    allowFutureImage: true,
  },
  redirects: () =>
    Object.entries({}).map(([from, to]) => ({
      source: from,
      destination: to,
      permanent: true,
    })),
});
