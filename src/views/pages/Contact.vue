<script setup>
import Footer from '@/views/pages/components/Footer.vue';
import Header from '@/views/pages/components/Header.vue';
import { useHead } from '@unhead/vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { onMounted } from 'vue';

useHead({
    title: 'Contact Us - Quintessence Research',
    meta: [
        { name: 'description', content: 'Contact Quintessence Research for inquiries on applied research consultancy services in the Circular Economy, Digital Product Passport, Digital Identities, Digital Twins, and Data Sharing.' },
        { property: 'og:title', content: 'Contact Us - Quintessence Research' },
        { property: 'og:description', content: 'Contact Quintessence Research for inquiries on applied research consultancy services in the Circular Economy, Digital Product Passport, Digital Identities, Digital Twins, and Data Sharing.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://quintessenceresearch.com/contact' },
        { property: 'og:image', content: 'https://quintessenceresearch.com/logos/qr_icon.png' },
    ],
    link: [{ rel: 'canonical', href: 'https://quintessenceresearch.com/contact' }],
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ContactPage",
                "name": "Contact Us - Quintessence Research",
                "url": "https://quintessenceresearch.com/contact",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "contact@quintessenceresearch.com",
                    "contactType": "Contact Point"
                }
            }),
        },
    ],
});

onMounted(() => {
    const map = L.map('map').setView([51.4416, 5.4697], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add Marker
    L.marker([51.4416, 5.4697]).addTo(map)
        .bindPopup('Quintessence Research B.V.')
        .openPopup();
});

</script>

<template>

    <div class="layout-container">
        <Header></Header>
        <main class="content">
            <div class="surface-0 flex justify-content-center">
                <div id="contact" class="landing-wrapper overflow-hidden">
                    <div class="grid grid-nogutter surface-section text-800">
                        <div class="col-12 p-6 text-center md:text-left flex align-items-center">
                            <section class="w-full max-w-screen-md mx-auto">
                                <h1 class="text-6xl font-light text-gray-900 line-height-2">
                                    Contact
                                </h1>
                                <p class="font-normal text-2xl line-height-3 md:mt-3 text-gray-800 mb-4 text-left">
                                    For inquiries, collaborations, or more information, feel free to reach out to us. We
                                    are always open to discussing how we can work together to bridge the gap between
                                    fundamental research and industrial applications.
                                </p>
                            </section>
                        </div>

                        <div class="col-12 p-6 flex align-items-center">
                            <div class="grid grid-nogutter w-full max-w-screen-md mx-auto">
                                <div class="col-12 md:col-6 p-4">
                                    <section>
                                        <h2 class="text-4xl font-bold text-gray-900 line-height-2 mb-3">Address</h2>
                                        <p class="font-normal text-xl text-gray-800 mb-4">
                                            Quintessence Research B.V.<br />
                                            5612HZ Eindhoven, Netherlands
                                        </p>

                                        <h2 class="text-4xl font-bold text-gray-900 line-height-2 mb-3">Contact</h2>
                                        <p class="font-normal text-xl text-gray-800 mb-4">
                                            Email: <a href="mailto:contact@quintessenceresearch.com"
                                                class="text-blue-500 hover:underline">contact@quintessenceresearch.com</a>
                                        </p>

                                        <h2 class="text-4xl font-bold text-gray-900 line-height-2 mb-3">Social</h2>
                                        <p class="font-normal text-xl text-gray-800 flex items-center">
                                            <a href="https://linkedin.com/company/quintessence-research" target="_blank"
                                                class="mr-4 text-gray-500 hover:underline">
                                                <i class="pi pi-linkedin text-3xl"></i>
                                            </a>
                                            <a href="https://github.com/quintessence-research" target="_blank"
                                                class="text-gray-500 hover:underline">
                                                <i class="pi pi-github text-3xl"></i>
                                            </a>
                                        </p>
                                    </section>
                                </div>

                                <div class="col-12 md:col-6 p-4 relative map-container">
                                    <section>
                                        <!-- Leaflet Map -->
                                        <div id="map" class="w-full h-full bg-gray-200"></div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
</template>

<style scoped>
.map-container {
    position: relative;
    height: 400px;
    /* Set a specific height for the container */
}

#map {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
}

.layout-mobile-active .layout-main-container {
    transform: translateX(0);
}

.layout-mobile-active .layout-sidebar {
    transform: translateX(0);
}

.layout-container {
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.content {
    background-color: rgb(255, 255, 255);
    flex: 1;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 1rem;
}

.contact-page {
    padding: 2rem;
}

.hero-section {
    background-color: #f7f7f7;
    border-bottom: 1px solid #ddd;
}

.contact-form-section {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.contact-info-section,
.social-media-section {
    background-color: #f7f7f7;
    padding: 2rem;
    margin-top: 2rem;
    border-radius: 8px;
}

a {
    text-decoration: none;
}
</style>
