export default{
    
        name: 'textCallImg',
        title: 'textCallImg',
        type: 'object',
        fields: [
            {
                name: 'imagen',
                title: 'imagen',
                type: 'image',
            },{
                name: 'text',
                title: 'text',
                type: 'array',
                
                of: [
                  {
                    type: 'block'
                  }
                ]
            }, {
                name: 'button',
                title: 'button',
                type: 'object',
                fields:[
                    {
                        name: 'text',
                        title: 'text',
                        type: 'string',
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