/* leny/enigjewo
 *
 * /src/components/commons/street-view.js - Common Component: Google StreetView
 *
 * coded by leny@BeCode
 * started at 04/02/2021
 */

/* global google */

import "styles/game.scss";

import {useRef, useEffect, forwardRef} from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

const StreetView = forwardRef(
    ({className, panorama, options = {}}, streetView) => {
        const box = useRef(null);

        useEffect(() => {
            if (streetView.current || !box.current) {
                return;
            }

            streetView.current = new google.maps.StreetViewPanorama(
                box.current,
                {
                    addressControl: false,
                    fullscreenControl: false,
                    motionTracking: false,
                    motionTrackingControl: false,
                    showRoadLabels: false,
                    panControl: true,
                    ...options,
                },
            );

            streetView.current.setPano(panorama);
            streetView.current.setPov({
                heading: 270,
                pitch: 0,
            });
            streetView.current.setZoom(0);
        }, [box, streetView.current, panorama, options]);

        return <div className={classnames(className, "expand")} ref={box} />;
    },
);

StreetView.propTypes = {
    panorama: PropTypes.string.isRequired,
    options: PropTypes.object,
};

export default StreetView;
