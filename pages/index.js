import Link from 'next/link';

import Post from '../components/Post';
import bundle from '../components/bundle';

export default function Home({ code, frontmatter }) {
	return (
		<main>
			<ul>
				<li>
					<Link href="/blog">Blog</Link>
				</li>
			</ul>
			<Post code={code} frontmatter={frontmatter} />
		</main>
	);
}

// export async function getServerSideProps(context) {
export async function getStaticProps(context) {
	const { code, frontmatter } = await bundle();

	return {
		// props: { code, frontmatter: { title: frontmatter.title, description: frontmatter.description } }
		props: { code, frontmatter }
		// props: { code: 'some code', frontmatter: { title: 'some titlte', description: 'some descriptoin' } }
	};
}
