module.exports = {
  "presets": [
    "@babel/env"
  ],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    "realar/babel"
  ]
}
