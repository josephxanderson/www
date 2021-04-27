const PageHeader = ({ heading, subheading }) => {
	return (
		<header className="PageHeader">
			{ heading
				? <h1 className="PageHeader-Heading">{heading}</h1>
				: ''
			}

			{ subheading
				? <h3 className="PageHeader-Subheading">{subheading}</h3>
				: ''
			}
		</header>
	);
}

export default PageHeader;