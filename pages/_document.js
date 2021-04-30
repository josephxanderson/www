// Framework imports
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="en-US">
				<Head>
					{/* HTML Info */}
					<meta charSet="utf-8" />
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />

					<link rel="icon" href="/images/global/favicon.png" />
					<link rel="apple-touch-icon" href="/images/global/apple-touch-icon.png" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument;