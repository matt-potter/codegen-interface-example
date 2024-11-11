import type { BookResolvers } from "./../graphql/generated/types.generated.js";
/*
 * Note: This object type is generated because "BookMapper" is declared. This is to ensure runtime safety.
 *
 * When a mapper is used, it is possible to hit runtime errors in some scenarios:
 * - given a field name, the schema type's field type does not match mapper's field type
 * - or a schema type's field does not exist in the mapper's fields
 *
 * If you want to skip this file generation, remove the mapper or update the pattern in the `resolverGeneration.object` config.
 */
export const Book: BookResolvers = {
  /* Implement Book resolver logic here */
  author: async (_parent, _arg, _ctx) => {
    /* Book.author resolver is required because Book.author exists but BookMapper.author does not */
  },
};
