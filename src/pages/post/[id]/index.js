import { useRouter } from "next/router";
import Link from "next/link";
import Meta from "../../../components/Meta";

const post = ({ post }) => {
  return (
    <div>
      {post && (
        <div>
          {" "}
          <Meta title={post.title} description={post.excerpt} />
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <br />
          <Link href="/">Go Back</Link>
        </div>
      )}
    </div>
  );
};

export const getStaticProps = async (context) => {
  try {
    const res = await fetch(
      `http://jsonplaceholder.typicode.com/posts/${context.params.id}`
    );
    const post = await res.json();

    return {
      props: {
        post,
      },
    };
  } catch (err) {
    console.log(err.message);
  }
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  const ids = posts.map((post) => post.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default post;
