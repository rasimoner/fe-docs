import { countryList } from "@doubco/countries";
export default eventHandler(async (event) => {
    const body = await readBody(event);
    const {country} = body;
    if (!country) return {
        status: 400,
        message: "No Results"
    }
    return {
        countries: countryList.filter(x=>x.label.includes(country))
    }
})