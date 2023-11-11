import groq from "groq";

export const IMAGE = groq`
  ...,
  "altText": coalesce(alt, asset->altText),
  "blurDataURL": asset->metadata.lqip,
  'height': asset->metadata.dimensions.height,
  'url': asset->url,
  'width': asset->metadata.dimensions.width,
`;
