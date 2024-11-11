import type { AuthorResolvers } from "./../graphql/generated/types.generated.js";
/*
 * Note: This object type is generated because "AuthorMapper" is declared. This is to ensure runtime safety.
 *
 * When a mapper is used, it is possible to hit runtime errors in some scenarios:
 * - given a field name, the schema type's field type does not match mapper's field type
 * - or a schema type's field does not exist in the mapper's fields
 *
 * If you want to skip this file generation, remove the mapper or update the pattern in the `resolverGeneration.object` config.
 */
export const Author: AuthorResolvers = {
  /* Implement Author resolver logic here */
  books: async (_parent, _arg, _ctx) => {
    /* Author.books resolver is required because Author.books exists but AuthorMapper.books does not */
  },
};
