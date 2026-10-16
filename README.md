# Dr. Zee Hair Restoration website

This repository contains the public static website and its GitHub Pages deployment workflow. Private client source bundles and intermediate packages are intentionally excluded.

The published site is built from `site/`. GitHub Pages project URLs use a repository subpath (for example `/Dr-Zee/`), so `scripts/build-pages.mjs` rewrites internal absolute paths in the deployment artifact while leaving the cPanel source files unchanged.

Consultation form delivery is not connected. The form clearly reports that enquiries are not sent until an authorized clinic endpoint is configured.
