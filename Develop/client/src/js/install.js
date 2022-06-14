const installBtn = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt =event;
    installBtn.classList.toggle('hidden', false);
});

// Click event handler for installBtn
installBtn.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

// TODO: Add an handler for the `appinstalled` event
if (!promptEvent) {
    return;
}

promptEvent.prompt();
installBtn.classList.toggle('hidden', true);
});

//  Event handler for appinstalled
window.addEventListener('appisntalled', (event) => {
    window.deferredPrompt = null;
});