export interface IJobs {
	error: any;
	refetch: any;
	data: {
		jobs: [
			{
				salary: string;
				description: string;
				slug: string;
				id: string;
				title: string;
				date: string;
				company: string;
				jobCategory: { category: { name: string } };
				category: { name: string };
				requierments: string;
				whyWork: string;
				applyFormCount?: string;
			},
		];
	};
}
export interface IJob {
	data: {
		job: {
			description: string;
			id: string;
			title: string;
			date: string;
			jobCategory: { category: { name: string; nameIT: string } };
			company: string;
			salary: string;
			requierments: string;
			location: { country: [{ name: string; nameIT: string }] };
			whyWork: string;
		};
	};
}
