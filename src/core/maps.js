/* leny/enigjewo
 *
 * /src/core/maps.js - Maps utils
 *
 * coded by leny@BeCode
 * started at 04/02/2021
 */

import axios from "axios";

import europeanUnion from "url:maps/european-union.geojson";
import europaWithoutRussia from "url:maps/europe-without-russia.geojson";
import asia from "url:maps/asia.geojson";
import europa from "url:maps/europa.geojson";
import oceania from "url:maps/oceania.geojson";
import africa from "url:maps/africa.geojson";
import northAmerica from "url:maps/north-america.geojson";
import southAmerica from "url:maps/south-america.geojson";
import unesco from "url:maps/unesco.geojson";
import belgium from "url:maps/belgium.geojson";
import france from "url:maps/france.geojson";
import germany from "url:maps/germany.geojson";
import iceland from "url:maps/iceland.geojson";
import russia from "url:maps/russia.geojson";
import uk from "url:maps/united-kingdom.geojson";
import usa from "url:maps/usa.geojson";
import china from "url:maps/china.geojson";
import japan from "url:maps/japan.geojson";
import india from "url:maps/india.geojson";
import brazil from "url:maps/brazil.geojson";
import canada from "url:maps/canada.geojson";
import argentina from "url:maps/argentina.geojson";
import mexico from "url:maps/mexico.geojson";
import sweden from "url:maps/sweden.geojson";
import stockholm from "url:maps/stockholm.geojson";
import pitea from "url:maps/pitea.geojson";
import biggestCities from "url:maps/biggest-cities.geojson";
import inferno from "url:maps/inferno.geojson";
import world_cities from "url:maps/world_cities.geojson";

export const maps = {
    // --- areas
    world: {label: "🗺️ World", data: null},
    europeanUnion: {label: "🇪🇺 European Union", data: europeanUnion},
    europaWithoutRussia: {
        label: "🌍 Europa (without Russia)",
        data: europaWithoutRussia,
    },
    // --- continents
    africa: {label: "🌍 Africa", data: africa},
    asia: {label: "🌏 Asia", data: asia},
    europa: {label: "🌍 Europa", data: europa},
    northAmerica: {label: "🌎 North America", data: northAmerica},
    oceania: {label: "🌏 Oceania", data: oceania},
    southAmerica: {label: "🌎 South America", data: southAmerica},
    // --- countries
    argentina: {label: "🇦🇷 Argentina", data: argentina},
    belgium: {label: "🇧🇪 Belgium", data: belgium},
    brazil: {label: "🇧🇷 Brazil", data: brazil},
    canada: {label: "🇨🇦 Canada", data: canada},
    china: {label: "🇨🇳 China", data: china},
    france: {label: "🇫🇷 France", data: france},
    germany: {label: "🇩🇪 Germany", data: germany},
    iceland: {label: "🇮🇸 Iceland", data: iceland},
    india: {label: "🇮🇳 India", data: india},
    japan: {label: "🇯🇵 Japan", data: japan},
    mexico: {label: "🇲🇽 Mexico", data: mexico},
    russia: {label: "🇷🇺 Russia", data: russia},
    sweden: {label: "🇸🇪 Sweden", data: sweden},
    uk: {label: "🇬🇧 United Kingdom", data: uk},
    usa: {label: "🇺🇸 USA", data: usa},
    // --- cities
    world_cities: {
        //Credit: https://github.com/drei01/geojson-world-cities
        label: "🏙️ Urban - 37 320 cities from around the world",
        data: world_cities,
    },
    stockholm: {label: "🏙️ Stockholm urban", data: stockholm},
    pitea: {label: "🏙️ Piteå", data: pitea},
    biggestCities: {
        label: "🏙 Biggest Cities (40 biggest cities of the world)",
        data: biggestCities,
    },
    inferno: {
        label:
            "🔥 Inferno - two complex cities - Santa Cruz de la Sierra (Bolivia) & Touba (Senegal)",
        data: inferno,
    },
    // --- misc
    unesco: {label: "🗿 Unesco (World Heritage List)", data: unesco},
};

export const groups = {
    areas: {
        label: "Areas",
        maps: ["world", "europeanUnion", "europaWithoutRussia"],
    },
    continents: {
        label: "Continents",
        maps: [
            "africa",
            "asia",
            "europa",
            "northAmerica",
            "oceania",
            "southAmerica",
        ],
    },
    countries: {
        label: "Countries",
        maps: [
            "argentina",
            "belgium",
            "brazil",
            "canada",
            "china",
            "france",
            "germany",
            "iceland",
            "india",
            "japan",
            "mexico",
            "sweden",
            "russia",
            "uk",
            "usa",
        ],
    },
    cities: {
        label: "Cities",
        maps: [
            "biggestCities",
            "inferno",
            "stockholm",
            "pitea",
            "world_cities",
        ],
    },
    misc: {
        label: "Misc.",
        maps: ["unesco"],
    },
};

const cache = new Map();

export const loadGeoJSON = async map => {
    if (cache.has(map)) {
        return cache.get(map);
    }
    const {data: geoJSON} = await axios.get(maps[map].data, {
        responseType: "json",
    });
    cache.set(map, geoJSON);
    return geoJSON;
};
