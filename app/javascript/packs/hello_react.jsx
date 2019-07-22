// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import FullStackApp from '../../../client/app/bundles/FullStackApp';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <FullStackApp />,
    document.body.appendChild(document.createElement('div'))
  );
});
