module.exports = {
  "output": {
    library: 'hydrogen-widget',
    libraryTarget: 'umd'
  },
  "externals": {
    "@angular/core": "@angular/core",
    "@angular/common": "@angular/common",
    "@angular/platform-browser": "@angular/platform-browser",
    "@angular/platform-browser-dynamic": "@angular/platform-browser-dynamic",
    "@angular/elements": {
      root: "ng.elements",
      commonjs: "@angular/elements",
      commonjs2: "@angular/elements",
      amd: '@angular/elements'
    }
  }
};
