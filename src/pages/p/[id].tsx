import Router, { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useDeletePostMutation } from '../../features/posts/mutations/deletePost.mutation';
import { usePublishPostMutation } from '../../features/posts/mutations/publishPost.mutation';
import { usePostQuery } from '../../features/posts/queries/post.query';

function Post() {
  const postId = useRouter().query.id;
  const { loading, error, data } = usePostQuery({ postId });

  const [publish] = usePublishPostMutation();
  const [deletePost] = useDeletePostMutation();

  if (loading) {
    console.log('loading');
    return <div>Loading ...</div>;
  }
  if (error) {
    console.log('error');
    return <div>Error: {error.message}</div>;
  }

  console.log(`response`, data);

  let title = data.post.title;
  if (!data.post.published) {
    title = `${title} (Draft)`;
  }

  const authorName = data.post.author
    ? data.post.author.name
    : 'Unknown author';
  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>By {authorName}</p>
        <p>{data.post.content}</p>
        {!data.post.published && (
          <button
            onClick={async () => {
              await publish({
                variables: {
                  postId,
                },
              });
              Router.push('/');
            }}
          >
            Publish
          </button>
        )}
        <button
          onClick={async () => {
            await deletePost({
              variables: {
                postId,
              },
            });
            Router.push('/');
          }}
        >
          Delete
        </button>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
}

export default Post;
