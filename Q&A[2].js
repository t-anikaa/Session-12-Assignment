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
