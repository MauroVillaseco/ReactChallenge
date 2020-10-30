import * as actions from '../../store/actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [thunk]
import fetchMock from 'fetch-mock'
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  it('should create an action to Sort an array', () => {
    const array =
    [
        { 
            cell: "0799-885-337",
            dob: {date: "1953-01-14T17:15:09.711Z", age: 67},
            email: "vicky.burns@example.com",
            gender: "female",
            id: {name: "NINO", value: "LW 13 37 28 V"},
            location: {city: "Bristol", state: "Humberside", country: "United Kingdom", postcode: "MJ4 8RU"},
            login: {uuid: "f1bf3f28-a8cb-455c-84b9-27283675f1fe", username: "organiccat533", password: "reilly", salt: "GYRtxXWr", md5: "73e5771639ee6fe09a1ab1c2db6f872b"},
            name: {title: "Ms", first: "Mauro", last: "Villaseco"},
            nat: "GB",
            phone: "016977 60434",
            picture: {large: "https://randomuser.me/api/portraits/women/23.jpg", medium: "https://randomuser.me/api/portraits/med/women/23.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/23.jpg"},
            registered: {date: "2011-02-09T01:21:49.415Z", age: 9}
        },
        {
            cell: "0799-885-337",
            dob: {date: "1953-01-14T17:15:09.711Z", age: 67},
            email: "vicky.burns@example.com",
            gender: "female",
            id: {name: "NINO", value: "LW 13 37 28 V"},
            location: {city: "Bristol", state: "Humberside", country: "United Kingdom", postcode: "MJ4 8RU"},
            login: {uuid: "f1bf3f28-a8cb-455c-84b9-27283675f1fe", username: "organiccat533", password: "reilly", salt: "GYRtxXWr", md5: "73e5771639ee6fe09a1ab1c2db6f872b"},
            name: {title: "Ms", first: "Valeria", last: "Moreno"},
            nat: "GB",
            phone: "016977 60434",
            picture: {large: "https://randomuser.me/api/portraits/women/23.jpg", medium: "https://randomuser.me/api/portraits/med/women/23.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/23.jpg"},
            registered: {date: "2011-02-09T01:21:49.415Z", age: 9}
        }       
    ];

    const expectedAction = {
      type: 'SORT_LIST',
      array
    }
    expect(actions.sortList(array)).toEqual(expectedAction)
  })
})