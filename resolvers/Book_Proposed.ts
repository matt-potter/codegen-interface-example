import type { BookResolvers } from "./../graphql/generated/types.generated.js";

export interface RequiredBookResolvers extends BookResolvers {
	author: NonNullable<BookResolvers["author"]>;
}

const resolvers: RequiredBookResolvers = {
	author: async (_parent, _arg, _ctx) => {
		/* Book.author resolver is required because Book.author exists but BookMapper.author does not */
	},
};
