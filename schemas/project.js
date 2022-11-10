export default {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "link",
            title: "Link",
            type: "string",
        },
        {
            name: "github",
            title: "Github",
            type: "string",
        },
        {
            name: "order",
            title: "Order",
            type: "number",
        },
        {
            name: "banner",
            title: "Project preview",
            type: "image",
            options: {
                hotspot: true,
            },
        },
    ],
};
