export default {
    name: "pageStaticContent",
    title: "Page Static Content",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            of: [
                {
                    type: "block",
                },
            ],
        },
        {
            name: "indicator",
            title: "Indicator",
            type: "string",
        },
        {
            name: "order",
            title: "Order",
            type: "number",
        },
    ],
};
