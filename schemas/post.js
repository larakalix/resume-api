export default {
    name: "post",
    title: "Posts",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            name: "author",
            title: "Author",
            type: "reference",
            to: { type: "author" },
        },
        {
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "banner",
            title: "Background banner",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
        },
        {
            name: "relatedPosts",
            title: "Related",
            type: "array",
            of: [{ type: "reference", to: { type: "post" } }],
        },
        {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
        },
        {
            name: "body",
            title: "Body",
            type: "blockContent",
        },
        {
            name: "content",
            title: "Content",
            type: "markdown",
            description:
                "A Github flavored markdown field with image uploading",
        },
        {
            name: "showNewsletter",
            title: "Show newsletter form",
            type: "boolean",
        },
        {
            name: "showIndexes",
            title: "Show Indexes",
            type: "boolean",
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
        },
    ],

    preview: {
        select: {
            title: "title",
            author: "author.name",
            media: "mainImage",
        },
        prepare(selection) {
            const { author } = selection;
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`,
            });
        },
    },
};
