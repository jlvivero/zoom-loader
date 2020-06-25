const zoomFunction = () => {
    let target = document.getElementsByClassName('main');
    target = target[0]
    let video = document.getElementById("vjs_video_3_html5_api");
    if(video) {
      if(window.confirm('If you click "ok" you will be redirected to the standalone video to download. Cancel will load this website')) {
        console.log(target);
        target.innerHTML += '<a href= "' + video.src + '" download> here! </a>'; 
        return true;
      }
    }
    return false;
};

zoomFunction();
    
    
