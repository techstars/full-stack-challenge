import { mount , shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import App from '../client/src/App';
import Company from '../client/src/components/Company';
import CompanyList from '../client/src/components/CompanyList';
import CompanyDetail from '../client/src/components/CompanyDetail';
import FounderForm from '../client/src/components/FounderForm';
import CompanyForm from '../client/src/components/CompanyForm';

import axios from 'axios';
jest.mock('axios');

const testCompanies =  [
      {
          _id: 1,
          name: 'Test Company 1',
          city: 'Denver',
          state: 'CO',
          founded: '2020-04-12',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          founders: [{name: 'Chris', title: 'CEO'}, {name: 'Bob', title: 'Test'}, {name: 'Bob', title: 'Test'},{name: 'Bob', title: 'Test'}],
      },
      {
          _id: 2,
          name: 'Test Company 2',
          city: 'Springfield',
          state: 'MO',
          founded: '2020-05-11',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          founders: [{name: 'Chris', title: 'CEO'}, {name: 'Bob', title: 'Test'}],
      },
      {
          _id: 3,
          name: 'Test Company 3',
          city: 'Kalispell',
          state: 'MT',
          founded: '2019-11-19',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          founders: [{name: 'Bob', title: 'Test'}],
      },
  ]

describe('<App /> component, ', () => {
  test('should render CompanyList component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('CompanyList').length).toBe(1);

  })

  test('should render CompanyForm component on Add Company button click', () => {
    axios.get.mockResolvedValue(testCompanies);

    const wrapper = mount(<App />);
    wrapper.update();

    wrapper.find('.add-btn').simulate('click');

    expect(wrapper.find('.company-form').length).toBe(1);
  })

  test('should make post request when CompanyForm is submitted', () => {
    axios.post.mockResolvedValue(null);

    const wrapper = mount(<App />);
    wrapper.update();

    wrapper.find('.add-btn').simulate('click');

    wrapper.find('input').at(0).simulate('change', { target: { value: 'Name' } });
    wrapper.find('input').at(1).simulate('change', { target: { value: 'City' } });
    wrapper.find('input').at(2).simulate('change', { target: { value: 'State' } });
    wrapper.find('input').at(3).simulate('change', { target: { value: 'Date' } });
    wrapper.find('textarea').at(0).simulate('change', { target: { value: 'Description' } });

    wrapper.find('.save-btn').at(1).simulate('click');

    expect(axios.post).toHaveBeenCalledWith('/companies', {"city": "City", "description": "Description", "founded": "Date", "name": "Name", "state": "State"});

  })
})

describe('<CompanyList /> component, ', () => {
  test('should render list of companies', () => {
    const wrapper = mount(<CompanyList companies={testCompanies} />);

    expect(wrapper.find('.company-wrapper').length).toBe(3);

  })

})

describe('<Company /> component, ', () => {

  test('should properly render company data', () => {
    const wrapper = mount(<Company data={testCompanies[0]}/>)

    let name = wrapper.find('.company-name');
    expect(name.text()).toBe(testCompanies[0].name)

    let location = wrapper.find('.company-location');
    expect(location.text()).toBe(`${testCompanies[0].city}, ${testCompanies[0].state}`)

    let more = wrapper.find('.more-link');
    expect(more.text()).toBe('more...')

    let desc = wrapper.find('.company-description');
    expect(desc.text()).toBe(testCompanies[0].description.substr(0,250) + '...')
  })

  test('should use setActive on clicked more link', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<Company data={testCompanies[0]} setActive={mockFn}/>)

    wrapper.find('.more-link').simulate('click');
    expect(mockFn.mock.calls.length).toBe(1);
  })

})

