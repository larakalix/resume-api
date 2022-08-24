export default {
    name: "shortCode",
    type: "object",
    title: "Component Shortcode",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Code",
        },
        {
            name: "type",
            type: "array",
            title: "Type",
            of: [
                {
                    type: "string",
                },
            ],
        }
    ],
};
