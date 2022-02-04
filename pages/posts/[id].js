import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../components/utils.module.css";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    const mdxSource = await serialize(postData.content, {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
    });
    return {
        props: {
            postData,
            mdxSource,
        },
    };
}

export default function Post({ postData, mdxSource }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <MDXRemote {...mdxSource} />
            </article>
        </Layout>
    );
}
