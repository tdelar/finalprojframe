import Map, { Popup, Source, Layer } from "react-map-gl";
import { useState } from "react";

// export default function Home() {
//   return (
//     <div>
//       <div className="w-full h-screen">
//         <p className="bg-slate-600">hello</p>
//         <Map
//           initialViewState={{
//             longitude: -100,
//             latitude: 40,
//             zoom: 3.5,
//           }}
//           style={{ width: "100%", height: "100%" }}
//           mapStyle="mapbox://styles/tommydel/ckxtiulcb0onh14mv11y5yufe"
//           mapboxAccessToken="pk.eyJ1IjoidG9tbXlkZWwiLCJhIjoiY2t4NW4xbG9zMmR2aTJ1cDJnM2xuemd6diJ9.9YwDOFlOAN7Yn6rXYTSt-w"
//         ></Map>
//       </div>
//     </div>
//   );
// }

import NewHeader from "../components/NewHeader";
import SideBar from "../components/SideBar";

import {
  blockChloro,
  blockOutline,
  zipOutline,
  zipChloro,
  countyChloroRent_50_1,
  countyChloroMedianIncome,
  countyChloroP1,
  countyChloroPop,
  countyOutline,
  updatedRentLayer,
  zipLayer,
  rentChloroLayer,
  zipChloroLayer,
} from "../mapstyles/map-styles.js";

const chloroOptions = [
  { id: 1, name: "population" },
  { id: 2, name: "Median home Value" },
  { id: 3, name: "Median Rent Value" },
  { id: 4, name: "Median Income" },
  { id: 5, name: "poverty rate" },
];

const boundarieoptions = [
  { id: 1, name: "County        " },
  { id: 2, name: "Zip Code      " },
  { id: 3, name: "Census Block  " },
];

export default function Home() {
  const [selectedChloro, setSelectedChloro] = useState(chloroOptions[0]);
  const [selectedBoundarie, setSelectedBoundarie] = useState(
    boundarieoptions[0]
  );

  return (
    <div>
      <div className="overscroll-y-hidden">
        <div>
          <NewHeader
            selectedBoundarie={selectedBoundarie}
            setSelectedBoundarie={setSelectedBoundarie}
            boundarieoptions={boundarieoptions}
            selected={selectedChloro}
            setSelected={setSelectedChloro}
            chloroOptions={chloroOptions}
          ></NewHeader>
          <div className="w-full h-screen grid grid-cols-12">
            <div className="h-full w-full col-span-9">
              <Map
                initialViewState={{
                  longitude: -100,
                  latitude: 40,
                  zoom: 3.5,
                }}
                style={{ width: "100%", height: "100%" }}
                mapStyle="mapbox://styles/tommydel/ckxtiulcb0onh14mv11y5yufe"
                // onClick={onClick}
                mapboxAccessToken="pk.eyJ1IjoidG9tbXlkZWwiLCJhIjoiY2t4NW4xbG9zMmR2aTJ1cDJnM2xuemd6diJ9.9YwDOFlOAN7Yn6rXYTSt-w"
                // interactiveLayerIds={[arr[selectedBoundarie.id - 1]]}
              >
                <Source type="vector" url="mapbox://tommydel.cnm6nd5n">
                  <Layer beforeId="waterway-label" {...countyChloroPop} />
                  <Layer beforeId="waterway-label" {...countyOutline} />
                </Source>

                {/* {selectedBoundarie.id == 2 && (
                  <Source type="vector" url="mapbox://tommydel.59v1tlyf">
                    <Layer beforeId="waterway-label" {...zipChloro} />
                    <Layer beforeId="waterway-label" {...zipOutline} />
                  </Source>
                )}
                {selectedBoundarie.id == 3 && (
                  <Source type="vector" url="mapbox://tommydel.cotrfq4i">
                    <Layer beforeId="waterway-label" {...blockChloro} />
                    <Layer beforeId="waterway-label" {...blockOutline} />
                  </Source>
                )} */}
              </Map>
            </div>
            <div className="col-span-3 overflow-auto h-screen">
              {/* {selectedBoundarie.id == 1 && (
                <SideBar info={countyInfo}></SideBar>
              )}

              {selectedBoundarie.id == 2 && (
                <SideBarZip info={zipInfo}></SideBarZip>
              )}

              {selectedBoundarie.id == 3 && (
                <SideBarBlock info={blockInfo}></SideBarBlock>
              )} */}
              <SideBar info={null}></SideBar>
            </div>
          </div>

          {/* <div className="col-span-3 overflow-auto h-screen">
        =<SideBar info={null}></SideBar>
      </div> */}
        </div>
      </div>
    </div>
  );
}
