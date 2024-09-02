<script setup>
import { useToast } from "primevue/usetoast";
import { ref } from 'vue';

// Reactive state
const isMenuVisible = ref(false);
const logoUrl = 'logos/qr_logo_white.png';
const toast = useToast();

// Method to toggle the menu visibility
const toggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value;
};
const showInfoHeader = () => {
    console.log("Making a toast");
    toast.add({ severity: 'info', summary: 'Coming soon!', group: "br", detail: 'Parts of the website are still under construction. Check back soon.', life: 3000 });
};
</script>

<template>
    <Toast position="bottom-right" group="br" />

    <div class="header" style="background-color: #a80000; padding: 1rem;">
        <div class="header-content flex justify-center text-center align-items-center mx-auto"
            style="max-width: 1504px;">
            <router-link to="/" class="logo">
                <img :src="logoUrl" alt="Company Logo" height="70" />
            </router-link>
            <a class="cursor-pointer block lg:hidden p-ripple" v-ripple @click="toggleMenu">
                <i class="pi pi-bars text-4xl text-white"></i>
            </a>
            <div :class="{ 'flex': isMenuVisible, 'hidden': !isMenuVisible, 'lg:flex': true }"
                class="menu-container lg:flex w-full lg:w-auto left-0 px-6 lg:px-0" style="top: 100px;">
                <ul
                    class="menu-list list-none p-0 m-0 flex flex-col lg:flex-row text-center align-items-center lg:items-end">
                    <li class="p-ripple" v-ripple>
                        <router-link to="/about"
                            class="menu-item flex justify-content-between m-0 md:ml-5 px-0 py-3 text-xl font-medium"
                            style="color: #E6E6E6;">
                            <span>About</span>
                        </router-link>
                    </li>
                    <li class="p-ripple" v-ripple>
                        <router-link to="/services" class="menu-item flex m-0 md:ml-5 px-0 py-3 text-xl font-medium"
                            style="color: #E6E6E6;">
                            <span>Services</span>
                        </router-link>
                    </li>
                    <li class="p-ripple" v-ripple>
                        <Button label="Publications" class="menu-item flex m-0 md:ml-5 px-0 py-3 text-xl font-medium"
                            style="color: #E6E6E6; background: none; border: none;" text
                            @click="showInfoHeader('Publications')" :plain="true" />
                    </li>
                    <li class="p-ripple" v-ripple>
                        <Button label="Blog" class="menu-item flex m-0 md:ml-5 px-0 py-3 text-xl font-medium"
                            style="color: #E6E6E6; background: none; border: none;" @click="showInfoHeader('Blog')" />
                    </li>
                    <li class="p-ripple" v-ripple>
                        <router-link to="/contact" class="menu-item flex m-0 md:ml-5 px-0 py-3 text-xl font-medium"
                            style="color: #E6E6E6;">
                            <span>Contact</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>



<style scoped>
.hidden {
    display: none;
}

.header {
    padding: 1rem;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1504px;
    margin: 0 auto;
}

.menu-container {
    position: absolute;
    background-color: #a80000;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.menu-list {
    display: flex;
    flex-direction: column;
}

.menu-item {
    color: #E6E6E6;
}

@media (min-width: 992px) {
    .menu-container {
        position: static;
        background-color: transparent;
        padding: 0;
        box-shadow: none;
    }

    .menu-list {
        flex-direction: row;
    }
}

@media (max-width: 991px) {
    .menu-container {
        left: 0;
    }
}
</style>
