import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-greath">Nextjs is greth</Link>
        </li>
        <li>
          <Link href="/news/nextjs-is-top">Nextjs is top</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
