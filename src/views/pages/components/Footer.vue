<script setup>
import { useToast } from "primevue/usetoast";
import { computed, ref } from 'vue';

const toast = useToast();

// Function to format the current date
const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
};

// Current date calculated once during build
const currentDate = ref(formatDate(new Date()));

const showInfoHeader = () => {
    console.log("Making a toast");
    toast.add({ severity: 'info', summary: 'Coming soon!', detail: 'Parts of the website are still under construction. Check back soon.', life: 3000 });
};
const logoUrl = computed(() => {
    return `logos/qr_logo.png`
});
</script>
<template>
    <Toast />
    <div class="footer">
        <div class="footer-content">
            <div class="footer-top">
                <div class="footer-logo">
                    <router-link to="/" class="flex items-center cursor-pointer">
                        <img :src="logoUrl" alt="companylogo" class="logo-img" />
                    </router-link>
                </div>

                <div class="footer-links">
                    <div class="footer-column">
                        <h4 class="font-medium text-2xl text-900 mb-3">Company</h4>
                        <router-link to="/about" class="text-xl mb-2 text-700 block">About</router-link>
                        <router-link to="/services" class="text-xl mb-2 text-700 block">Services</router-link>
                        <a @click="showInfoHeader('Publications')"
                            class="cursor-pointer text-xl mb-2 text-700 block">Publications</a>
                        <a @click="showInfoHeader('Blog')" class="cursor-pointer text-xl mb-2 text-700 block">Blog</a>
                        <router-link to="/contact" class="text-xl text-700 block">Contact</router-link>
                    </div>
                </div>
            </div>
            <div class="footer-bottom text-center text-700 mt-4">
                &copy; {{ new Date().getFullYear() }} Quintessence Research B.V.&nbsp;&nbsp;All rights reserved.
                <br />
                Site last updated on {{ currentDate }}.
                <br />
                Adapted from the <a href="https://github.com/primefaces/sakai-vue" target='_blank'
                    rel='noreferrer'>Sakai PrimeVue</a> template. Images sourced from <a href="https://www.freepik.com"
                    target='_blank' rel='noreferrer'>FreePik</a>.
            </div>
        </div>
    </div>
</template>



<style scoped>
.footer {
    background-color: #E6E6E6;
    padding: 2rem 1rem;
    width: 100%;
}

.footer-content {
    max-width: 1504px;
    margin: 0 auto;
}

.footer-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
}

.footer-logo {
    margin-bottom: 1rem;
}

.logo-img {
    height: 50px;
    max-width: 100%;
}

.footer-links {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-column {
    text-align: center;
}

.footer-bottom {
    font-size: 0.875rem;
}

@media (min-width: 1024px) {
    .footer-top {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }

    .logo-img {
        height: 80px;
        max-width: 100%;
    }

    .footer-logo {
        margin-bottom: 0;
    }

    .footer-links {
        flex-direction: row;
        align-items: flex-start;
    }

    .footer-column {
        text-align: left;
        margin: 0 1rem;
    }
}
</style>