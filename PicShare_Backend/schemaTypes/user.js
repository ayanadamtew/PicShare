export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'username',
            title: 'Username',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }
    ]
    }