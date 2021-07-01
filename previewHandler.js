import React from "react"
import S from "@sanity/desk-tool/structure-builder"


const WebPreview = ({ document }) => {
    
    const url = `https://cmsfront.netlify.app/x/${document.name}/?preview=true`
 

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

export default S.defaults()