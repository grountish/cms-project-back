import S from '@sanity/desk-tool/structure-builder'
import React from "react"

const hiddenDocTypes = {
 
 
}


const WebPreview = ({ document }) => {
    const url = `https://cmsfront.netlify.app/x/${document.displayed.name}/?preview=true`
  console.log(document.displayed.name);

  return (
    <iframe
      src={url}
      frameBorder={0}
      width="100%"
      height="100%"
    />
  )
}

export const getDefaultDocumentNode = ({ schemaType }) => {
  // Conditionally return a different configuration based on the schema type
 
    return S.document().views([
      S.view.form(),
      S.view.component(WebPreview).title("Web Preview"),
    ])
  
}
export default () =>
  S.list()
    .title('Content')
    .items([
      ...Object.entries(hiddenDocTypes).map(([id, title]) => {
        return S.listItem().title(title).child(S.editor().schemaType(id).documentId(id).WebPreview(title).title(title))
      }),

      // Add a visual divider (optional)
      S.divider(),

      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems()
        .filter(listItem => !Object.keys(hiddenDocTypes).includes(listItem.getId()))
    ])
