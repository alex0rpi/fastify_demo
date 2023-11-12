export const bookSchema = {
  description: 'This represents a book',
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    title: { type: 'string' },
    author: { type: 'string' },
    publishedAt: { type: 'string', format: 'date-time' },
  },
  required: ['title', 'author'],
};

export const errorSchema = {
  description: 'This represents an error',
  type: 'object',
  properties: {
    code: { type: 'integer', format: 'int32' },
    message: { type: 'string' },
  },
  required: ['code', 'message'],
};
