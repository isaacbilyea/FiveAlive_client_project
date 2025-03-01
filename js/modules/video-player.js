export function videoPlayer() {
    
    const player = new Plyr('video', {
        settings: [
            'play-large',
            'play',    
            'progress', 
            'current-time',
            'mute',     
            'volume',
            'fullscreen' 
        ]
        }); //Sets controls to remove defaults to get rid of settings
}