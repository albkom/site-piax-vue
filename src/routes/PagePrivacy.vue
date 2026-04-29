<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
    <div class="privacy-page">
        <div class="privacy-container">
            <button class="btn-ghost back-btn" @click="router.push('/')">← Torna al sito</button>

            <h1>Informativa sul trattamento dei dati personali</h1>
            <p class="gdpr-subtitle">ai sensi degli artt. 13–14 del Regolamento UE 2016/679 (GDPR)</p>

            <section>
                <h2>Titolare del trattamento</h2>
                <p>
                    <strong>GG Impianti e Costruzioni Srl</strong><br />
                    Via Piave 14 rosso – 16145 Genova (GE) — P.IVA: 02917950996<br />
                    <a href="mailto:ggimpiantiecostruzionisrl@gmail.com">ggimpiantiecostruzionisrl@gmail.com</a>
                </p>
            </section>

            <section>
                <h2>Dati trattati</h2>
                <p>
                    Il sito non raccoglie dati tramite form o autenticazione. Durante la navigazione, <strong>Google
                        LLC</strong>
                    acquisisce automaticamente dati tecnici (IP, browser, pagine visitate) tramite l'infrastruttura
                    <strong>Firebase Hosting</strong>, utilizzata per l'erogazione del sito. GG Impianti e Costruzioni
                    Srl
                    non ha accesso diretto a tali dati.
                </p>
                <p>
                    Base giuridica: legittimo interesse al corretto funzionamento del sito (art. 6, par. 1, lett. f,
                    GDPR).
                    Nessuna profilazione o finalità di marketing.
                </p>
            </section>

            <section>
                <h2>Responsabile del trattamento e trasferimento dati</h2>
                <p>
                    Google LLC agisce come responsabile del trattamento (art. 28 GDPR) e può trattare i dati su server
                    extra-UE con garanzie fornite tramite Standard Contractual Clauses.<br />
                    Info: <a href="https://firebase.google.com/support/privacy" target="_blank"
                        rel="noopener">firebase.google.com/support/privacy</a>
                </p>
            </section>

            <section>
                <h2>Cookie</h2>
                <p>
                    Il sito non utilizza cookie di profilazione né di terze parti. Non è presente un banner di consenso.
                </p>
            </section>

            <section>
                <p><em>Ultimo aggiornamento: aprile 2025</em></p>
            </section>
        </div>
    </div>
</template>

<style scoped>
.privacy-page {
    min-height: 100vh;
    background-color: #ffffff;
    color: #1a1a1a;
    padding: 2rem 1rem;
}

.privacy-container {
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.back-btn {
    align-self: flex-start;
    background: none;
    border: 1px solid #ccc;
    color: #333;
    padding: 0.4rem 0.9rem;
    border-radius: 0.4rem;
    cursor: pointer;
    font-size: 0.9rem;
    transition: border-color 0.2s;
}

.back-btn:hover {
    border-color: #555;
}

h1 {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0;
    color: #111;
}

.gdpr-subtitle {
    color: #666;
    font-size: 0.95rem;
    font-style: italic;
    margin: 0;
}

section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;
    border-top: 1px solid #e0e0e0;
    padding-top: 1.25rem;
}

h2 {
    font-size: 1.05rem;
    font-weight: 700;
    margin: 0;
    color: #111;
    text-align: left;
}

p {
    margin: 0;
    line-height: 1.7;
    color: #333;
}

a {
    color: #0066cc;
    text-decoration: underline;
}

ul {
    margin: 0;
    padding-left: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

li {
    color: #333;
    line-height: 1.6;
}

.last-updated {
    color: #888;
    font-size: 0.85rem;
    margin: 0;
}
</style>
