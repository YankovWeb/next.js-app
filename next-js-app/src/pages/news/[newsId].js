import {useRouter} from "next/router";

const DetailtPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;

  return <div>DetailtPage</div>;
};

export default DetailtPage;
