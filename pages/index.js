// Framework imports
import Link from 'next/link';

// Application imports
import Layout from '../layouts/Main';
import PageHeader from '../components/PageHeader';

const Home = () => {
	return (
		<Layout>
			<PageHeader 
				heading="👋🏼 I'm Joseph, a New Jersey-based software developer and designer."
				subheading="I design and build full-stack Laravel and React apps."
			/>

			<div className="Page-Home-Introduction">
				<h3 className="Page-Home-Introduction-Content">
					I am interested in researching and building well-designed, accessible experiences for mobility, transportation, climate, and the environment.
				</h3>

				<h3 className="Page-Home-Introduction-Content">
					This is my personal website. Here, you can

					<Link href="/about" passHref>
						<a>&nbsp;learn more about me,</a>
					</Link>

					<Link href="/journal" passHref>
						<a>&nbsp;read my writings, or</a>
					</Link>

					<Link href="/projects" passHref>
						<a>&nbsp;explore my design and software projects.</a>
					</Link>
				</h3>

				<h3 className="Page-Home-Introduction-Content">
					You can also find me @josephxanderson around the internet.
				</h3>
			</div>
		</Layout>
	);
}

export default Home;