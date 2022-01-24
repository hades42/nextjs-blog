import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1 className="heading">First Post</h1>
            <p className="testing">Ahihi</p>
            <Image
                src="/images/profile.jpg"
                height={144}
                width={144}
                alt="Van Nguyen"
            />
            <h2>
                <Link href="/">Back to home</Link>
            </h2>

            <style jsx>{``}</style>
        </Layout>
    );
}
