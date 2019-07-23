import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import BusinessSingleView from '../../../client/app/bundles/FullStackApp/components/businessComponents/BusinessSingleView';
import FullStackApp from '../../../client/app/bundles/FullStackApp/components/FullStackApp';
import '../setupTests';

describe('FulLStackApp component', () => {
  describe('<FullStackApp> renders', () => {
    it('renders', () => {
      expect(FullStackApp).toBe(FullStackApp);
    });
  });

  it('should render correctly <BusinessSingleView>', () => {
    const mockStore = configureStore();
    const store = mockStore({
      business: {
        name: 'Mock Title',
        shortdesc: 'Test short desc',
        longdesc: 'Test long desc',
        founded: '1994-10-10'
      },
      loading: false
    });
    const wrapper = mount(
      <Provider store={store}>
        <BusinessSingleView />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
