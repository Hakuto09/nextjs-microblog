import Layout from "@/components/Layout";
import { getAllPostIds, getPostData } from "@/lib/posts";
import utilStyle from "../../styles/utils.module.css";
import { useRouter } from "next/router";


export async function getStaticPaths() {
//    const func = window.location.pathname.split("/").pop();
	const func = 'getStaticPaths';

	const paths = getAllPostIds();

	return {
		paths,
		fallback: false,
//		fallback: true,
	}
}

// SSG (静的サイトジェネレータ) の場合 : 初回の一回のみ実行。
export async function getStaticProps({ params }) {
	const func = 'getStaticProps';

/*
	const router = useRouter();
	if (router.isFallback) {
		return <div>読み込み中...</div>
	}
*/

	const postData = await getPostData(params.id);  // id, blogContentHTML, title, date, thumbnail
	console.log(func, ' postData ', postData);

	return {
		props: {
			postData,
		},
	};
}

export default function Post({ postData }) {
	return (
		<Layout>
			<article>
				<h1 className={utilStyle.headingX1}>{postData.title}</h1>
				<div className={utilStyle.headingX1}>{postData.date}</div>
				<div dangerouslySetInnerHTML={{__html: postData.blogContentHTML}} />
			</article>
		</Layout>
	)
}


