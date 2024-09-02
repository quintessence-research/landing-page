<script setup>
import Footer from '@/views/pages/components/Footer.vue';
import Header from '@/views/pages/components/Header.vue';
import { useHead } from '@unhead/vue';
import { useToast } from "primevue/usetoast";

useHead({
    title: 'Quintessence Research - Research Consultancy',
    meta: [
        { name: 'description', content: 'Quintessence Research specializes in applied research for the Circular Economy, Digital Product Passport, Digital Identities, Digital Twins, and Data Sharing.' },
        { property: 'og:title', content: 'Quintessence Research - Research Consultancy' },
        { property: 'og:description', content: 'Quintessence Research specializes in applied research for the Circular Economy, Digital Product Passport, Digital Identities, Digital Twins, and Data Sharing.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://quintessenceresearch.com/' },
        { property: 'og:image', content: 'https://quintessenceresearch.com/logos/qr_icon.png' },
    ],
    link: [{ rel: 'canonical', href: 'https://quintessenceresearch.com/' }],
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Quintessence Research",
                "url": "https://quintessenceresearch.com/",
                "logo": "https://quintessenceresearch.com/logos/qr_logo.png",
                "description": "Research Consultancy specializing in the Circular Economy, Digital Product Passports, Digital Identities, Digital Twins, and Data Sharing.",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "contact@quintessenceresearch.com",
                    "contactType": "Contact Point"
                }
            }),
        },
    ],
});
const toast = useToast();
const showInfo = () => {
    console.log("Making a toast");
    toast.add({ severity: 'info', summary: 'Coming soon!', detail: 'Parts of the website are still under construction. Check back soon.', life: 3000 });
};
</script>

<template>
    <Header></Header>
    <div class="surface-0 flex justify-content-center">
        <Toast />

        <div id="home" class="landing-wrapper overflow-hidden">
            <div class="grid grid-nogutter surface-section text-800">
                <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                    <section>
                        <h1 class="text-6xl font-bold text-gray-900 line-height-2">
                            <span class="font-light block">Advancing and developing</span>
                            next-generation software standards
                        </h1>
                        <p class="font-normal text-2xl line-height-3 md:mt-3 text-gray-800">
                            We provide research services and technical support for industry, institutes and academia in
                            a wide TRL range.
                        </p>
                        <router-link to="/about">
                            <Button label="About us"
                                class="custom-button p-button text-xl border-none mt-5 font-normal line-height-3 px-3">
                            </Button>
                        </router-link>
                    </section>
                </div>

                <div class="col-12 md:col-6 overflow-hidden">
                    <div class="image-container">
                        <img src="/src/images/hero-world.jpg" alt="Image" class="block">
                        <div class="red-overlay"></div>
                    </div>
                </div>
            </div>

            <div id="expertise" class="py-4 px-4 lg:px-8 mt-5 mx-auto" style="max-width: 1400px;">
                <div class="grid grid-nogutter text-800">
                    <Divider />
                    <div class="col-12 text-center mt-8 mb-4">
                        <h1 class="text-900 font-bold mb-2">Expertise</h1>
                    </div>
                    <div class="col-12 p-4">
                        <div class="flex flex-column lg:flex-row align-items-center"
                            style="border-radius: 12px; padding: 1rem; background-color: #E6E6E6;">
                            <div class="w-full lg:w-3 lg:flex-none p-2 flex justify-content-center">
                                <img src="/src/images/expertise/digital-identity.jpg" alt="Self-sovereign identity"
                                    class="w-full h-auto object-cover block" style="border-radius: 15px;">
                            </div>
                            <div class="w-full lg:w-8 lg:flex-none flex flex-column justify-content-center p-2">
                                <h2 class="mb-2 text-900 font-bold">Self-sovereign Identity</h2>
                                <span class="text-600 text-lg">Empowering individuals with control over their digital
                                    identities, through a decentralized model and advanced cryptographic methods.
                                    This approach allows users to manage and share verified credentials securely,
                                    enhancing privacy and minimizing identity fraud, thus providing greater autonomy in
                                    a connected world.</span>
                            </div>
                            <div class="w-auto lg:w-1 lg:flex-none flex justify-content-end align-items-center p-2">
                                <Button text rounded label="Info" severity="secondary" class="text-xl"
                                    @click="showInfo">&#x203A;</Button>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 p-4">
                        <div class="flex flex-column lg:flex-row align-items-center"
                            style="border-radius: 12px; padding: 1rem; background-color: #E6E6E6;">
                            <div class="w-full lg:w-3 lg:flex-none p-2 flex justify-content-center">
                                <img src="/src/images/expertise/product-passport.jpg" alt="Digital Product Passports"
                                    class="w-full h-auto object-cover block" style="border-radius: 15px;">
                            </div>
                            <div class="w-full lg:w-8 lg:flex-none flex flex-column justify-content-center p-2">
                                <h2 class="mb-2 text-900 font-bold">Digital Product Passports</h2>
                                <span class="text-600 text-lg">Decentralized system architectures detailing a product’s
                                    lifecycle at
                                    various levels, leveraging a complex and interoperable mix of technologies to ensure
                                    transparency and traceability.
                                    DPPs offer insights into a product's origin, materials, emissions and end-of-life
                                    options, supporting informed consumer choices and promoting sustainability in supply
                                    chains.
                                </span>
                            </div>
                            <div class="w-auto lg:w-1 lg:flex-none flex justify-content-end align-items-center p-2">
                                <Button text rounded label="Info" severity="secondary" class="text-xl"
                                    @click="showInfo">&#x203A;</Button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 p-4">
                        <div class="flex flex-column lg:flex-row align-items-center"
                            style="border-radius: 12px; padding: 1rem; background-color: #E6E6E6;">
                            <div class="w-full lg:w-3 lg:flex-none p-2 flex justify-content-center">
                                <img src="/src/images/expertise/privacy-enhancing-technologies.jpg"
                                    alt="Privacy Enhancing Technologies" class="w-full h-auto object-cover block"
                                    style="border-radius: 15px;">
                            </div>
                            <div class="w-full lg:w-8 lg:flex-none flex flex-column p-2">
                                <h2 class="mb-2 text-900 font-bold">Privacy-enhancing technologies</h2>
                                <span class="text-700 text-lg">Tools, frameworks and methodologies designed to protect
                                    personal information. They include techniques such as data pseudonymization,
                                    federated learning and multiparty computation.
                                    These technologies balance data usage with privacy protection, safeguarding
                                    sensitive information from unauthorized access and ensuring compliance with data
                                    protection regulations.</span>
                            </div>
                            <div class="w-auto lg:w-1 lg:flex-none flex justify-content-end align-items-center p-2">
                                <Button text rounded label="Info" severity="secondary" class="text-xl"
                                    @click="showInfo">&#x203A;</Button>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 p-4">
                        <div class="flex flex-column lg:flex-row align-items-center"
                            style="border-radius: 12px; padding: 1rem; background-color: #E6E6E6;">
                            <div class="w-full lg:w-3 lg:flex-none p-2 flex justify-content-center">
                                <img src="/src/images/expertise/digital-twins.jpg" alt="Digital Twins"
                                    class="w-full h-auto object-cover block" style="border-radius: 15px;">
                            </div>
                            <div class="w-full lg:w-8 lg:flex-none flex flex-column justify-content-center p-2">
                                <h2 class="mb-2 text-900 font-bold">Digital Twins</h2>
                                <span class="text-600 text-lg">Virtual representations of physical entities, typically
                                    used to refer to manufacturing equipment in Industry 4.0. They simulate real-world
                                    counterparts using data from sensors and IoT devices.
                                    This technology enables real-time monitoring, predictive maintenance, and
                                    optimization, enhancing decision-making and efficiency across various
                                    sectors.</span>
                            </div>
                            <div class="w-auto lg:w-1 lg:flex-none flex justify-content-end align-items-center p-2">
                                <Button text rounded label="Info" severity="secondary" class="text-xl"
                                    @click="showInfo">&#x203A;</Button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 p-4">
                        <div class="flex flex-column lg:flex-row align-items-center"
                            style="border-radius: 12px; padding: 1rem; background-color: #E6E6E6;">
                            <div class="w-full lg:w-3 lg:flex-none p-2 flex justify-content-center">
                                <img src="/src/images/expertise/data-sharing-technologies.jpg"
                                    alt="Data Sharing Technologies" class="w-full h-auto object-cover block"
                                    style="border-radius: 15px;">
                            </div>
                            <div class="w-full lg:w-8 lg:flex-none flex flex-column justify-content-center p-2">
                                <h2 class="mb-2 text-900 font-bold">Data sharing infrastructures</h2>
                                <span class="text-600 text-lg">Frameworks and system architectures for secure and
                                    efficient data exchange across diverse stakeholders. Architectures such as Data
                                    Spaces use standards and technologies to facilitate interoperability and
                                    collaboration.
                                    They support innovation in the data economy by enabling technical standards, secure
                                    transfers, legal interoperability, and common decentralized marketplaces for data
                                    providers to publish on.</span>
                            </div>
                            <div class="w-auto lg:w-1 lg:flex-none flex justify-content-end align-items-center p-2">
                                <Button text rounded label="Info" severity="secondary" class="text-xl"
                                    @click="showInfo">&#x203A;</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<style scoped>
