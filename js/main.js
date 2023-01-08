class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">AnaSayfa</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-link" href="cpp.html">C++</a>
                    <a class="nav-link" href="contactForm-and-map.html">İletişim</a>
                </div>
            </div>
        </div>
    </nav>

        `
    }

}

customElements.define('my-header', myHeader);


class myFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="text-center text-lg-start bg-dark text-muted">
        <div class="container text-center text-md-start mt-5">
            <div class="text-center p-4" style="color: white">
                © 2022 Copyright:
                <a class="text-reset fw-bold" href="index.html" style="text-decoration: none;">Furkan Gültekin</a>
            </div>
        </div>
    </footer>
        
        `
    }

}

customElements.define('my-footer', myFooter);
