# Session-12-Assignment
**Q[1].** Make a NDVI map of your upazila by using Landsat 9 imagery for 2022. Generate 4 different classes and calculate area for each class by thresholding. Upload the code, code link, and screenshot in your github repo. Submit the repo link.



**Ans.** The provided code generates a Normalized Difference Vegetation Index (NDVI) map for the Teknaf Upazila using Landsat 9 imagery from 2022. Initially, it selects the Teknaf Upazila boundary and filters Landsat 9 imagery for the specified time frame, ensuring cloud cover is less than 10%. NDVI is then calculated by taking the normalized difference between near-infrared and red bands, representing vegetation health. Subsequently, the NDVI image is classified into four distinct classes based on predefined thresholds: class 1 for NDVI values less than or equal to 0, class 2 for values between 0 and 0.2, class 3 for values between 0.2 and 0.6, and class 4 for values greater than 0.6. Using these classes, the code calculates the area of each class within the Teknaf Upazila by multiplying binary class images with a pixel area image and summing the results. Finally, it displays the NDVI map, the four classes, and prints out the calculated areas for each class within the specified region.


*   [GEE link](https://code.earthengine.google.com/9585b4d41b33c496b368dddc233b2f5b)
*   [Code file link](https://github.com/t-anikaa/Session-12-Assignment/blob/main/Q%26A%5B1%5D.js)


**Q[2].** Make a Normalized Difference Moisture Index (NDMI) map of your upazila by using Landsat 9 imagery for 2023. Upload the code, code link, and screenshot in your github repo. Submit the repo link.
![Capture12(1)](https://github.com/t-anikaa/Session-12-Assignment/assets/161161157/59d68fc6-b1d1-4b8e-98ff-79045995908c)

**Ans.** The provided code generates a Normalized Difference Moisture Index (NDMI) map for the Teknaf Upazila using Landsat 9 imagery from 2023. Initially, it selects the Teknaf Upazila boundary and filters Landsat 9 imagery for the specified time frame, ensuring cloud cover is less than 10%. NDMI is then calculated by taking the normalized difference between near-infrared (Band 5) and short-wave infrared (Band 6) bands, which is a widely used index for monitoring moisture content in vegetation and soil. Subsequently, the NDMI image is visualized on the map with a color palette that ranges from blue (indicating low moisture content) to white (indicating high moisture content). Finally, the NDMI map is displayed on the map along with the Teknaf Upazila boundary, providing an insight into moisture distribution within the specified region for the given time period.


*   [GEE link](https://code.earthengine.google.com/7b5de74e4ad3559986935d00fe31fe25)
*   [Code file link](https://github.com/t-anikaa/Session-12-Assignment/blob/main/Q%26A%5B2%5D.js)
![Capture12 2](https://github.com/t-anikaa/Session-12-Assignment/assets/161161157/cbda8a25-cf85-4586-acb9-6cff6398c81a)


**Q[3].** Generate two PNG image of your NDVI, and NDMI map by using getThumbURL() function. Upload the code, code link, and screenshot in your github repo. Submit the repo link.

**Ans.** For generating a PNG image of the Normalized Difference Vegetation Index (NDVI) map, the code begins by calculating the NDVI using Landsat 9 imagery for the specified time range (2022) within the Teknaf Upazila region. Following this computation, visualization parameters are defined, encompassing settings like color palette, minimum and maximum values, necessary for accurate representation of vegetation health. Subsequently, utilizing the 'getThumbURL()' function, a URL is generated specifically for a PNG image of the NDVI map. This URL incorporates essential parameters such as the visualization settings, region of interest (Teknaf Upazila), coordinate reference system (EPSG:4326), scale, and image format (PNG). Finally, the code prints out the generated URL.


*   [GEE link](https://code.earthengine.google.com/1d96614aa88d32fe7a761d245bf90c8b )
*   [Code file link](https://github.com/t-anikaa/Session-12-Assignment/blob/main/Q%26A%5B3%5DNDVI.js)


Similarly, for producing a PNG image of the Normalized Difference Moisture Index (NDMI) map, the code follows a parallel procedure. 
![Capture12 3 2](https://github.com/t-anikaa/Session-12-Assignment/assets/161161157/7f798ef8-0785-4cf7-b08b-49759459022e)


*   [GEE link](https://code.earthengine.google.com/31e3e952e36ab895d93e0785ed0d9bbc)
*   [Code file link](https://github.com/t-anikaa/Session-12-Assignment/blob/main/Q&A%5B3%5DNDMI.js)
![Capture12 3 1](https://github.com/t-anikaa/Session-12-Assignment/assets/161161157/59771c42-06db-41f4-85ba-beddfb268441)









