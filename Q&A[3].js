//Make a Normalized Difference Moisture Index (NDMI) map of your upazila
// by using Landsat 9 imagery for 2023. Upload the code, code link, and 
// screenshot in your github repo. Submit the repo link.



var adm3 = ee.FeatureCollection("projects/ee-atahsinhaque20/assets/BGD_adm3");
//Filtering out desired upazila:
var myRegion = adm3.filter(ee.Filter.eq("NAME_3", "Teknaf"));
print(myRegion);
Map.addLayer(myRegion,{}, "Tekaf");
Map.centerObject(myRegion);

//Using LANDSAT 9 data for desired region & time:
var l9 = ee.ImageCollection("LANDSAT/LC09/C02/T1_TOA")
           .filterBounds(myRegion)
           .filterDate("2023-01-01", "2024-01-01")
           .filterMetadata('CLOUD_COVER','less_than',10)
           .mean()
           .clip(myRegion);
print(l9);
//Visualizing on the map: 
Map.addLayer(l9);

//Calculating NDMI:
var ndmi = l9.normalizedDifference(["B5","B6"]).rename("NDMI");
var visparams = {
  min: -1,
  max: 1,
  palette: ["blue", "white"]
};
print(ndmi, "NDMI Image");
//Visualizing on the map:
Map.addLayer(ndmi.clip(myRegion), visparams, 'NDMI Image');

// Generating a URL for the PNG image of NDMI.
var ndmiURL = ndmi.clip(myRegion).getThumbURL({
  min: -1,
  max: 1,
  palette: ["blue", "white"],
  region : myRegion.geometry().bounds(),
  crs: "EPSG:4326",
  scale : "100",
  format: "png"
  
});

// Getting the URL of the NDMI inmage:
print( ndmiURL);


//*Make a NDVI map of your upazila by using Landsat 9 imagery for 2022. Upload 
//*the code, code link, and screenshot in your github repo. Submit the repo link.


var adm3 = ee.FeatureCollection("projects/ee-atahsinhaque20/assets/BGD_adm3");
//Filtering out desired upazila:
var myRegion = adm3.filter(ee.Filter.eq("NAME_3", "Teknaf"));
print(myRegion);
Map.addLayer(myRegion,{}, "Tekaf");
Map.centerObject(myRegion);

//Using LANDSAT 9 data for desired region & time:
var l9 = ee.ImageCollection("LANDSAT/LC09/C02/T1_TOA")
           .filterBounds(myRegion)
           .filterDate("2022-01-01", "2023-01-01")
           .filterMetadata('CLOUD_COVER','less_than',1)
           .mean()
           .clip(myRegion);
print(l9);
//Visualizing on the map: 
Map.addLayer(l9);

//Calculating NDVI:
var ndvi = l9.normalizedDifference(["B5","B4"]).rename("NDVI");
var visparams = {
  min: -1,
  max: 1,
  palette: ["blue", "green"]
};
print(ndvi, "NDVI Image");
//Visualizing on the map:
Map.addLayer(ndvi.clip(myRegion), visparams, 'NDVI Image');

// Generating a URL for the PNG image of NDVI.
var ndviURL = ndvi.clip(myRegion).getThumbURL({
  min: -1,
  max: 1,
  palette: ["blue", "green"],
  region : myRegion.geometry().bounds(),
  crs: "EPSG:4326",
  scale : "100",
  format: "png"
  
});

// Getting the URL of the NDVI image:
print( ndviURL);

