const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  deferredPrompt = e;
  butInstall.style.visibility = 'visible';
});

butInstall.addEventListener('click', async () => {
  if (deferredPrompt !== null) {
    deferredPrompt?.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      butInstall.setAttribute('disabled', true);
      butInstall.textContent = 'Installed!';
      deferredPrompt = null;
  }
  }
})



window.addEventListener('appinstalled', (event) => {
    console.log('appinstalled', event);
});
