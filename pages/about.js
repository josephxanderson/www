// Application imports
import Layout from '../layouts/Main';
import PageHeader from '../components/PageHeader';

const About = () => {
	return (
		<Layout title="About Joseph Anderson">
			<PageHeader heading="About me" />

			<p>
				My name is Joseph. I am a designer and software developer based in New Jersey.
			</p>

			<p>
				I enjoy researching and building well-designed, accessible experiences for mobility, transportation, climate, and the environment by bringing together data, design, and technology.
			</p>

			<p>
				I have a great interest in public transportation, mobility, and accessibility. I believe that good design can improve the lives of individuals who travel by transit, and those who require accessibility accomodations in their every day lives.
			</p>

			<p>
				I am a self-taught individual. I've been using the computer since before I was a year old, and I have been programming and designing since before I was 10. I started out building web browsers in Visual Basic .NET. I then began to explore the then-new HTML5 and CSS3.
			</p>

			<p>
				With time, I moved on to learning JavaScript and PHP. I discovered the Laravel framework in 2014, which fueled my dream of becoming a software developer. Since then, I have had experience designing and building websites, web apps, and mobile apps; as well as designing brand identities, colorways, and marketing materials.
			</p>

			<p>
				Today, I design and build full-stack Laravel and React apps.
			</p>

			<p>
				My professional experiences include work in education and healthcare settings. You may view my resume for more information.
			</p>
		</Layout>
	);
}

export default About;