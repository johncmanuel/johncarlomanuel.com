/**
 * How to import from unplugin icons
 * Go here: https://icon-sets.iconify.design/
 * Then search for the icon set (i.e i'm using fa6-brands ) and download the npm package for it (see https://github.com/unplugin/unplugin-icons?tab=readme-ov-file#install-by-icon-set)
 * Then import the icons you want to use from the package (i.e i want to get GitHub, so search for GitHub on the website and get the exact naming
 * for that icon, in this case it's fa6-brands:github so import as virtual:icons/fa6-brands/github below).
 */

import GitHub from "virtual:icons/fa6-brands/github";
import LinkedIn from "virtual:icons/fa6-brands/linkedin";
import Twitter from "virtual:icons/fa6-brands/twitter";
import Youtube from "virtual:icons/fa6-brands/youtube";
import Email from "virtual:icons/fa6-solid/envelope";
import X from "virtual:icons/fa6-brands/x-twitter";

export { GitHub, LinkedIn, Twitter, Youtube, Email, X };
