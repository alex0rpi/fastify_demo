export const getBooks = async (req, reply) => {
  return [
    { id: 1, title: 'The Great Gatsby' },
    { id: 2, title: 'The Da Vinci Code' },
    { id: 3, title: 'Angels & Demons' },
  ];
};

export const postBook = async (req, reply) => {
  const { id, title } = req.body;
  // fastify.log.info(req.body);
  return {
    id,
    title,
  };
};
