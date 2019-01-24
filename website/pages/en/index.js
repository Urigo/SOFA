/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const Highlights = props => {
  return (
    <div className="highlights">
      <div className="feature">
        <div className="title">Fully RESTful API</div>
        <div className="text">
          Sofa takes your GraphQL Schema, looks for available queries, mutations
          and subscriptions and turns all of that into REST API.
        </div>
        <div className="links">
          <a href="/docs" className="link">
            Getting started
          </a>
        </div>
      </div>
      <div className="feature">
        <div className="title">Easy to use</div>
        <div className="text">
          Setup Sofa within a single line of code and start using REST API right
          away.
        </div>
        <div className="links">
          <a href="/docs/#installation" className="link">
            Installation
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
          <a href={props.siteConfig.repoUrl} className="link">
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
      <iframe src={'/animation/'} />
    </div>
  );
};

const Import = props => {
  return (
    <div>
      <span className="gray">import</span>{' '}
      <span className="blue">{props.name}</span>{' '}
      <span className="gray">from</span>{' '}
      <span className="pink">{props.source}</span>
    </div>
  );
};

const Comment = props => {
  return <div className="faded">// {props.value}</div>;
};

const UseExpress = () => {
  return (
    <div>
      <span className="gray">const</span> <span className="blue">app</span>{' '}
      <span className="gray">=</span> <span className="pink">express</span>
      <span className="gray">();</span>
    </div>
  );
};

const UseSofa = () => {
  return (
    <div>
      <span className="blue">app</span>
      <span className="gray">.</span>
      <span className="pink">use</span>
      <span className="gray">(</span>
      <span className="pink">sofa</span>
      <span className="gray">{'({ '}</span>
      <span className="gray">schema</span>
      <span className="gray">{' }));'}</span>
    </div>
  );
};

const Line = () => {
  return (
    <div
      style={{
        width: '100%',
        height: 18,
      }}
    />
  );
};

const Code = () => {
  return (
    <div className="code-snippet">
      <Import name="sofa" source="sofa-api" />
      <Import name="express" source="express" />
      <Line />
      <UseExpress />
      <Line />
      <UseSofa />
      <Line />
      <Comment value="GET /users" />
      <Comment value="GET /messages" />
    </div>
  );
};

class Index extends React.Component {
  render() {
    const { config: siteConfig } = this.props;

    return (
      <React.Fragment>
        <Animation />
        <div className="mainContainer">
          <div className="contentWrapper">
            <h2 className="title">Get Started</h2>
            <Highlights siteConfig={siteConfig} />
            <Code />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

module.exports = Index;
