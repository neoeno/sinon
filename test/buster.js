var config = module.exports;

config.node = {
    environment: "node",
    rootPath: "../",
    sources: [
        "lib/sinon.js",
        "lib/sinon/*.js",
        "lib/sinon/util/*.js"
    ],
    tests: [
        "test/**/*.js"
    ]
};

config.coverage = {
    extends: "node",
    "buster-istanbul": {
        outputDirectory: "coverage",
        format: "lcov",
        excludes: ["**/*.json"]
    },
    extensions: [
        require("buster-istanbul")
    ]
};
