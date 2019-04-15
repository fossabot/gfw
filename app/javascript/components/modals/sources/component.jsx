import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import Modal from '../modal';

import './styles.scss';

class ModalSources extends PureComponent {
  parseContent(html) {
    return (
      <div>
        {ReactHtmlParser(html, {
          transform: node =>
            (node.name === 'a' ? (
              <a
                key={node.attribs.href}
                href={node.attribs.href}
                target="_blank"
                rel="noopener"
              >
                {node.children[0].data}
              </a>
            ) : (
              ''
            ))
        })}
      </div>
    );
  }

  getContent() {
    const { data: { body } } = this.props;

    return (
      <div className="c-modal-sources">
        <div className="body">{this.parseContent(body)}</div>
      </div>
    );
  }

  render() {
    const { open, setModalSources, data } = this.props;
    const lowerCaseTitle = data && data.title && data.title.toLowerCase();
    const formattedTitle = lowerCaseTitle
      ? `${lowerCaseTitle.charAt(0).toUpperCase()}${lowerCaseTitle.slice(1)}`
      : '';
    return (
      <Modal
        isOpen={open}
        contentLabel={`Sources: ${data && data.title}`}
        onRequestClose={() => setModalSources({ open: false })}
        title={formattedTitle}
      >
        {this.getContent()}
      </Modal>
    );
  }
}

ModalSources.propTypes = {
  open: PropTypes.bool,
  setModalSources: PropTypes.func,
  data: PropTypes.object
};

export default ModalSources;
