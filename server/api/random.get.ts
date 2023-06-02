import { countryList } from "@doubco/countries";
export default eventHandler(async (event) => {
    return {
        random: countryList[Math.floor(Math.random() * countryList.length)]
    }
})