const {FuseBox, Sparky} = require("fuse-box");

const fuse = FuseBox.init({
    homeDir: "./src",
    package: {
        name: '@f/fuse-box-npm-package-seed',
        main: 'index.ts'
    },
		globals: {'@f/fuse-box-npm-package-seed': '*'},
    output: "dist/$name.js",
});


fuse.bundle("index.js")
    .instructions("> index.ts");

fuse.run();
