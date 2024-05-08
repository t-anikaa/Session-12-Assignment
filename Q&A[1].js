// Make a NDVI map of your upazila by using Landsat 9 imagery for 2022. 
// Generate 4 different classes and calculate area for each class by 
// thresholding. Upload the code, code link, and screenshot in your github
// repo. Submit the repo link.


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
           .filterMetadata('CLOUD_COVER','less_than',10)
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


//Generating four different classes:
var class1 = ndvi.gte(-1).and(ndvi.lte(0)).rename("class1").selfMask();
var class2 = ndvi.gt(0).and(ndvi.lte(0.2)).rename("class2").selfMask();
var class3 = ndvi.gt(0.2).and(ndvi.lte(0.6)).rename("class3").selfMask();
var class4 = ndvi.gt(0.6).and(ndvi.lte(1)).rename("class4").selfMask();

//Visualizing the classes on the map:
Map.addLayer(class1,{}, "CLASS1");
Map.addLayer(class2,{}, "CLASS2");
Map.addLayer(class3,{}, "CLASS3");
Map.addLayer(class4,{}, "CLASS4");

var img = ee.Image.pixelArea();
//Map.addLayer(img,{}, "Pixel Area");

//Calculating the area of class1:
var ar1 = class1.multiply(img).reduceRegion({
  geometry: myRegion,
  reducer: ee.Reducer.sum(),
  scale: 10
  
});
print(ar1);

//Calculating the area of class2:
var ar2 = class2.multiply(img).reduceRegion({
  geometry: myRegion,
  reducer: ee.Reducer.sum(),
  scale: 10
  
});
print(ar2);

//Calculating the area of class3:
var ar3 = class3.multiply(img).reduceRegion({
  geometry: myRegion,
  reducer: ee.Reducer.sum(),
  scale: 10
  
});
print(ar3);

//Calculating the area of class4:
var ar4 = class4.multiply(img).reduceRegion({
  geometry: myRegion,
  reducer: ee.Reducer.sum(),
  scale: 10
  
});
print(ar4);
