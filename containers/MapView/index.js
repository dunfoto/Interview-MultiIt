import React from "react"
import { useState } from "react"
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const MapViewComponent = React.memo(props => {
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            region={region}
            onRegionChange={data => setRegion(data)}
            style={{
                height: "100%"
            }}
        />
    )
})

export default MapViewComponent