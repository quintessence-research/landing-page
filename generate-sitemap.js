const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

async function generateSitemap() {
    const sitemap = new SitemapStream({ hostname: 'https://quintessenceresearch.com' });
    const routes = ['/', '/about', '/contact', '/services']; // Add more routes as needed

    routes.forEach(route => {
        sitemap.write({ url: route, changefreq: 'monthly', priority: 0.8 });
    });

    sitemap.end();

    const sitemapXML = await streamToPromise(sitemap);
    createWriteStream(path.join(__dirname, 'public', 'sitemap.xml')).write(sitemapXML);
    console.log('Sitemap generated successfully.');
}

generateSitemap().catch(err => {
    console.error('Failed to generate sitemap:', err);
});