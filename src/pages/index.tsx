import Link from 'next/link';
import Layout from '../components/Layout';
import { usePostsFeedQuery } from '../features/posts/queries/postsFeed.query';

const Post = ({ post }) => (
  <Link href="/p/[id]" as={`/p/${post.id}`}>
    <a>
      <h2>{post.title}</h2>
      <small>By {post.author.name}</small>
      <p>{post.content}</p>
      <style jsx>{`
        a {
          text-decoration: none;
          color: inherit;
          padding: 2rem;
          display: block;
        }
      `}</style>
    </a>
  </Link>
);

const Blog = () => {
  const { loading, error, data } = usePostsFeedQuery();

  if (loading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Layout>
      <div className="page">
        <h1>My Blog</h1>
        <main>
          {data.feed.map(post => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Blog;