import path from 'path';
import fs from 'fs';

import Link from 'next/link';

// export function getServerSideProps() {
export function getStaticProps() {
	const blogDirectory = path.join(process.cwd(), 'content', 'blog');
	const years = fs.readdirSync(blogDirectory);

	console.info({ years });

	return {
		props: { cwd: process.cwd(), dirname: __dirname, blogDirectory, years }
	};
}

function Blog({ cwd, dirname, blogDirectory, years }) {
	return (
		<div>
			<header>
				<h2>Blog!</h2>
			</header>
			<main>
				<div>
					<label>CWD: {cwd}</label>
				</div>
				<div>
					<label>dirname: {dirname}</label>
				</div>
				<div>
					<label>blogDirectory: {blogDirectory}</label>
				</div>
				<ul>
					{years.map((year) => (
						<li key={year}>
							<Link href={`/blog/${year}`}>{year}</Link>
						</li>
					))}
				</ul>
			</main>
		</div>
	);
}

export default Blog;
