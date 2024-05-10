// selection of dataset
var dataset=ee.ImageCollection("LANDSAT/LC09/C02/T1_L2")

// roi selection
var upzla=Roi.filter(ee.Filter.eq("ADM3_EN","Boalkhali")).geometry()

// image from dataset for ndvi
var img=dataset
.filterBounds(upzla)
.filterDate("2022-01-01","2022-12-31")
.filter(ee.Filter.lt('CLOUD_COVER',10))
.mean()

// Calculating NDVI
var ndvi = img.normalizedDifference(["SR_B5","SR_B4"]);

// image from dataset for ndmi
var Img=dataset
.filterBounds(upzla)
.filterDate("2023-01-01","2023-12-31")
.filter(ee.Filter.lt('CLOUD_COVER',10))
.mean()
// Calculating NDMI
var ndmi = Img.normalizedDifference(["SR_B5","SR_B6"]);


// Generating thumbnail URLs
var ndviThumbURL = ndvi.getThumbURL({
  min: -1, 
  max: 1, 
  palette: ['blue', 'white', 'green'],
  dimensions:500,
  region:upzla,
  format: 'png',
});

var ndmiThumbURL = ndmi.getThumbURL({min: -1, 
max: 1, 
palette: ['brown', 'white', 'blue'],
dimensions:500,
region:upzla,
format: 'png',
});

// Displaying URLs
print(ndviThumbURL,"NDVI Thumbnail URL:")
print(ndmiThumbURL,"NDMI Thumbnail URL:")