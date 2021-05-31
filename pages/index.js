import Post from '../components/Post';
import bundle from '../components/bundle';

export default function Home({ code, frontmatter }) {
	return <Post code={code} frontmatter={frontmatter} />;
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
