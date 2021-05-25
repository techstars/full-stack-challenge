import * as rtl from '@testing-library/react';
import axiosMock from "axios";
import axios from 'axios';
// import "jest-dom/extend-expect";
import CompanyCard from './CompanyCard';


afterEach(rtl.cleanup);

it('fetch and display data', async () => {
    // const promise = Promise.resolve()
    // const mockAxios = axiosMock.get.mockResolvedValueOnce({ data: { data: [] } })
    // console.log('MOCK', mockAxios)
    // const url = 'http://localhost:3001/companies'
    const { getByTestId, getByText } = rtl.render(<CompanyCard />)

    // rtl.fireEvent.click(getByText("Get List of Companies"));


    // expect(getByTestId("get-companies-button"))
    // const resolvedCard = await waitFor(() => {
    //     expect(act(() => getByTestId('companies-card-rendered')))
    // })

    // console.log('RESOLVED CARD', resolvedCard)

    // act(() => expect(axiosMock.get).toHaveBeenCalledTimes(1));
    // act(() => expect(axiosMock.get).toHaveBeenCalledWith(url));
    // act(() => expect(resolvedCard).toEqual(expect.objectContaining([
    //     expect.objectContaining({ id: 1 })
    // ])))
    // await act(() => { promise })
})

// test('click to fetch and display data', async () => {
//     const wrapper = rtl.render(<CompanyCard />)
//     await wrapper.findAllByTestId('companies-card-rendered')
//     const result = 'http://localhost:3001/companies'

//     const getCompanies = wrapper.getByText("Get List of Companies")

//     rtl.act(() => {
//         rtl.fireEvent.click(getCompanies);
//     })

//     await wrapper.findAllByTestId('companies-card-rendered')

//     return expect(axiosMock.get).toHaveBeenLastCalledWith(result)
// })

