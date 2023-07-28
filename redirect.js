function redirectURL() {
    const params = new URLSearchParams(window.location.search);
    url = params.get("url");
    url = url.replace(/[^a-z0-9áéíóúñü/:,._-]/,"");
    return url.trim();
    
}

