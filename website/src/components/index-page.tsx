import { ReactElement } from 'react';
import { HeroGradient, InfoList } from '@theguild/components';

export function IndexPage(): ReactElement {
  return (
    <>
      <HeroGradient
        title="Sofa API"
        description="Now you can Rest with Sofa"
        link={{
          href: '/docs',
          children: 'View Docs',
          title: 'Now you can Rest with Sofa',
        }}
        colors={['#37a9e1', '#e434ab']}
      />

      <InfoList
        items={[
          {
            title: 'Fully RESTful API',
            description:
              'Sofa takes your GraphQL Schema, looks for available queries, mutations and subscriptions and turns all of that into REST API.',
          },
          {
            title: 'Easy To Use',
            description:
              'Setup Sofa within a single line of code and start using REST API right away.',
          },
          {
            title: 'Let`s Work Together',
            description:
              'We want to hear from you, our community of fellow engineers, come to be collaborators.',
          },
        ]}
      />
    </>
  );
}
