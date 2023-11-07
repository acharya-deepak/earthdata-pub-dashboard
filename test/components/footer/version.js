'use strict';

import test from 'ava';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import { shallow, configure } from 'enzyme';

import Footer from '../../../app/src/js/components/Footer/footer.js';

configure({ adapter: new Adapter() });

test('Earthdata Pub API Version is not shown on the dashboard when not logged in', function (t) {
  const api = { };
  const apiVersion = {
    versionNumber: '1.11.0',
    warning: '',
    isCompatible: true
  };

  const footerWrapper = shallow(
    <Footer
      api={api}
      apiVersion={apiVersion}
    />
  );

  t.false(footerWrapper.exists('.api__version'));
});

test('Earthdata Pub API Version is shown on the dashboard', function (t) {
  const api = { authenticated: true };
  const apiVersion = {
    versionNumber: '1.11.0',
    warning: '',
    isCompatible: true
  };

  const footerWrapper = shallow(
    <Footer
      api={api}
      apiVersion={apiVersion}
    />
  );

  const apiVersionNumber = footerWrapper.find('[className="api__version"]');
  t.is(`Earthdata Pub API Version: ${apiVersion.versionNumber}`, apiVersionNumber.text());
  const hasApiWarning = footerWrapper.hasClass('api__warning');
  t.false(hasApiWarning);
});

test('Warning is shown when Earthdata Pub API Version is not compatible with dashboard', function (t) {
  const api = { authenticated: true };
  const apiVersion = {
    versionNumber: '1.0.0',
    warning: 'This is a warning',
    isCompatible: false
  };

  const footerWrapper = shallow(
    <Footer
      api={api}
      apiVersion={apiVersion}
    />
  );

  const apiWarning = footerWrapper.find('[className="api__warning"]');
  const hasApiWarning = apiWarning.hasClass('api__warning');
  t.true(hasApiWarning);
  t.is(`Warning: ${apiVersion.warning}`, apiWarning.text());
});
