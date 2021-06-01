import { useRouter } from 'next/router';
import { useEffect } from 'react';

function YearBlock() {
	const router = useRouter();
	const { year } = router.query;

	return (
		<main>
			<h2>Blogs for year {year}</h2>
		</main>
	);
}

export default YearBlock;
