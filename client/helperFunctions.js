
module.exports = {

   
  convertISO8601ToSeconds (input) {

    const reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
    let hours = 0, minutes = 0, seconds = 0, totalseconds;

    if (reptms.test(input)) {
        var matches = reptms.exec(input);
        if (matches[1]) hours = Number(matches[1]);
        if (matches[2]) minutes = Number(matches[2]);
        if (matches[3]) seconds = Number(matches[3]);
        totalseconds = hours * 3600  + minutes * 60 + seconds;
    }

    return (totalseconds);
  },




  getVideoIdFromUrl (string) {
    let id = string.split('v=')[1];
    const ampersandPosition = id.indexOf('&');
      
    if(ampersandPosition != -1) {
      id = id.substring(0, ampersandPosition);
    }
    
    return id;
  }

};