// Framework imports
import Head from 'next/head';

const Common = ({ title }) => {
	return (<>
		<Head>
			{/* HTML Info */}
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />

			{/* Meta */}
			<title>{title ? title : 'Joseph Anderson'}</title>

			<link rel="icon" href="/favicon.png" />
			<link rel="apple-touch-icon" href="/favicon.png" />
		</Head>
	</>);
}

export default Common;