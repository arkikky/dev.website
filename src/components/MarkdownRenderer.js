import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownRenderer = ({ content }) => {
  return <ReactMarkdown className='ca25MarkdwnFrmattd'>{content}</ReactMarkdown>;
};

export default MarkdownRenderer;
