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
          <div className="footer-logo">
            <a href={this.props.config.baseUrl}>
              {this.props.config.footerIcon && (
                <img
                  src={this.props.config.baseUrl + this.props.config.footerIcon}
                  alt={this.props.config.title}
                />
              )}
            </a>
          </div>
          <div className="links">
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
          <div className="copyrights">{this.props.config.copyright}</div>
        </div>
      </footer>
    );
  }
}

module.exports = Footer;
