# **Normalized Difference Indices Thresholding and Area Calculation Using Google Earth Engine**
Normalized Difference inidices, thresholding is a widely used technique in remote sensing and satellite imagery analysis for classifying different land coveer conditions. In this repository we have demonstrated how to perform NDVI thresholding and calculate the area for each threshold class using the Google Earth Engine JavaScript API.
## **Step-1: Import Image Collection**
First, import the image collection containing the satellite images with bands required for NDVI calculation.
## **Step 2: Calculate NDVI**
Next, calculate the NDVI for each image in the collection using the formula: (NIR - Red) / (NIR + Red), where NIR (Near-Infrared) is band 5 and Red is band 4.
## **Step 3: Thresholding**
Define threshold classes based on NDVI values to classify different vegetation types or conditions. For example, we'll define classes for bare land, low vegetation, and high vegetation. You can change the upper and lower limit of the value as far your requirement.
## **Step 4: Area Calculation**
Calculate the area for each threshold class using area-weighted multiplication and the reduceRegion function.
### **We have made an NDVI map of Boalkhali upazila by using Landsat 9 imagery for 2022. Then generated 4 different classes and calculated areas for each class by thresholding.Here are the results:**
*   [GEE LINK](https://code.earthengine.google.com/e8e1bd7f342b2ec93bd98a99e5e3c0a2)
*   [CODE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-5/blob/main/Thresholding%20calc-NDVI.js)
*   [IMAGE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-5/blob/main/thresholding_NDVI.png)

### **We have made a Normalized Difference Moisture Index (NDMI) map of Boalkhali upazila by using Landsat 9 imagery for 2023.It looks like this:**
*  [GEE LINK](https://code.earthengine.google.com/1881d07a5d0fc59c563189411be6de8f) 
*  [CODE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-5/blob/main/Thresholding%20calc-NDMI.js) 
*  [IMAGE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-5/blob/main/Thresholding_NDMI.png) 

### **Then we have generated two PNG images of our NDVI and NDMI map by using getThumbURL() function.The outcome:**
*   [GEE LINK](https://code.earthengine.google.com/43fdf70aa516332a6643632f7df1a722)
*   [CODE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-5/blob/main/png%20by%20getThumbURL.js)
*   [NDVI Thumbnail URL](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-5/blob/main/NDVI%20Thumbnail%20URL.png)
*   [NDMI Thumbnail URL](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-5/blob/main/NDMI%20Thumbnail%20URL.png)
