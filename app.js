const onxrloaded = () => {
  XR8.XrController.configure({
    imageTargetData: [
      {
  "imagePath": "assets/target/target.jpg",
  "name": "target_jelly",
  "type": "PLANAR",
  "properties": {
    "top": 0,
    "left": 0,
    "width": 995,
    "height": 1326,
    "isRotated": false,
    "originalWidth": 995,
    "originalHeight": 1326
  }
},
      
    ],
  })
}
window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)