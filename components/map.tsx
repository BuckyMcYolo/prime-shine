"use client"

import React from "react"
import { GeoJson, Map, Marker } from "pigeon-maps"
import { stamenToner } from "pigeon-maps/providers"

const MapMarker = () => {
  const createGeoJsonCircle = (
    center: number[],
    radiusInKm: number,
    points = 64
  ) => {
    const coords = []
    // Earth's radius in kilometers
    const radiusEarthKm = 6371.01
    const radiusInRad = radiusInKm / radiusEarthKm
    const centerLatRad = (center[0] * Math.PI) / 180 // Convert center latitude to radians
    const centerLonRad = (center[1] * Math.PI) / 180 // Convert center longitude to radians

    for (let i = 0; i < points; i++) {
      const angle = ((i / points) * 360 * Math.PI) / 180 // Angle in radians
      const latitudeRad = Math.asin(
        Math.sin(centerLatRad) * Math.cos(radiusInRad) +
          Math.cos(centerLatRad) * Math.sin(radiusInRad) * Math.cos(angle)
      )
      const longitudeRad =
        centerLonRad +
        Math.atan2(
          Math.sin(angle) * Math.sin(radiusInRad) * Math.cos(centerLatRad),
          Math.cos(radiusInRad) - Math.sin(centerLatRad) * Math.sin(latitudeRad)
        )

      // Convert radians back to degrees
      const latitude = (latitudeRad * 180) / Math.PI
      const longitude = (longitudeRad * 180) / Math.PI
      coords.push([longitude, latitude])
    }
    coords.push(coords[0]) // Complete the circle

    return {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [coords],
          },
          properties: {},
        },
      ],
    }
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="max-w-[1000px] w-full">
        <Map
          //   provider={stamenToner}
          height={450}
          defaultCenter={[34.25807, -88.70464]}
          defaultZoom={9}
        >
          <Marker
            width={50}
            anchor={[34.25807, -88.70464]} // Using the same center for the marker
          />
          <GeoJson
            data={createGeoJsonCircle(
              [34.25807, -88.70464],
              // 20 miles in kilometers
              32.19
            )}
            styleCallback={(_: any, hover: any) => ({
              fill: "#d4e6ec99",
              strokeWidth: "2",
              stroke: "blue",
            })}
          />
        </Map>
      </div>
    </div>
  )
}

export default MapMarker
