// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    site: "https://NathanViaud.github.io",
    base: "my-pokedex",
    integrations: [
        starlight({
            title: "My Pokedex",
            social: {
                github: "https://github.com/withastro/starlight",
            },
        }),
    ],
});
