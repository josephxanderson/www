// Framework imports
import Link from 'next/link';

// Application imports
import Layout from '../layouts/Main';
import PageHeader from '../components/PageHeader';

const Home = () => {
	return (
		<Layout>
			<PageHeader 
				heading="👋🏼 I’m Joseph, a New Jersey-based software developer and creative."
				subheading="I design and develop full-stack apps for web and mobile."
			/>

			<div className="TextBlocks">
				<p className="TextBlock">
					This is my personal website. Here, you can&nbsp;

					<Link href="/about" passHref>
						<a>learn more about me</a>
					</Link>
					,&nbsp;

					<Link href="/journal" passHref>
						<a>read my writings</a>
					</Link>
					,&nbsp;or&nbsp;
					
					<Link href="/projects" passHref>
						<a>explore my design and software projects</a>
					</Link>
					.
				</p>

				<p className="TextBlock">
					Thanks for visiting.
				</p>
			</div>
		</Layout>
	);
}

export default Home;