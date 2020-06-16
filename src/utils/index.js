// Check if the URL content is video(false) or image(true)
export const isImageorVideo = async (url) => {
  if (!url) {
    return true
  }
  url = url.split('?')[0]
  var parts = url.split('.')
  var extension = parts[parts.length - 1]
  var imageTypes = ['jpg', 'jpeg', 'tiff', 'png', 'gif', 'bmp']
  if (imageTypes.indexOf(extension) !== -1) {
    return true
  }
  return false
}

export const randomDate = (start = new Date(2012, 0, 1), end = new Date()) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  )
}
