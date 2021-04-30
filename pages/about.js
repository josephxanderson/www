// Framework imports
import Link from 'next/link';

// Application imports
import Layout from '../layouts/Main';
import PageHeader from '../components/PageHeader';

const About = () => {
	return (
		<Layout title="About Joseph Anderson">
			<PageHeader heading="About me" />

			<div className="TextBlocks">
				<p className="TextBlock">
					My name is Joseph. I am a designer and software developer based in New Jersey.
				</p>

				<p className="TextBlock">
					I am currently looking for work and am always open to new projects.
				</p>

				<p className="TextBlock">
					I enjoy bringing together data, design, and technology to build well-designed, accessible experiences for shopping, mobility, transportation, climate, and the environment.
				</p>

				<p className="TextBlock">
					Contact me by emailing me@josephanderson.world, or reach out to me on <Link href="https://github.com/josephxanderson" passHref><a target="_blank" >GitHub</a></Link> and <Link href="https://twitter.com/josephxanderson" passHref><a target="_blank">Twitter</a></Link> @josephxanderson.
				</p>
			</div>
		</Layout>
	);
}

export default About;