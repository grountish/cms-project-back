export default{
    
        name: 'hero',
        title: 'hero',
        type: 'object',
        fields: [
            {
                name: 'background',
                title: 'background',
                type: 'image',
            },{
                name: 'text',
                title: 'text',
                type: 'localeRich',
            }, {
                name: 'button',
                title: 'button',
                type: 'object',
                fields:[
                    {
                        name: 'text',
                        title: 'text',
                        type: 'localeString',
                    },
                    {
                        name: 'link',
                        title: 'link',
                        type: 'url',
                    },
                ]
            }
        ],
    
}