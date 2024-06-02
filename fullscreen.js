document.addEventListener("DOMContentLoaded", function() {
    console.log("Document is ready");

    const video = document.getElementById("projectVideo");

    if (!video) {
        console.error("Video element not found");
        return;
    }

    console.log("Video element found");

    video.addEventListener("click", function() {
        console.log("Video clicked");

        try {
            if (video.requestFullscreen) {
                video.requestFullscreen().then(() => {
                    console.log("Fullscreen mode entered");
                }).catch(err => {
                    console.error("Error entering fullscreen:", err);
                });
            } else if (video.mozRequestFullScreen) { // Firefox
                video.mozRequestFullScreen().then(() => {
                    console.log("Fullscreen mode entered");
                }).catch(err => {
                    console.error("Error entering fullscreen:", err);
                });
            } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
                video.webkitRequestFullscreen().then(() => {
                    console.log("Fullscreen mode entered");
                }).catch(err => {
                    console.error("Error entering fullscreen:", err);
                });
            } else if (video.msRequestFullscreen) { // IE/Edge
                video.msRequestFullscreen().then(() => {
                    console.log("Fullscreen mode entered");
                }).catch(err => {
                    console.error("Error entering fullscreen:", err);
                });
            } else {
                console.error("Fullscreen API is not supported");
            }
        } catch (error) {
            console.error("Error in fullscreen request:", error);
        }
    });
});
