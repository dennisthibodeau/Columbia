import React, { useState } from "react";
import { geoCentroid } from "d3-geo";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  ComposableMap,
  Geographies,
  Marker,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

import allStates from "./allstates.json";
import Geo from "./Geo";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21],
};

const MapInfo = () => {
  const [parks, setParks] = useState([]);
  const [color, setColor] = useState("f0f0f0");

  React.useEffect(async () => {
    await fetch("/parks/")
      .then((res) => res.json())
      .then((data) => {
        const filteredStates = data.data.filter((elem) =>
          allStates.find(({ id }) => elem.states === id)
        );

        setParks(filteredStates);
      });
  }, []);

  return (
    <Container>
      <ComposableMap projection="geoAlbersUsa">
        <ZoomableGroup zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) => (
              <>
                {geographies.map((geo) => {
                  return <Geo geo={geo} />;
                })}
                {geographies.map((geo) => {
                  const centroid = geoCentroid(geo);
                  const cur = allStates.find((s) => s.val === geo.id);
                  return (
                    <g key={geo.rsmKey + "-name"}>
                      {cur &&
                        centroid[0] > -160 &&
                        centroid[0] < -67 &&
                        (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                          <Link
                            to={{
                              pathname: "/singlestate",
                              myProps: { stateName: cur.id },
                            }}
                          >
                            <Marker coordinates={centroid}>
                              <text y="2" fontSize={16} textAnchor="middle">
                                {cur.id}
                              </text>
                            </Marker>
                          </Link>
                        ) : (
                          <Link
                            to={{
                              pathname: "/singlestate",
                              myprops: { stateName: cur.id },
                            }}
                          >
                            <Annotation
                              subject={centroid}
                              dx={offsets[cur.id][0]}
                              dy={offsets[cur.id][1]}
                            >
                              <text
                                x={4}
                                fontSize={16}
                                alignmentBaseline="middle"
                              >
                                {cur.id}
                              </text>
                            </Annotation>
                          </Link>
                        ))}
                    </g>
                  );
                })}
              </>
            )}
          </Geographies>

          {parks.length > 0 &&
            parks.map((park) => (
              <Marker
                key={park.longitude + park.latitude}
                coordinates={[park.longitude, park.latitude]}
              >
                <circle r={3} fill="rgba(0,0,0,0.5)" />
              </Marker>
            ))}
        </ZoomableGroup>
      </ComposableMap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(50%, 0%);
`;

const MapText = styled.div``;
export default MapInfo;
