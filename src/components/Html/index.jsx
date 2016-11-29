import React, { PropTypes } from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';

const Html = ({ assets, component }) => {
  const content = component ? renderToString(component) : '';
  const head = Helmet.rewind();
  const showAnalytics = process.env.DEPLOY === "true" ? head.script.toComponent() : () => {};
  return (
    <html {...head.htmlAttributes.toComponent()}>
      <head>
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {showAnalytics}
      </head>
      <body data-spy="scroll" data-target=".navbar" data-offset="50">
        <div dangerouslySetInnerHTML={{ __html: content }} id='content'></div>
        <script charSet='UTF-8' src={`/${assets.main}`} ></script>
      </body>
    </html>
  )
};

Html.propTypes = {
  assets: PropTypes.object.isRequired,
  component: PropTypes.node.isRequired
};

export default Html
