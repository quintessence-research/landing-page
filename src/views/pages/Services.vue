<script setup>
import Footer from '@/views/pages/components/Footer.vue';
import Header from '@/views/pages/components/Header.vue';
import { useHead } from '@unhead/vue';

useHead({
    title: 'Our Services - Quintessence Research',
    meta: [
        { name: 'description', content: 'Explore our applied research consultancy services in the Circular Economy, Digital Product Passports, Digital Identities, Digital Twins, and Data Sharing.' },
        { property: 'og:title', content: 'Our Services - Quintessence Research' },
        { property: 'og:description', content: 'Explore our applied research consultancy services in the Circular Economy, Digital Product Passports, Digital Identities, Digital Twins, and Data Sharing.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://quintessenceresearch.com/services' },
        { property: 'og:image', content: 'https://quintessenceresearch.com/logos/qr_icon.png' },
    ],
    link: [{ rel: 'canonical', href: 'https://quintessenceresearch.com/services' }],
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Applied Research Consultancy Services",
                "url": "https://quintessenceresearch.com/services",
                "serviceType": "Applied Research",
                "provider": {
                    "@type": "Organization",
                    "name": "Quintessence Research",
                    "url": "https://quintessenceresearch.com"
                },
                "description": "Explore our applied research consultancy services in the Circular Economy, Digital Product Passports, Digital Identities, Digital Twins, and Data Sharing.",
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
                <div class="landing-wrapper overflow-hidden">
                    <!-- About Section -->
                    <div id="about" class="grid grid-nogutter surface-section text-800">
                        <div class="col-12 p-6 text-center md:text-left flex align-items-center">
                            <section>
                                <h1 class="text-6xl font-light text-gray-900 line-height-2">
                                    Services Offerings
                                </h1>
                                <p class="font-normal text-2xl line-height-3 md:mt-3 text-gray-800">
                                    Quintessence Research operates at three distinct levels of Technology Readiness
                                    Level (TRL) expertise, guiding clients from discovery to demonstration.
                                </p>
                            </section>
                        </div>

                        <!-- TRL 2-3 Section -->
                        <div class="col-12 p-6">
                            <section>
                                <h2 class="text-5xl font-bold text-gray-900 line-height-2">TRL 2-3: Discovery Phase:
                                    <h4 class="text-3xl font-light text-gray-800 mb-3">Understanding Emerging
                                        Technologies</h4>
                                </h2>
                                <Fieldset legend="Example Scenario">
                                    <p class="font-normal text-xl line-height-3 text-gray-800 italic mt-2">
                                        "A new technology (such as Digital Product Passports or Data Spaces) or
                                        regulation (for instance, the ESPR, or the GDPR) is emerging and gaining
                                        traction in the market.
                                        How does this impact your sector, company, or region?"
                                    </p>
                                </Fieldset>

                                <p class="font-normal text-xl line-height-3 text-gray-800 mt-3">
                                    In this phase, we collaborate with academic institutions and knowledge organizations
                                    (such as Research and Technology Organizations, RTOs) to drive scientific research
                                    in key and impactful areas. Our focus includes emerging topics and technologies,
                                    where we offer strategic direction for application development. Additionally, we
                                    assist in designing and developing system infrastructure and integrations for
                                    innovative technologies.
                                </p>
                            </section>
                        </div>

                        <!-- TRL 4-5 Section -->
                        <div class="col-12 p-6">
                            <section>
                                <h2 class="text-5xl font-bold text-gray-900 line-height-2">TRL 4-5: Development Phase:
                                    <h4 class="text-3xl font-light text-gray-800 mb-3">Transforming Ideas into
                                        Real-World Applications</h4>
                                </h2>

                                <Fieldset legend="Example Scenario">
                                    <p class="font-normal text-xl line-height-3 text-gray-800 italic mt-2">
                                        "You’ve identified a new regulation, technology, or standard that requires
                                        integration. How can it be developed, demonstrated, and validated within your
                                        unique context?"
                                    </p>
                                </Fieldset>
                                <p class="font-normal text-xl line-height-3 text-gray-800 mt-3">
                                    Here, we partner with companies, industry consortia, and research institutes to
                                    explore standardizations and applications in specific fields. We aim to create
                                    proof-of-concept validation prototypes in relevant environments. Our services
                                    include coordinating EU research funding applications and engaging in direct project
                                    work with our partners. We also develop comprehensive whitepapers and other
                                    publications as part of this process.
                                </p>
                            </section>
                        </div>

                        <!-- TRL 6-7 Section -->
                        <div class="col-12 p-6">
                            <section>
                                <h2 class="text-5xl font-bold text-gray-900 line-height-2">TRL 6-7: Demonstration Phase:
                                    <h4 class="text-3xl font-light text-gray-800 mb-3">Optimizing Mature Technologies
                                        for
                                        Industrial Use</h4>
                                </h2>
                                <Fieldset legend="Example Scenario">
                                    <p class="font-normal text-xl line-height-3 text-gray-800 italic mt-2">
                                        "You see an upcoming regulation/technological requirement that is essential for
                                        your
                                        sustainability or economic goals. Certain solutions are already available with a
                                        significant level of maturity. How can we make this work optimally for your
                                        context?"
                                    </p>
                                </Fieldset>
                                <p class="font-normal text-xl line-height-3 text-gray-800 mt-3">
                                    At this stage, we work with companies and industry consortia to adapt mature or
                                    emerging technologies for industrial applications. This involves customized
                                    prototype deployments, migration plans, whitepapers, and contracted work with
                                    internal teams. Our goal is to define and develop projects that meet specific
                                    objectives while objectively evaluating the benefits.
                                </p>

                            </section>
                        </div>

                        <Divider />
                        <div class="col-12 p-6">
                            <section>
                                <h2 class="text-5xl font-bold text-gray-900 line-height-2">Additional Services and
                                    Offerings</h2>

                                <!-- Panel for Introductory Consultations -->
                                <Panel>
                                    <h4 class="text-3xl font-light text-gray-800 mb-3">Introductory Consultations</h4>
                                    <p class="font-normal text-xl line-height-3 text-gray-800">
                                        Are you unsure about a particular technology or regulatory requirement? We offer
                                        introductory consultations to help you navigate the complexities of emerging
                                        trends and technologies. During these sessions, we work with you to identify
                                        your specific needs, opportunities, and challenges, ensuring you have a clear
                                        path forward.
                                    </p>
                                    <p class="font-normal text-xl line-height-3 text-gray-800">
                                        Whether it's planning for demo deliverables, publishing scientific papers, or
                                        strategizing for future growth, we provide guidance tailored to your
                                        unique context. This could also include exploring the impact of upcoming
                                        regulations, technological developments, or new market opportunities.
                                    </p>
                                </Panel>

                                <!-- Panel for Customized Technology Introduction Presentations -->
                                <Panel>
                                    <h4 class="text-3xl font-light text-gray-800 mb-3">Customized Technology
                                        Introduction Presentations</h4>
                                    <p class="font-normal text-xl line-height-3 text-gray-800">
                                        Our customized technology introduction presentations are designed to demystify
                                        new technologies and their relevance to your sector or organization. We provide
                                        a comprehensive overview, including:
                                    </p>
                                    <ul class="ml-4 list-disc">
                                        <li>Legal considerations related to the technology.</li>
                                        <li>EU-level initiatives and standardization efforts.</li>
                                        <li>Industry trends and adoption rates.</li>
                                        <li>Opportunities for innovation and competitive advantage.</li>
                                    </ul>
                                    <p class="font-normal text-xl line-height-3 text-gray-800">
                                        These sessions include exploratory discussions specific to your sector, company,
                                        or region, enabling you to better understand the implications of adopting new
                                        technologies and how they can be leveraged for growth.
                                    </p>
                                </Panel>

                                <!-- Panel for Open Projects -->
                                <Panel>
                                    <h4 class="text-3xl font-light text-gray-800 mb-3">Open Projects</h4>
                                    <p class="font-normal text-xl line-height-3 text-gray-800">
                                        Do you have a project proposal that falls outside our core service tiers? Or are
                                        you looking for expertise to support an ongoing project? We are open to
                                        exploring collaborative opportunities that do not fit neatly into predefined
                                        categories.
                                    </p>
                                    <p class="font-normal text-xl line-height-3 text-gray-800">
                                        Whether it's conducting research, developing prototypes, or creating custom
                                        technology solutions, we are flexible and adaptive in our approach. We will work
                                        with you to design a tailored project proposal that aligns with your specific
                                        goals and requirements.
                                    </p>
                                    <p class="font-normal text-xl line-height-3 text-gray-800">
                                        Our aim is to add value to your project by leveraging our expertise in emerging
                                        technologies, regulatory landscapes, and innovation strategies. Reach out to us
                                        with your unique needs, and we will work together to bring your vision to life.
                                    </p>
                                </Panel>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
</template>

<style scoped>
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

.text-6xl {
    font-size: 2.5rem;
}

.text-5xl {
    font-size: 2.25rem;
}

.text-3xl {
    font-size: 1.75rem;
}
</style>
