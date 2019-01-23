/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer id="footer">
        <div className="footer-container">
          <div>
            <a href={this.props.config.baseUrl} className="footer-logo">
              {this.props.config.footerIcon && (
                <img
                  src={this.props.config.baseUrl + this.props.config.footerIcon}
                  alt={this.props.config.title}
                />
              )}
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/UriGoldshtein"
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </a>
            <span className="footer-link-separator">&middot;</span>
            <a href="https://medium.com/the-guild">Medium</a>
            <span className="footer-link-separator">&middot;</span>
            <a href="https://github.com/Urigo/sofa">Github</a>
          </div>
          <div>{this.props.config.copyright}</div>
        </div>
      </footer>
    );
    // return (
    //   <footer className="nav-footer" id="footer">
    //     <section className="sitemap">
    //       <a href={this.props.config.baseUrl} className="nav-home">
    //         {this.props.config.footerIcon && (
    //           <img
    //             src={this.props.config.baseUrl + this.props.config.footerIcon}
    //             alt={this.props.config.title}
    //             width="66"
    //             height="58"
    //           />
    //         )}
    //       </a>
    //       <div>
    //         <h5>Documentation</h5>
    //         <a href={this.docUrl('', this.props.language)}>
    //           Getting Started
    //         </a>
    //       </div>
    //       <div>
    //         <h5>Community</h5>
    //         <a href="https://spectrum.chat/sofa">Spectrum Chat</a>
    //         <a
    //           href="https://twitter.com/UriGoldshtein"
    //           target="_blank"
    //           rel="noreferrer noopener"
    //         >
    //           Twitter
    //         </a>
    //       </div>
    //       <div>
    //         <h5>More</h5>
    //         <a href="https://medium.com/the-guild">Medium</a>
    //         <a href="https://github.com/Urigo/sofa">
    //           GitHub
    //         </a>
    //         <a
    //           className="github-button"
    //           href={this.props.config.repoUrl}
    //           data-icon="octicon-star"
    //           data-count-href="/Urigo/sofa/stargazers"
    //           data-show-count="true"
    //           data-count-aria-label="# stargazers on GitHub"
    //           aria-label="Star this project on GitHub"
    //         >
    //           Star
    //         </a>
    //       </div>
    //     </section>

    //     <section className="copyright">{this.props.config.copyright}</section>
    //   </footer>
    // );
  }
}

module.exports = Footer;
