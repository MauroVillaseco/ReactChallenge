import elements from '../../store/reducers'

describe('elements reducer', () => {
    const array =  {elements : [ { 
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
        }]}

    const arrayChanged =  {elements: [{ 
        cell: "0799-885-337",
        dob: {date: "1953-01-14T17:15:09.711Z", age: 67},
        email: "maurovillaseco@gmail.com",
        gender: "female",
        id: {name: "NINO", value: "LW 13 37 28 V"},
        location: {city: "Mar del Plata", state: "Buenos Aires", country: "United Kingdom", postcode: "MJ4 8RU"},
        login: {uuid: "f1bf3f28-a8cb-455c-84b9-27283675f1fe", username: "organiccat533", password: "reilly", salt: "GYRtxXWr", md5: "73e5771639ee6fe09a1ab1c2db6f872b"},
        name: {title: "Ms", first: "Pablo", last: "Gomez"},
        nat: "GB",
        phone: "11111111",
        picture: {large: "https://randomuser.me/api/portraits/women/23.jpg", medium: "https://randomuser.me/api/portraits/med/women/23.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/23.jpg"},
        registered: {date: "2011-02-09T01:21:49.415Z", age: 9}
    }]}

    it('should return the initial state', () => {        
      expect(elements(undefined, {})).toEqual({"elements": []})
    })
  
    it('should handle EDIT_USER', () => {
      expect(
        elements(array, {
          type: 'EDIT_USER',
          identifier: 'vicky.burns@example.com',
          newValues: {
            first: 'Pablo',
            last: 'Gomez',
            email: 'maurovillaseco@gmail.com',
            phone: '11111111',
            city: 'Mar del Plata',
            state: 'Buenos Aires',
          }
        })
      ).toEqual(arrayChanged)
    })
  })