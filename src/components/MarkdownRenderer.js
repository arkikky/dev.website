import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown className="ca25MarkdwnFrmattd text-balance">
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
