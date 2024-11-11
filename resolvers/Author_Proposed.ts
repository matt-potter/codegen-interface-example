import type { AuthorResolvers } from "./../graphql/generated/types.generated.js";

export interface RequiredAuthorResolvers extends AuthorResolvers {
	books: NonNullable<AuthorResolvers["books"]>;
}

const resolvers: RequiredAuthorResolvers = {
	books: async (_parent, _arg, _ctx) => {
		/* Author.books resolver is required because Author.books exists but AuthorMapper.books does not */
	},
};
