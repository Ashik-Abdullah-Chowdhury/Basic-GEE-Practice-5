// selection of dataset
var dataset=ee.ImageCollection("LANDSAT/LC09/C02/T1_L2")

// image from dataset
var upzla=Roi.filter(ee.Filter.eq("ADM3_EN","Boalkhali")).geometry()
var img=dataset
.filterBounds(upzla)
.filterDate("2022-01-01","2022-12-31")
.filter(ee.Filter.lt('CLOUD_COVER',10))
.mean()
print(img)


// calculating ndvi
var ndvi=img.normalizedDifference(["SR_B5","SR_B4"]).rename("NDVI")
print(ndvi)
Map.centerObject(upzla)
Map.addLayer(ndvi.clip(upzla),{min:0,max:0.3,palette:["blue","white","green"]},"NDVI")

// thresholding classes
var class1=ndvi.gte(-1).and(ndvi.lte(-0.5)).rename("class1").selfMask()
var class2=ndvi.gt(-0.5).and(ndvi.lte(0)).rename("class2").selfMask()
var class3=ndvi.gt(0).and(ndvi.lte(0.5)).rename("class3").selfMask()
var class4=ndvi.gt(0.5).and(ndvi.lte(1)).rename("class4").selfMask()

// area calculation of classes
var pix_area=ee.Image.pixelArea()
var area1=class1.multiply(pix_area).reduceRegion({
  geometry:upzla,
  scale:30,
  reducer:ee.Reducer.sum(),
  bestEffort:true
 })
print(area1)
var area2=class2.multiply(pix_area).reduceRegion({
  geometry:upzla,
  scale:30,
  reducer:ee.Reducer.sum(),
  bestEffort:true
 })
print(area2)
var area3=class3.multiply(pix_area).reduceRegion({
  geometry:upzla,
  scale:30,
  reducer:ee.Reducer.sum(),
  bestEffort:true
 })
print(area3)
var area4=class4.multiply(pix_area).reduceRegion({
  geometry:upzla,
  scale:30,
  reducer:ee.Reducer.sum(),
  bestEffort:true
 })
print(area4)


Map.addLayer(class1.clip(upzla),{},"masked_class1")
Map.addLayer(class2.clip(upzla),{min:-1,max:1,palette:['#18ffdd','#0f21ff','#f314ff']},"masked_class2")
Map.addLayer(class3.clip(upzla),{min:-1,max:1,palette:['#ff5a14','#f6ff1c','#41ff0d']},"masked_class3")
Map.addLayer(class4.clip(upzla),{},"masked_class4")

