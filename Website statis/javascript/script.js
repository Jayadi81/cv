document.addEventListener('DOMContentLoaded', function () {
    // Menampilkan/Sembunyikan Profil
    const toggleProfileBtn = document.getElementById('toggleProfileBtn');
    const profileSection = document.getElementById('profile');

    toggleProfileBtn.addEventListener('click', function () {
        if (profileSection.style.display === 'none' || profileSection.style.display === '') {
            profileSection.style.display = 'block';
            toggleProfileBtn.textContent = 'Sembunyikan Profil';
        } else {
            profileSection.style.display = 'none';
            toggleProfileBtn.textContent = 'Tampilkan Profil';
        }
    });

    // Ubah Tema (Dark/Light)
    const changeThemeBtn = document.getElementById('changeThemeBtn');
    let isDarkTheme = false;

    changeThemeBtn.addEventListener('click', function () {
        if (!isDarkTheme) {
            document.body.classList.add('dark-theme');
            changeThemeBtn.textContent = 'Ubah ke Tema Terang';
        } else {
            document.body.classList.remove('dark-theme');
            changeThemeBtn.textContent = 'Ubah ke Tema Gelap';
        }
        isDarkTheme = !isDarkTheme;
    });
});
