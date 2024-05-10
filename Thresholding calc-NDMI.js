// NDMI map of my upazila by using Landsat 9 imagery for 2023
var dataset=ee.ImageCollection("LANDSAT/LC09/C02/T1_L2")
var upzla=roi.filter(ee.Filter.eq("ADM3_EN","Boalkhali")).geometry()
var img=dataset
.filterBounds(upzla)
.filterDate("2023-01-01","2023-12-31")
.filter(ee.Filter.lt('CLOUD_COVER',10))
.mean()
print(img)

// calculating ndmi
var ndmi=img.normalizedDifference(["SR_B5","SR_B6"]).rename("NDMI")
print(ndmi)
Map.centerObject(upzla)
Map.addLayer(ndmi.clip(upzla),{min:-0.06,max:0.18,palette:["blue","white","green"]},"NDMI")
