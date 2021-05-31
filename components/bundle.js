import { bundleMDX } from 'mdx-bundler';

const mdxSource = `
---
title: Example Post
published: 2021-02-13
description: This is some description
---

# Wahoo

import Demo from './demo'

Here's a **neat** demo:

<Demo />
`.trim();

export default async function() {
	const result = await bundleMDX(mdxSource, {
		files: {
			'./demo.tsx': `
import * as React from 'react'

function Demo() {
  return (
		<main>
		<header>
		<h3>Neat demo!</h3>
		</header>
		<section>
			<p style={{color: "red"}}>This is some other contentn!</p>
		</section>
		</main>
	)
}

export default Demo
    `
		}
	});

	const { code, frontmatter } = result;

	console.info({ code, frontmatter });

	return { code, frontmatter };
}
