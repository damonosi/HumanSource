export interface IJobs {
	error: any;
	refetch: any;
	data: {
		jobs: [
			{
				salary: string;
				description: string;
				id: string;
				title: string;
				date: string;
				company: string;
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

			title: string;
			date: string;
			jobCategory: { name: string };
			company: string;
			salary: string;
			requierments: string;
			whyWork: string;
		};
	};
}
