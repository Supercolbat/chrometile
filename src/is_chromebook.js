function isChromebook() {
    // Hacky, but what StackOverflow suggests
    return window.navigator.userAgent.search('CrOS') > -1;
}