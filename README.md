CSS-Demos
=========

some demos for bleeding-edge css3-features.

Viewing
-------

All the interesting stuff is located in the public-directory and should be
able to run without any webserver. Since I didn't want to risk any kind of
DMCA-Related stuff, the assets (notably `public/assets/demo.mp4`) are not
included in this repository. In order to view the `shader.html`-demo you will
need to replace the video-src to any h264-encoded video-file.

In case you need a webserver, you can simply use the one located in `app.js`.
Usage (node.js is required):

    npm install
    node app.js


Browser-Support
---------------

At the time of writing, the demos require non-standard browsers to be viewed
correctly.

 * `shader.html` – google-chrome canary
   (https://tools.google.com/dlpage/chromesxs), you'll need to enable
   the CSS-Shader-Support in chrome://flags

 * `blendmodes.html` - adobium (the experimental chromium-build by adobe, to be
   found here: https://github.com/adobe/webkit/downloads)
