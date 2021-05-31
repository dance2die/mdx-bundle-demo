import * as React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

function Post({ code, frontmatter }) {
	// it's generally a good idea to memoize this function call to
	// avoid re-creating the component every render.
	const Component = React.useMemo(() => getMDXComponent(code), [ code ]);

	return (
		<main>
			<header>
				<h1>{frontmatter.title}</h1>
				<p>{frontmatter.description}</p>
			</header>
			<section>
				<Component />
			</section>
		</main>
	);
}

export default Post;
