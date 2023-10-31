export interface IJobs {
	error: any;
	refetch: any;
	data: {
		jobs: [
			{
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
