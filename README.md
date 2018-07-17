# map-modules

Expanded ASN.1 modules for Mobile Application Part (MAP) (3GPP TS 29.002) in JSON format.

Converted using [asn1exp](https://www.npmjs.com/package/asn1exp) from http://www.3gpp.org/ftp/specs/archive/29_series/29.002/ASN.1/.

The files are under the dist folder. Just load up the ones you need:

```
const mapMobileServiceOperations = require('map-modules/dist/MAP-MobileServiceOperations.EXP.min.json');
```
