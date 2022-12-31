import { ApolloServer } from 'apollo-server-micro';
import { DateTimeResolver } from 'graphql-scalars';
import cors from 'micro-cors';
import { NextApiHandler } from 'next';
import { asNexusMethod, makeSchema, objectType } from 'nexus';
import path from 'path';
import { mutationDefinitions } from '../../graphql/mutations/mutations.sourceType';
import { queryDefinitions } from '../../graphql/queries/queries.sourceType';
import { types } from '../../graphql/types/types.sourceType';

export const GQLDate = asNexusMethod(DateTimeResolver, 'date');

const Query = objectType({
  name: 'Query',
  definition(t) {
    queryDefinitions(t);
  },
});

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    mutationDefinitions(t);
  },
});

export const schema = makeSchema({
  types: [...types, Query, Mutation, GQLDate],
  outputs: {
    typegen: path.join(process.cwd(), 'src/generated/nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'src/generated/schema.graphql'),
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

let apolloServerHandler: NextApiHandler;

async function getApolloServerHandler() {
  const apolloServer = new ApolloServer({ schema });

  if (!apolloServerHandler) {
    await apolloServer.start();

    apolloServerHandler = apolloServer.createHandler({
      path: '/api',
    });
  }

  return apolloServerHandler;
}

const handler: NextApiHandler = async (req, res) => {
  const apolloServerHandler = await getApolloServerHandler();

  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }

  return apolloServerHandler(req, res);
};

export default cors()(handler);
