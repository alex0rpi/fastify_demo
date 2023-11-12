import { bookSchema, errorSchema } from '../schemas/index.js';
import { getBooks, postBook } from '../controllers/bookController.js';

export default async function (fastify, opts) {
  fastify.addSchema({
    $id: 'book',
    ...bookSchema,
  });

  fastify.addSchema({
    $id: 'error',
    ...errorSchema,
  });

  const getBooksOpts = {
    schema: {
      description: 'Get all books',
      tags: ['books'],
      response: {
        200: {
          description: 'Successful response',
          type: 'array',
          items: { $ref: 'book#' },
        },
        500: {
          description: 'Server Error',
          $ref: 'error#',
        },
      },
    },
    handler: getBooks,
  };

  const postBooksOpts = {
    schema: {
      description: 'Post a book',
      tags: ['books'],
      response: {
        200: {
          description: 'Successful response',
          type: 'array',
          items: { $ref: 'book#' },
        },
        500: {
          description: 'Server Error',
          $ref: 'error#',
        },
      },
    },
    handler: postBook,
  };

  // Tell my routes that I'm using these schemas.
  fastify.get('/books', getBooksOpts);

  fastify.post('/books', postBooksOpts);

  fastify.get('/', async function (request, reply) {
    return { root: true };
  });
}
