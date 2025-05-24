$( function() {

   // Preloader
    let progress = 0;
    const loadingBar = document.getElementById("loading-bar");
    const loadingPercent = document.getElementById("loading-percent");
    const preloader = document.getElementById("preloader");

    const startTime = new Date().getTime(); // ⏱ Track start time

    // Simulate smooth loading progress
    const simulateLoading = setInterval(() => {
        if (progress < 95) {
        progress += Math.random() * 2; // random increment
        progress = Math.min(progress, 95);
        loadingBar.style.width = progress + "%";
        loadingPercent.textContent = Math.floor(progress) + "%";
        }
    }, 50);

    // On real load
    window.addEventListener("load", () => {
        clearInterval(simulateLoading);

        // Force 100% visually
        progress = 100;
        loadingBar.style.width = "100%";
        loadingPercent.textContent = "100%";

        // Ensure minimum duration
        const loadTime = new Date().getTime() - startTime;
        const minDelay = 1000; // 1 second minimum loader duration

        const delay = loadTime < minDelay ? minDelay - loadTime : 0;

        setTimeout(() => {                
            $('#preloader').fadeOut('slow', function(){
                $(this).remove();
            });
            if (window.AOS) {
                AOS.init();
            }
        }, 1000); // delay to let 100% show
    });

});