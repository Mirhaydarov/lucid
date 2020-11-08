"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor/import/", {
        outputStyle: "scss",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "1.875rem", // gutter width - 30px
        mobileFirst: false,
        mixinNames: {
            container: "container"
        },
        container: {
            fields: "0.9375rem" // side fields - 15px
        },
        breakPoints: {
            xs: {
                width: "17rem" // 320px
            },
            sm: {
                width: "20rem" // 576px
            },
            md: {
                width: "36rem" // 768px
            },
            lg: {
                width: "48rem" // 992px
            },
            xl: {
                width: "62rem" // 1200px
            },
            xlg: {
                width: "75rem" // 1200px
            }
        }
    });
    cb();
});
