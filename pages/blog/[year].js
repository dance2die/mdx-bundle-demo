import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { readdir } from 'fs/promises';
import path from 'path';

async function getYears() {
	const blogDirectory = path.join(process.cwd(), 'content', 'blog');
	return await readdir(blogDirectory);
}

export async function getStaticPaths() {
	const years = await getYears();
	const paths = years.map((year) => ({ params: { year } }));
	return { paths, fallback: false };
}

// export function getServerSideProps() {
export async function getStaticProps() {
	const blogDirectory = path.join(process.cwd(), 'content', 'blog');
	const years = await getYears();

	console.info({ years });

	return {
		props: { cwd: process.cwd(), dirname: __dirname, blogDirectory, years }
	};
}

function YearBlock({ cwd, dirname, blogDirectory }) {
	const router = useRouter();
	const { year } = router.query;

	useEffect(
		() => {
			console.info({ cwd, dirname, blogDirectory });
		},
		[ cwd, dirname, blogDirectory ]
	);

	return (
		<main>
			<h2>Blogs for year {year}</h2>
		</main>
	);
}

export default YearBlock;
