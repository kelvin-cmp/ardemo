const onxrloaded = () => {
  XR8.XrController.configure({
    imageTargetData: [
      require('assets/target/target.json'),
      
    ],
  })
}
window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)