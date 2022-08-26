document.addEventListener("DOMContentLoaded", function () {
    window["app_share"].get("./Sum").then((factory) => {
        const Module = factory();

        console.log(Module.Sum(1, 1));

        return Module;
    });
});
