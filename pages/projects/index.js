// Framework imports
import Image from 'next/image';

// Application imports
import Layout from '../../layouts/Main';
import PageHeader from '../../components/PageHeader';

const Index = () => {
	return (
		<Layout title="Projects by Joseph Anderson">
			<PageHeader heading="Projects" />

			<div className="Block">
				<div className="Block-Image">
					<Image
					  src="/images/projects/patco-companion/preview-image.png"
					  alt="Picture of the author"
					  layout="fill"
					  priority="true"
					  objectFit="cover"
					  quality="100"
					/>
				</div>

				<div className="Block-Content">
					<div className="Block-Header">
						<h3 className="Block-Header-Heading">PATCO Companion</h3>
						<h4 className="Block-Header-Heading">Scheduled trains, service details, and elevator & escalator status</h4>
					</div>

					<div className="Block-Description">
						<p className="Block-Description-Content">
							Over 10 million people ride the high-speed subway train line between New Jersey and Philadelphia every year. However, without an official app and an outdated website, it can be difficult to get the information you need about trains, stations, connections, and accessibility.
						</p>

						<p className="Block-Description-Content">
							I designed and built PATCO Companion, a web app for tablet and mobile devices that provides all the information you need for your PATCO commute in one place.
						</p>

					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Index;