export default{
    name:'postedBy',
    title: 'PostedBy',
    type: 'reference',
    to: [{type: 'user'}],
    fields: [
        {
            name: 'userName',
            title: 'UserName',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'string',
        },
    ]
}