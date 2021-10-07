// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import Page from './documents/Page';
import Settings from './documents/Settings';
import hero from './objects/hero'
import textCallImg from './objects/textCallImg'
import youtube from './objects/youtube'
import richText from './objects/richText'
import blockContent from './objects/blockContent'
import marquee from './objects/marquee'
import blockHighlight from './objects/blockHighlight'
import contact from './objects/contact'
import localeString from './objects/localeString'
import localeRich from './objects/localeRich'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    Page,
    Settings,
    hero,
    textCallImg,
    youtube,
    richText,
    blockHighlight,
    marquee,
    blockContent,
    contact,
    localeString,
    localeRich
  ]),
})
