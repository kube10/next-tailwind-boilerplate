import { server } from "../../config";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import Meta from "../components/Meta";

const blog = ({ posts }) => {
  return (
    <div>
      <Meta title="Blog" />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href="/post/[id]" as={`/post/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default blog;

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/api/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