describe('<CompanyDetail /> component', () => {

  test('should properly render company data', () => {
    const mockFn = jest.fn()
    const wrapper = mount(<CompanyDetail company={testCompanies[0]} updateCompanies={mockFn}/>)

    let name = wrapper.find('.detail-name');
    expect(name.text()).toBe(testCompanies[0].name)

    let founded = wrapper.find('.detail-founded');
    let date = new Date(testCompanies[0].founded);
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    date = date.toLocaleString('en-US', options)
    expect(founded.text()).toBe(date)

    let location = wrapper.find('.detail-location');
    expect(location.text()).toBe(`${testCompanies[0].city}, ${testCompanies[0].state}`)

    let buttons = wrapper.find('.detail-btn');
    expect(buttons.at(0).text()).toBe('Edit');
    expect(buttons.at(1).text()).toBe('Delete');

    let desc = wrapper.find('.company-description');
    expect(desc.text()).toBe(testCompanies[0].description);
  })

  test('should display form on edit button click', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<CompanyDetail company={testCompanies[0]} updateCompanies={mockFn}/>)

    wrapper.find('.detail-btn').at(0).simulate('click');
    expect(wrapper.find('.company-form').length).toBe(1);

  })

  test('should handle company edit', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<CompanyDetail company={testCompanies[0]} updateCompanies={mockFn}/>)

    axios.put.mockResolvedValue(null);

    wrapper.find('.detail-btn').at(0).simulate('click');
    wrapper.find('.save-btn').at(1).simulate('click');

    expect(axios.put.mock.calls.length).toBe(1);
    expect(axios.put).toHaveBeenCalledWith(`/companies/${testCompanies[0]._id}`, {"city": "Denver", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "founded": "2020-04-11", "name": "Test Company 1", "state": "CO"})
  })

  test('should display delete options on delete button click', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<CompanyDetail company={testCompanies[0]} updateCompanies={mockFn}/>)

    wrapper.find('.detail-btn').at(1).simulate('click');

    expect(wrapper.find('.delete-confirmation').length).toBe(1);

    expect(wrapper.find('.delete-btn').text()).toBe('Yes')
    expect(wrapper.find('.cancel-delete-btn').text()).toBe('No')

  })

  test('should handle company delete', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<CompanyDetail company={testCompanies[0]} updateCompanies={mockFn}/>)

    axios.delete.mockResolvedValue(null);

    wrapper.find('.detail-btn').at(1).simulate('click');
    wrapper.find('.delete-btn').at(0).simulate('click');

    expect(axios.delete.mock.calls.length).toBe(1);
    expect(axios.delete).toHaveBeenCalledWith(`/companies/${testCompanies[0]._id}`)
  })

  test('should handle adding founder', () => {
    const wrapper = mount(<CompanyDetail company={testCompanies[0]} allCompanies={testCompanies}/>)

    axios.post.mockResolvedValue(null);

    wrapper.find('.add-founder-btn').simulate('click');
    wrapper.find('input').at(0).simulate('change', { target: { value: 'User' } });
    wrapper.find('input').at(1).simulate('change', { target: { value: 'Title' } });
    wrapper.find('.founder-form-btn').at(0).simulate('click');
    expect(axios.post).toHaveBeenCalledWith(`/founders/${testCompanies[0]._id}`,{name: 'User', title: 'Title'});
  })

  test('should handle founder form validation', () => {
    const wrapper = mount(<FounderForm />);

    wrapper.find('.founder-form-btn').at(0).simulate('click');
    expect(wrapper.find('.form-error-text').length).toBe(2)
    wrapper.find('input').at(0).simulate('change', { target: { value: 'User' } });
    expect(wrapper.find('.form-error-text').length).toBe(1)
    wrapper.find('input').at(1).simulate('change', { target: { value: 'Title' } });
    expect(wrapper.find('.form-error-text').length).toBe(0)
  })

})

describe('<CompanyForm /> component', () => {

  test('should handle form validation', () => {
    const wrapper = mount(<CompanyForm />);

    wrapper.find('.save-btn').at(1).simulate('click');
    expect(wrapper.find('.form-error-text').length).toBe(4)
  })

  test('should handle form submission', () => {
    const mockFnOne = jest.fn();
    const mockFnTwo = jest.fn();
    const wrapper = mount(<CompanyForm submit={mockFnOne} cancel={mockFnTwo}/>);

    wrapper.find('input').at(0).simulate('change', { target: { value: 'Name' } });
    wrapper.find('input').at(1).simulate('change', { target: { value: 'City' } });
    wrapper.find('input').at(2).simulate('change', { target: { value: 'State' } });
    wrapper.find('input').at(3).simulate('change', { target: { value: 'Date' } });
    wrapper.find('textarea').at(0).simulate('change', { target: { value: 'Description' } });

    wrapper.find('.save-btn').at(1).simulate('click');

    expect(mockFnOne).toHaveBeenCalledWith({"city": "City", "description": "Description", "founded": "Date", "name": "Name", "state": "State"});
  })
})