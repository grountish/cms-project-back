
export default{
    
        name: 'richText',
        title: 'richText',
        type: 'object',
        fields: [
            {
                name: 'content',
                title: 'content',
                type: 'blockContent',
            },
        ],preview: {
            select: {
              title: 'content'
            },
          }
    
}