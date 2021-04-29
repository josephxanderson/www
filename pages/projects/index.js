// Application imports
import Layout from '../../layouts/Main';
import PageHeader from '../../components/PageHeader';

const Index = () => {
	return (
		<Layout title="Projects by Joseph Anderson">
			<PageHeader heading="Projects" />

			<div className="Block">
				<div className="Block-Image">
					<figure className="Block-Image" style={{backgroundImage: "url('/images/projects/patco-companion/preview-image.jpg')"}}></figure>
				</div>

				<div className="Block-Header">
					<h3 className="Block-Header-Heading">PATCO Companion</h3>
				</div>

				<div className="Block-Container">
					
				</div>
			</div>
		</Layout>
	);
}

export default Index;