.custom-button {
    background-color: #E6E6E6;
    color: #000000;
    border-radius: 8px;
    transition: background-color 0s ease, color 0s;
}

.custom-button:hover {
    background-color: #a80000;
    color: #FFFFFF;
}

.image-container {
    position: relative;
    width: 100%;
    padding-top: 100%;
    overflow: hidden;
}

.image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.red-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #a800002a;
    pointer-events: none;
}

#hero {
    height: 700px;
    overflow: hidden;
}

@media screen and (min-width: 768px) {
    #hero {
        height: 400px;
    }
}

@media screen and (min-width: 1050px) {
    #hero>img {
        position: absolute;
    }

    #hero>div>p {
        max-width: 450px;
    }
}

@media screen and (max-width: 1050px) {
    #hero {
        height: 600px;
    }

    #hero>img {
        position: static;
        transform: scale(1);
        margin-left: auto;
    }

    #hero>div {
        width: 100%;
    }

    #hero>div>p {
        width: 100%;
        max-width: 100%;
    }
}


#expertise {
    max-width: 1400px;
    margin: auto;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
}

/* Style for chevron icon */
.chevron-link {
    color: #A80000;
    text-decoration: none;
}

/* Flexbox alignment for all elements in row */
@media screen and (min-width: 1024px) {
    .lg\\:w-3 {
        width: 33.33%;
    }

    .lg\\:w-7 {
        width: 60%;
    }

    .lg\\:w-2 {
        width: auto;
    }
}

/* Responsive adjustments */
@media screen and (max-width: 768px) {
    .flex-column {
        flex-direction: column;
    }

    .w-full {
        width: 100%;
    }

    /* Adjust chevron on smaller screens */
    .lg\\:w-2 {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
    }
}
</style>