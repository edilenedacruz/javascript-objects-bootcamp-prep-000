var playlist = {
  "Aerosmith": "Walk this way",
  "Queens": "We will rock you"
}

function updatePlaylist(object, key, value){
  return Object.assign({}, object, {[key]: value})
}
