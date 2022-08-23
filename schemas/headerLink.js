export default {
    name: "headerLink",
    title: "Header Link",
    type: "document",
    fields: [
        {
            name: "route",
            title: "Route",
            type: "string",
        },
        {
            name: "anker",
            title: "Anker",
            type: "string",
        },
        {
            name: "label",
            title: "Label",
            type: "string",
        },
        {
            name: "order",
            title: "Order",
            type: "number",
        },
        {
            name: "highlight",
            title: "Highlight",
            type: "boolean",
        },
        {
            name: "highlightColor",
            title: "Highlight Color",
            type: "string",
        },
        {
            name: "isOnMobile",
            title: "Is on Mobile",
            type: "boolean",
        },
        {
            name: "routeToShow",
            title: "Route to Show",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
        },
    ],
};
