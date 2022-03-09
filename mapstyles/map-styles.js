export const blockOutline = {
  id: "blockoutline",
  type: "fill",
  "source-layer": "zipdata_1-8ca3al",
  paint: {
    "fill-outline-color": "rgba(0,0,0,1)",
    "fill-color": "rgba(0,0,0,0.2)",
  },
};

export const blockChloro = {
  id: "blockChloro",
  type: "fill",
  source: "blockOutline",
  "source-layer": "zipdata_1-8ca3al",
  paint: {
    "fill-color": {
      property: "one",
      stops: [
        [10, "#a7f3d0"],
        [300, "#5eead4"],
        [500, "#22d3ee"],
        [700, "#0ea5e9"],
        [800, "#2563eb"],
      ],
    },
    "fill-opacity": 0.6,
  },
};

export const zipOutline = {
  id: "zipoutline",
  type: "fill",
  "source-layer": "zipdata-03lh57",
  paint: {
    "fill-outline-color": "rgba(0,0,0,1)",
    "fill-color": "rgba(0,0,0,0.2)",
  },
};
//---------------------------------------------------------------
export const zipChloro = {
  id: "zipChloro",
  type: "fill",
  source: "zipOutline",
  "source-layer": "zipdata-03lh57",
  paint: {
    "fill-color": {
      property: "rentOneBedroom",
      stops: [
        [500, "#eff6ff"],
        [800, "#bfdbfe"],
        [1100, "#60a5fa"],
        [1500, "#2563eb"],
        [2000, "#1e40af"],
      ],
    },
    "fill-opacity": 0.6,
  },
};

export const zipChloroCost = {
  id: "zipChloro",
  type: "fill",
  source: "zipOutline",
  "source-layer": "zipdata-03lh57",
  paint: {
    "fill-color": {
      property: "onebedroom",
      stops: [
        [50000, "#eff6ff"],
        [100000, "#bfdbfe"],
        [200000, "#60a5fa"],
        [300000, "#2563eb"],
        [500000, "#1e40af"],
      ],
    },
    "fill-opacity": 0.6,
  },
};

export const countyOutline = {
  id: "countyoutline",
  type: "fill",
  "source-layer": "data5-9tkhtl",
  paint: {
    "fill-outline-color": "rgba(0,0,0,1)",
    "fill-color": "rgba(0,0,0,0.2)",
  },
};
//--------------------------------------------------------------------------------------------------------------------------------------------------
//done
export const countyChloroPop = {
  id: "countyChloroPop",
  type: "fill",
  source: "countyOutline",
  "source-layer": "data5-9tkhtl",
  paint: {
    "fill-color": {
      property: "pop",
      stops: [
        [10000, "#eff6ff"],
        [25000, "#bfdbfe"],
        [100000, "#60a5fa"],
        [250000, "#2563eb"],
        [500000, "#1e40af"],
      ],
    },
    "fill-opacity": 0.6,
  },
};

export const countyChloroOneBedroom = {
  id: "countyChloroPop",
  type: "fill",
  source: "countyOutline",
  "source-layer": "data5-9tkhtl",
  paint: {
    "fill-color": {
      property: "p1",
      stops: [
        [50000, "#eff6ff"],
        [100000, "#bfdbfe"],
        [200000, "#60a5fa"],
        [300000, "#2563eb"],
        [500000, "#1e40af"],
      ],
    },
    "fill-opacity": 0.6,
  },
};

export const countyChloroRentOneBedroom = {
  id: "countyChloroPop",
  type: "fill",
  source: "countyOutline",
  "source-layer": "data5-9tkhtl",
  paint: {
    "fill-color": {
      property: "rent_50_1",
      stops: [
        [500, "#eff6ff"],
        [800, "#bfdbfe"],
        [1100, "#60a5fa"],
        [1500, "#2563eb"],
        [2000, "#1e40af"],
      ],
    },
    "fill-opacity": 0.6,
  },
};

export const countyChloroP1 = {
  id: "countyChloroP1",
  type: "fill",
  source: "countyOutline",
  "source-layer": "data5-9tkhtl",
  paint: {
    "fill-color": {
      property: "p1",
      stops: [
        [100000, "#a7f3d0"],
        [200000, "#5eead4"],
        [400000, "#22d3ee"],
        [800000, "#0ea5e9"],
        [1200000, "#2563eb"],
      ],
    },
    "fill-opacity": 0.6,
  },
};

export const countyChloroMedianIncome = {
  id: "countyChloroMedianIncome",
  type: "fill",
  source: "countyOutline",
  "source-layer": "data5-9tkhtl",
  paint: {
    "fill-color": {
      property: "median_individual_income",
      stops: [
        [1000, "#fecaca"],
        [5000, "#f87171"],
        [25000, "#ef4444"],
        [100000, "#dc2626"],
        [1000000, "#b91c1c"],
      ],
    },
    "fill-opacity": 0.6,
  },
};

