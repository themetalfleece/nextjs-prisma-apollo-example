## This is based on an [example](https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-nextjs), with the directory structure having changed.

## Its dependencies are updated daily, so it can also be used as a template.

# Fullstack Example with Next.js (GraphQL API)

This example shows how to implement a **fullstack app in TypeScript with [Next.js](https://nextjs.org/)** using [React](https://reactjs.org/), [Apollo Client](https://www.apollographql.com/docs/react/) (frontend), [Nexus Schema](https://nxs.li/components/standalone/schema) and [Prisma Client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client) (backend). It uses a MongoDB database, which can easily change.

# Getting started

### 1. Download example and install dependencies

Download this example:

```
git clone https://github.com/themetalfleece/nextjs-prisma-apollo-example.git
```

Or, create a repo by pressing `Use this template` at GitHub.

Install yarn:
```
npm i -g yarn
```

Install npm dependencies:

```
cd nextjs-prisma-apollo-example
yarn
```

### 2. Generate files

Run the following to generate the types, schema and model.

You need to run this every time you make changes to `.prisma` file or to `graphql` files, as it generates the `schema.prisma`, `nexus-typegen.ts` and `schema.graphql` files which are used by the app.

```
yarn generate
```

### 3. Add you connection details

Copy the `.env.example` file to a `.env` file next to it.

Edit it to use your own mongodb connection string. If you need a free-to-start managed database, you can also use [MongoDB Atlas](https://www.mongodb.com/atlas/database).

You can replace mongo with any [prisma supported database](https://www.prisma.io/docs/reference/database-reference/supported-databases).

### 4. Run the app
```
yarn dev
```

The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser to explore its UI.

### 5. Edit template parts

* Remove the `.github/workflows/upgrade-dependencies.yml files`, since it contains the workflow to upgrade all dependencies on a daily basis.
  * n case you would like to keep it, remove lines 7, 30, 32 from it. Also, change the git user name in line 28.
* Edit the name & version in the `package.json` file.
* Edit the code in `src`, apart from the `src/prisma` directory.

# Adding new fields, features, queries, mutations

### Add new features
1. Create the corresponding `.model.prisma` file and the `.objectType.api.ts` file
2. Run `yarn generate`
3. Create the `.sourceType.ts` file which re-exports the prisma type
4. Add the `objectType` to `graphql/types/types.sourceType.ts`

### Add new fields to existing features
1. Modify the corresponding `.model.prisma` file and the `.objectType.api.ts` file
2. Run `yarn generate`

### Add new queries/mutations
1. Create `.query.api.ts` or `.mutation.api.ts` file
2. Add the definition to `graphql/queries/queries.sourceType.ts` or `graphql/mutations/mutations.sourceType.ts`
3. Run `yarn generate`
4. Create  `.query.ts` or `.mutation.ts` file

### Modify existing queries/mutations
1. Modify the `.query.api.ts` and `.query.ts` files, or `.mutation.api.ts` and `.mutation.ts` files
2. Run `yarn generate`

# Using the GraphQL API

You can also access the GraphQL API of the API server directly. It is running on the same host machine and port and can be accessed via the `/api` route (in this case that is [`localhost:3000/api`](http://localhost:3000/api)).

Below are a number of operations that you can send to the API.

### Retrieve all published posts and their authors

```graphql
query {
  feed {
    id
    title
    content
    published
    author {
      id
      name
      email
    }
  }
}
```

<Details><Summary><strong>See more API operations</strong></Summary>

### Create a new user

```graphql
mutation {
  signupUser(name: "Sarah", email: "sarah@prisma.io") {
    id
  }
}
```

### Create a new draft

```graphql
mutation {
  createDraft(
    title: "Join the Prisma Slack"
    content: "https://slack.prisma.io"
    authorEmail: "alice@prisma.io"
  ) {
    id
    published
  }
}
```

### Publish an existing draft

```graphql
mutation {
  publish(postId: "__POST_ID__") {
    id
    published
  }
}
```

> **Note**: You need to replace the `__POST_ID__`-placeholder with an actual `id` from a `Post` item. You can find one e.g. using the `filterPosts`-query.

### Search for posts with a specific title or content

```graphql
{
  filterPosts(searchString: "graphql") {
    id
    title
    content
    published
    author {
      id
      name
      email
    }
  }
}
```

### Retrieve a single post

```graphql
{
  post(postId: "__POST_ID__") {
    id
    title
    content
    published
    author {
      id
      name
      email
    }
  }
}
```

> **Note**: You need to replace the `__POST_ID__`-placeholder with an actual `id` from a `Post` item. You can find one e.g. using the `filterPosts`-query.

### Delete a post

```graphql
mutation {
  deletePost(postId: "__POST_ID__") {
    id
  }
}
```

> **Note**: You need to replace the `__POST_ID__`-placeholder with an actual `id` from a `Post` item. You can find one e.g. using the `filterPosts`-query.

</Details>

## Next steps

- Check out the [Prisma docs](https://www.prisma.io/docs)
- Share your feedback in the [`prisma2`](https://prisma.slack.com/messages/CKQTGR6T0/) channel on the [Prisma Slack](https://slack.prisma.io/)
- Create issues and ask questions on [GitHub](https://github.com/prisma/prisma/)
- Watch our biweekly "What's new in Prisma" livestreams on [Youtube](https://www.youtube.com/channel/UCptAHlN1gdwD89tFM3ENb6w)
