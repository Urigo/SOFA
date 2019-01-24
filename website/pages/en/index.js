/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">Now you can REST with Sofa ;)</h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

const Button = props => (
  <div className="pluginWrapper buttonWrapper">
    <a className="button" href={props.href} target={props.target}>
      Documentation
    </a>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('')}>Get started</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Highlights = () => {
  return (
    <div className="highlights">
      <div className="feature">
        <div className="title">Just copy this code</div>
        <div className="text">
          The best way to create REST APIs (is GraphQL) The most basic integrate
          in one step only.
        </div>
        <div className="links">
          <a href="" className="link">
            Getting started
          </a>
          <a href="" className="link">
            Copy
          </a>
        </div>
      </div>
      <div className="feature">
        <div className="title">Integrate Sofa</div>
        <div className="text">
          Sofa takes your GraphQL Schema, looks for available queries, mutations
          and subscriptions and turns all of that into REST API.
        </div>
        <div className="links">
          <a href="" className="link">
            Installation
          </a>
          <a href="" className="link">
            How it works?
          </a>
        </div>
      </div>
      <div className="feature">
        <div className="title">Let's work together</div>
        <div className="text">
          We want to hear from you, our community of fellow engineers, come to
          be collaborators.
        </div>
        <div className="links">
          <a href="" className="link">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

const Animation = () => {
  return (
    <div className="animation-container">
      <iframe
        src={'/animation/'}
        style={{
          width: '100vw',
          height: '100vh',
        }}
      />
    </div>
  );
};

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;

    return (
      <React.Fragment>
        <Animation />
        {/* <HomeSplash siteConfig={siteConfig} language={language} /> */}
        <div className="mainContainer">
          <div className="contentWrapper">
            <h2 className="title">Get Started</h2>
            <Highlights />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

module.exports = Index;
