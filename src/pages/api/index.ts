import { ApolloServer } from 'apollo-server-micro';
import { DateTimeResolver } from 'graphql-scalars';
import { NextApiHandler } from 'next';
import { asNexusMethod, makeSchema, objectType } from 'nexus';
import path from 'path';
import cors from 'micro-cors';
import { Post } from '../../features/posts/post.objectType';
import { User } from '../../features/users/user.objectType';
import {
  postMutationDefinitions,
  postQueryDefinitions,
} from '../../features/posts';
import {
  userMutationDefinitions,
  userQueryDefinitions,
} from '../../features/users';

export const GQLDate = asNexusMethod(DateTimeResolver, 'date');

const types = [Post, User];

const Query = objectType({
  name: 'Query',
  definition(t) {
    postQueryDefinitions(t);
    userQueryDefinitions(t);
  },
});

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    postMutationDefinitions(t);
    userMutationDefinitions(t);
  },
});

export const schema = makeSchema({
  types: [...types, Query, Mutation, GQLDate],
  outputs: {
    typegen: path.join(process.cwd(), 'generated/nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'generated/schema.graphql'),
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