export const countyChloroRent_50_1 = {
  id: "countyChloroMedianIncome",
  type: "fill",
  source: "countyOutline",
  "source-layer": "data5-9tkhtl",
  paint: {
    "fill-color": {
      property: "rent_50_1",
      stops: [
        [500, "#a7f3d0"],
        [700, "#5eead4"],
        [900, "#22d3ee"],
        [1100, "#0ea5e9"],
        [1300, "#2563eb"],
      ],
    },
    "fill-opacity": 0.3,
  },
};

export const zipLayer = {
  id: "zipLayer",
  type: "fill",
  "source-layer": "data5-20lphs",
  paint: {
    "fill-outline-color": "rgba(0,0,0,1)",
    "fill-color": "rgba(0,0,0,0.2)",
  },
};

export const zipChloroLayer = {
  id: "zipChloro",
  type: "fill",
  source: "zipLayer",
  "source-layer": "data5-20lphs",
  paint: {
    "fill-color": {
      property: "ZIP_Code",
      stops: [
        [100, "#fecaca"],
        [700, "#f87171"],
        [900, "#ef4444"],
        [1100, "#dc2626"],
        [1300, "#b91c1c"],
      ],
    },
    "fill-opacity": 0.6,
  },
};

export const updatedRentLayer = {
  id: "updatedRentLayer",
  type: "fill",
  "source-layer": "data4-2zv9yh",
  paint: {
    "fill-outline-color": "rgba(0,0,0,1)",
    "fill-color": "rgba(0,0,0,0.2)",
  },
};

export const rentChloroLayer = {
  id: "xxxx",
  type: "fill",
  source: "updatedRentLayer",
  "source-layer": "data4-2zv9yh",
  paint: {
    "fill-color": {
      property: "rent_50_1",
      stops: [
        [500, "#fecaca"],
        [700, "#f87171"],
        [900, "#ef4444"],
        [1100, "#dc2626"],
        [1300, "#b91c1c"],
      ],
    },
    "fill-opacity": 0.6,
  },
};

export const popChloroLayer = {
  id: "xxxx",
  type: "fill",
  source: "updatedRentLayer",
  "source-layer": "data4-2zv9yh",
  paint: {
    "fill-color": {
      property: "pop2017",
      stops: [
        [500, "#fecaca"],
        [700, "#f87171"],
        [900, "#ef4444"],
        [1100, "#dc2626"],
        [1300, "#b91c1c"],
      ],
    },
    "fill-opacity": 0.8,
  },
};

export const newhighlightLayer = {
  id: "new-highlighted",
  type: "fill",
  source: "newLayer",
  "source-layer": "newdata-cdhqi7",
  paint: {
    "fill-outline-color": "#484896",
    "fill-color": "#6e599f",
    "fill-opacity": 0.75,
  },
};

export const chloroLayer = {
  id: "rent-highlighted",
  type: "fill",
  source: "rentLayer",
  "source-layer": "newdata-cdhqi7",
  paint: {
    "fill-color": {
      property: "price_to_rent",
      stops: [
        [0, "#3288bd"],
        [5, "#66c2a5"],
        [10, "#abdda4"],
        [15, "#e6f598"],
        [20, "#ffffbf"],
        [25, "#fee08b"],
        [30, "#fdae61"],
        [35, "#f46d43"],
        [40, "#d53e4f"],
      ],
    },
    "fill-opacity": 0.6,
  },
};

export const fourLayer = {
  id: "fourLayer",
  type: "fill",
  "source-layer": "data2-09rz9l",
  paint: {
    "fill-outline-color": "rgba(0,0,0,1)",
    "fill-color": "rgba(0,0,0,0)",
  },
};

export const fourChloroLayer = {
  id: "four-highlighted",
  type: "fill",
  source: "fourLayer",
  "source-layer": "data2-09rz9l",
  paint: {
    "fill-color": {
      property: "pop2017",
      stops: [
        [500, "#fecaca"],
        [700, "#f87171"],
        [900, "#ef4444"],
        [1100, "#dc2626"],
        [1300, "#b91c1c"],
      ],
    },
    "fill-opacity": 0.8,
  },
};

export const rent1layer = {
  id: "rent1",
  type: "fill",
  source: "fourLayer",
  "source-layer": "data2-09rz9l",
  paint: {
    "fill-color": {
      property: "rent_50_1",
      stops: [
        [500, "#fecaca"],
        [700, "#f87171"],
        [900, "#ef4444"],
        [1100, "#dc2626"],
        [1300, "#b91c1c"],
      ],
    },
    "fill-opacity": 0.8,
  },
};

export const poplayer = {
  id: "rent1",
  type: "fill",
  source: "fourLayer",
  "source-layer": "data2-09rz9l",
  paint: {
    "fill-color": {
      property: "pop2017",
      stops: [
        [500, "#fecaca"],
        [700, "#f87171"],
        [900, "#ef4444"],
        [1100, "#dc2626"],
        [1300, "#b91c1c"],
      ],
    },
    "fill-opacity": 0.8,
  },
};
