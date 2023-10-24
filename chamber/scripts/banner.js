// Add the following JavaScript to show and close the banner
document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('banner');
    const closeBannerButton = document.getElementById('closeBanner');

    // Check if it's Monday, Tuesday, or Wednesday
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();

    if (dayOfWeek >= 1 && dayOfWeek <= 3) { // 1 = Monday, 2 = Tuesday, 3 = Wednesday
        banner.style.display = 'block';

        // Close the banner when the close button is clicked
        closeBannerButton.addEventListener('click', function () {
            banner.style.display = 'none';
        });
    }
});
