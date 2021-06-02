import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { readdir, readFile } from 'fs/promises';
import path from 'path';

import { bundleMDX } from 'mdx-bundler';

const getYearlyBlogRoot = (year) => path.join(process.cwd(), 'content', 'blog', year.toString());
const getYearlyBlogDirectories = async (yearlyBlogRoot) => await readdir(yearlyBlogRoot);

// Given a year, get all yearly posts' metadata
async function getPostMetaListByYear(year) {
	const yearlyBlogRoot = getYearlyBlogRoot(year);
	const yearlyBlogDirectories = await getYearlyBlogDirectories(yearlyBlogRoot);
	// return yearlyBlogDirectories;

	const metadataListPromise = yearlyBlogDirectories.map(async (slug) => {
		const blogPath = path.join(yearlyBlogRoot, slug, 'index.md');
		const content = await readFile(blogPath, { encoding: 'utf8' });
		const { frontmatter } = await bundleMDX(content.trim());

		return { slug, frontmatter };
	});

	// const metadataList = Promise.all(metadataListPromise);
	// return metadataList;

	return metadataListPromise;
}

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
	// const years = await getYears();

	const postsFor2020 = await getPostMetaListByYear(2021);
	const resolved = await Promise.all(postsFor2020);

	(async () => {
		console.info({ postsFor2020: JSON.stringify(resolved, null, 2) });
	})();

	return {
		props: { cwd: process.cwd(), dirname: __dirname, blogDirectory }
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
