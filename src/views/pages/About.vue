<script setup>
import Footer from '@/views/pages/components/Footer.vue';
import Header from '@/views/pages/components/Header.vue';
import { useHead } from '@unhead/vue';

useHead({
    title: 'About Us - Quintessence Research',
    meta: [
        { name: 'description', content: 'Learn more about Quintessence Research, a research consultancy firm focused on the Circular Economy, Digital Product Passports, Digital Identities, Digital Twins, and Data Sharing.' },
        { property: 'og:title', content: 'About Us - Quintessence Research' },
        { property: 'og:description', content: 'Learn more about Quintessence Research, an IT consultancy firm focused on the Circular Economy, Digital Product Passports, Digital Identities, Digital Twins, and Data Sharing.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://quintessenceresearch.com/about' },
        { property: 'og:image', content: 'https://quintessenceresearch.com/logos/qr_icon.png' },
    ],
    link: [{ rel: 'canonical', href: 'https://quintessenceresearch.com/about' }],
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "AboutPage",
                "name": "About Us - Quintessence Research",
                "url": "https://quintessenceresearch.com/about",
                "description": "Learn more about Quintessence Research, a research consultancy firm focused on the Circular Economy, Digital Product Passports, Digital Identities, Digital Twins, and Data Sharing.",
            }),
        },
    ],
});
</script>
<template>
    <div class="layout-container">
        <Header></Header>
        <main class="content">
            <div class="surface-0 flex justify-content-center">
                <div id="about" class="landing-wrapper overflow-hidden">
                    <div class="grid grid-nogutter surface-section text-800">
                        <div class="col-12 p-6 text-center md:text-left flex align-items-center">
                            <section>
                                <h1 class="text-6xl font-bold text-gray-900 line-height-2">
                                    <span class="font-light block">About</span>
                                    Quintessence Research
                                </h1>
                                <p class="font-normal text-2xl line-height-3 md:mt-3 text-gray-800">
                                    Quintessence Research is a consultancy specializing in bridging the gap between
                                    fundamental research
                                    and industrial application. We collaborate with companies, research institutes, and
                                    academic
                                    institutions to identify real-world challenges, opportunities, and cutting-edge
                                    solutions that align
                                    with human ideals. Our areas of expertise encompass advancements in the Next-Gen
                                    Internet,
                                    Sustainability, and Smart Industry, and all the surrounding technologies.
                                </p>
                                <p class="font-normal text-2xl line-height-3 md:mt-3 text-gray-800">
                                    With over five years of experience in both industry and applied research, we are
                                    uniquely positioned
                                    to operate at this intersection. Quintessence partners with clients to develop
                                    project plans and
                                    timelines that meet their research objectives effectively. We also offer knowledge
                                    of EU
                                    funding programs and mechanisms, and facilitate working with international consortia
                                    to craft
                                    successful proposals.
                                </p>
                                <p class="font-normal text-2xl line-height-3 md:mt-3 text-gray-800">
                                    Our core focus at Quintessence is the achievement of research objectives and project
                                    deliverables. We
                                    are significantly experienced in creating self-contained technical prototypes,
                                    demonstrations, and
                                    software solutions that
                                    fulfill project goals, complete with comprehensive documentation, publications, and
                                    dissemination. Our
                                    expertise spans the entire project lifecycle - from conception to delivery -
                                    including system
                                    architecture documents, agile feedback, cloud deployments, and end-to-end testing.
                                    We also contribute
                                    to industry and web standardization efforts regarding all of these aspects.
                                </p>
                                <p class="font-normal text-2xl line-height-3 md:mt-3 text-gray-800">
                                    Additionally, Quintessence is dedicated to the principles of the open-source
                                    movement and
                                    transparency.
                                </p>
                            </section>
                        </div>
                        <!-- <Divider />
                        <div class="col-12 p-6 text-center md:text-left flex align-items-center">
                            <section>
                                <h1 class="text-6xl font-bold text-gray-900 line-height-2">
                                    <span class="font-light block">People</span>
                                </h1>
                            </section>
                        </div> -->
                    </div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
</template>

<style scoped>
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
</style>
