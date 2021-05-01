# [Jackal](http://jackal.surge.sh)

Watch live TV channels from across the globe with your friends and family...

It is an open source project that uses dataset provided by [IPTV](https://github.com/iptv-org/iptv) and truncate explicit data so streams are suitable as general purpose content for viewers.

## Lighthouse

Please see latest Google Lightbox audit [here](http://jackal.surge.sh/report.html).

## Process

Jackal is proud to pass and score 100 in most of Google's Lightbox tests. As Jackal is hosted on Surge, some metrics that ask for HTTP lowers the score from 100 to 93.

How did it achieve that?

- Cut CSS framework (previously, it used React bootstrap which added on lot of overhead like jQuery, Popper, Bootstrap etc.)
- Cut unique dependencies and look for minute plugins. Site requires accordion for data presentation so it was dependent on Bootstrap. After careful review of source code, I managed to get rid of Bootstrap with help from react-accessible-accordion plugin.
- Focus on accessibility, semantic markup that offers best SEO practices
- Cut down on external media if possible (any large background banners etc.)
- Cut down on external or google fonts
- Investigate server side code to cut down Javascript usage. Jackal has quite a code to parse dataset from IPTV's repository. After investigation, I found that every page load, refresh or render triggers server to make those calls to IPTV repository and parse entire dataset. I managed to use `ncookies` plugin and put in check via cookies and localStorage to test if data was parsed successfully, unload any server request. It helped in making user experience more snappier.

## Features

- Jackal is built using NextJS and React
- Hosted on Surge so it can run HTTP based streams for seamless user experience

## Addons

- To run lighthouse test, install `lighthouse` npm package globally on your machine and perform the test by running `y report`, make sure to create a `public` directory first
- Please use Google Chrome browser using PC/Laptop to cast live streams to your TV via Chromecast

## Issues

- Please open any issues or bugs you notice [here](https://github.com/tpkahlon/jackal/issues)
- If you notice any live stream is broken, please copy the URL for the concerned stream, test it [here](https://hls-js.netlify.app/demo/?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library)
- If it does not load, please flag the stream at [IPTV](https://github.com/iptv-org/iptv/issues) issues section.
