const JsonLd = ({ data }: any) => (
	<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
);

export default JsonLd;
