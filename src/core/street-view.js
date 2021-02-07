/* leny/enigjewo
 *
 * /src/core/street-view.js - StreetView
 *
 * coded by leny@BeCode
 * started at 03/02/2021
 */

/* global google */

import {DEBUG} from "core/constants";
import {getRandomLatLng} from "core/geo-utils";

let service;

export const getRandomPanorama = geoJSON =>
    new Promise(resolve => {
        let getPanorama;

        (getPanorama = () => {
            (service ||= new google.maps.StreetViewService()).getPanorama(
                {
                    location: getRandomLatLng(geoJSON).position,
                    radius: 100000,
                    preference: "nearest",
                    source: "outdoor",
                },
                (data, status) => {
                    if (status !== "OK" || !data?.location) {
                        getPanorama();
                        return;
                    }

                    DEBUG &&
                        console.log("DEBUG:getRandomPanorama:", {
                            description: data.location.description,
                            panorama: data.location.pano,
                            position: data.location.latLng.toJSON(),
                        });

                    resolve({
                        panorama: data.location.pano,
                        position: data.location.latLng.toJSON(),
                    });
                },
            );
        })();
    });
