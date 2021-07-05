import axios from 'axios';

class get {

    // Get call with API Key
    // Parameters determine which image would show equating to a specific data of the photo
    static key(year, month, day) {
        return axios.get(`https://api.nasa.gov/planetary/apod?api_key=CxDUgYB3AG7MqsHtrGwSUaB3NgyMLiyLu4d4DfYZ&date=${year}-${month}-${day}`)
    }

    // Get call with DEMO_KEY
    // Parameters determine which image would show equating to a specific data of the photo
    static demo(year, month, day) {
        return axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${year}-${month}-${day}`)
    }
}

export default class NasaAPI{
    // Get call with API Key
    static fetchKey(year, month, day) {
        return get.key(year, month, day)
    }

    // Get call with DEMO_KEY
    static fetchDemo(year, month, day) {
        return get.demo(year, month, day)
    }
}