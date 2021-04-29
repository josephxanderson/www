// Framework imports
import Head from 'next/head';

const Common = ({ title, description }) => {
	const defaultTitle = 'Joseph Anderson';
	const defaultDescription = 'Joseph Anderson is a New Jersey-based software developer and designer.';
	
	return (<>
		<Head>
			{/* HTML Info */}
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />

			{/* Meta */}
			<title>{title ? title : defaultTitle}</title>
			<meta name="author" content="Joseph Anderson" />
			<meta name="description" content={description ? description : defaultDescription} />

			{/* OG */}
			<meta property="og:title" content={title ? title : 'Joseph Anderson'} />
			<meta property="og:description" content={description ? description : defaultDescription} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : ''} />
			<meta property="og:image" content="/images/global/favicon.png" />

			<link rel="icon" href="/images/global/favicon.png" />
			<link rel="apple-touch-icon" href="/images/global/apple-touch-icon.png" />
		</Head>
	</>);
}

export default Common;