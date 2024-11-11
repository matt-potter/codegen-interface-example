interface Book {
	id: string;
	title: string;
}

interface Author {
	id: string;
	name: string;
}

export type { Author as AuthorMapper, Book as BookMapper };
