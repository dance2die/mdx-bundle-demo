// // Webpack 5 issue
// // https://github.com/kentcdodds/mdx-bundler/issues/18#issuecomment-818262064

// module.exports = {
// 	future: {
// 		// Opt-in to webpack@5
// 		webpack5: true
// 	},
// 	reactStrictMode: true,
// 	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
// 		if (!isServer) {
// 			// https://github.com/vercel/next.js/issues/7755
// 			config.resolve = {
// 				...config.resolve,
// 				fallback: {
// 					...config.resolve.fallback,
// 					child_process: false,
// 					fs: false,
// 					'builtin-modules': false,
// 					worker_threads: false
// 				}
// 			};
// 		}

// 		return config;
// 	}
// };
