import path from 'path';
import fs from 'fs';

// export function getServerSideProps() {
export function getStaticProps() {
	const blogDirectory = path.join(process.cwd(), 'content', 'blog');
	const filenames = fs.readdirSync(blogDirectory);

	console.info({ filenames });

	return {
		props: { cwd: process.cwd(), dirname: __dirname, blogDirectory, filenames }
	};
}

function Blog({ cwd, dirname, blogDirectory, filenames }) {
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
				<ul>{filenames.map((filename) => <li key={filename}>{filename}</li>)}</ul>
			</main>
		</div>
	);
}

export default Blog;
