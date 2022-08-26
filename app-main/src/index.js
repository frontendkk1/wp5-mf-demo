document.addEventListener("DOMContentLoaded", function () {
    const scriptElement = document.createElement("script");

    scriptElement.src = "http://localhost:3001/remoteEntry.js";
    scriptElement.type = "text/javascript";
    scriptElement.async = true;

    scriptElement.onload = () => {
        console.log(`module loaded`);

        window["app_share"].get("./Sum").then((factory) => {
            const Module = factory();

            console.log(Module.Sum(1, 1));

            return Module;
        });
    };

    document.head.appendChild(scriptElement);
});
