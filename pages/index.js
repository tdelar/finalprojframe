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
import SideBarZip from "../components/SideBarZip";

import {
  countyChloroRentOneBedroom,
  zipChloroCost,
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
  countyChloroOneBedroom,
} from "../mapstyles/map-styles.js";

const chloroOptions = [
  { id: 1, name: "population" },
  { id: 2, name: "Median home Value" },
  { id: 3, name: "Median Rent Value" },
];

const boundarieoptions = [
  { id: 1, name: "County        " },
  { id: 2, name: "Zip Code      " },
];

export default function Home() {
  const [valid, setValid] = useState(false);
  const [needsToBuy, setNeedsToBuy] = useState(false);
  const [user, setUser] = useState({});

  const [countyInfo, setCountyInfo] = useState(null);
  const [zipInfo, setZipInfo] = useState(null);
  const [blockInfo, setBlockInfo] = useState(null);

  const [selectedChloro, setSelectedChloro] = useState(chloroOptions[0]);
  const [selectedBoundarie, setSelectedBoundarie] = useState(
    boundarieoptions[0]
  );

  const arr = ["countyoutline", "zipoutline", "blockoutline"];

  const onClick = (event) => {
    console.log(event);
    console.log(event.features);
    console.log(event.features[0].properties);
    // console.log(event.features[0].properties);

    {
      selectedBoundarie.id == 1 && setCountyInfo(event.features[0].properties);
    }

    {
      selectedBoundarie.id == 2 && setZipInfo(event.features[0].properties);
    }

    {
      selectedBoundarie.id == 3 && setBlockInfo(event.features[0].properties);
    }

    // if (selectedBoundarie.id == 1) {
    //   setCountyInfo(event.features[0].properties);
    // }
    // if (selectedBoundarie.id == 2) {
    //   setZipInfo(event.features[0].properties);
    // }
  };

  console.log("chloro optoin");
  console.log(chloroOptions.id);
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
                onClick={onClick}
                mapboxAccessToken="pk.eyJ1IjoidG9tbXlkZWwiLCJhIjoiY2t4NW4xbG9zMmR2aTJ1cDJnM2xuemd6diJ9.9YwDOFlOAN7Yn6rXYTSt-w"
                interactiveLayerIds={[arr[selectedBoundarie.id - 1]]}
              >
                {/* population */}
                {selectedBoundarie.id == 1 && selectedChloro.id == 1 && (
                  <Source type="vector" url="mapbox://tommydel.cnm6nd5n">
                    <Layer beforeId="waterway-label" {...countyChloroPop} />

                    <Layer beforeId="waterway-label" {...countyOutline} />
                  </Source>
                )}
                {/* home value */}
                {selectedBoundarie.id == 1 && selectedChloro.id == 2 && (
                  <Source type="vector" url="mapbox://tommydel.cnm6nd5n">
                    <Layer
                      beforeId="waterway-label"
                      {...countyChloroOneBedroom}
                    />

                    <Layer beforeId="waterway-label" {...countyOutline} />
                  </Source>
                )}
                {/* rent value */}
                {selectedBoundarie.id == 1 && selectedChloro.id == 3 && (
                  <Source type="vector" url="mapbox://tommydel.cnm6nd5n">
                    <Layer
                      beforeId="waterway-label"
                      {...countyChloroRentOneBedroom}
                    />

                    <Layer beforeId="waterway-label" {...countyOutline} />
                  </Source>
                )}

                {selectedBoundarie.id == 2 && selectedChloro.id == 1 && (
                  <Source type="vector" url="mapbox://tommydel.59v1tlyf">
                    <Layer beforeId="waterway-label" {...zipOutline} />
                  </Source>
                )}

                {selectedBoundarie.id == 2 && selectedChloro.id == 2 && (
                  <Source type="vector" url="mapbox://tommydel.59v1tlyf">
                    <Layer beforeId="waterway-label" {...zipChloroCost} />
                    <Layer beforeId="waterway-label" {...zipOutline} />
                  </Source>
                )}

                {selectedBoundarie.id == 2 && selectedChloro.id == 3 && (
                  <Source type="vector" url="mapbox://tommydel.59v1tlyf">
                    <Layer beforeId="waterway-label" {...zipChloro} />
                    <Layer beforeId="waterway-label" {...zipOutline} />
                  </Source>
                )}
              </Map>
            </div>
            <div className="col-span-3 overflow-auto h-screen">
              {selectedBoundarie.id == 1 && (
                <SideBar info={countyInfo}></SideBar>
              )}

              {selectedBoundarie.id == 2 && (
                <SideBarZip info={zipInfo}></SideBarZip>
              )}
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
