import CurrentLocationWeather from './CurrentLocationWeather.mjs';
import { UserSearchWeather } from './SpecifiedLocation.mjs';

const myCurrentlocationWeather = new CurrentLocationWeather();
const searchResult = new UserSearchWeather

myCurrentlocationWeather.start()
searchResult.start()