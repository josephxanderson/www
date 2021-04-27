const PageHeader = ({ heading, subheading }) => {
	return (
		<header className="PageHeader">
			{ heading
				? <h1>{heading}</h1>
				: ''
			}

			{ subheading
				? <h3>{subheading}</h3>
				: ''
			}
		</header>
	);
}

export default PageHeader;