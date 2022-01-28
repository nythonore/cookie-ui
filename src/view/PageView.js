import { Image, Button } from 'react-bootstrap';

const PageView = () => {
	const howItWorkData = [
		{
			title:
				'GET OUR CHROME PLUGIN THAT TRACKS HOW MANY BROWSER COOKIES YOU’VE ACCEPTED.',
			content: 'Note: you will need to be using Google Chrome to use ',
		},
		{
			title: 'RACE TO ACCEPT AS MANY BROWSER COOKIES AS YOU POSSIBLY CAN',
			content:
				'Sites with cookie permissions can be found all over the internet!',
		},
		{
			title: 'WIN 100LBS OF (REALLY REAL, WE SWEAR) COOKIES!',
			content:
				'The player who has accepted the most cookies by May 3rd at 1pm will win 100lbs of chocolate chip cookies.',
		},
	];

	const faqData = [
		{
			title: 'WHAT IS A BROWSER COOKIE?',
			content:
				'A cookie is a little bit of info that your browser remembers about a website. Cookies keep items in your cart for later, keep you logged in, and more. Privacy law makes sites ask permission to use cookies, so every website acts like a drug pusher who got into baking: want cookies, buddy? Got some cookies for you!',
		},
		{
			title: 'HOW DO I WIN?',
			content:
				'Whoever has accepted the most cookies on May 3rd at 1pm EST wins 100lbs of IRL cookies. We ask for your email in the plugin so we can contact you if you win. Please note that for shipping purposes we can only send you cookies if you win and are within the United States.',
		},
		{
			title: 'MY SCORE IS DIFFERENT ON THE LEADERBOARD?',
			content:
				'Different sites use cookies differently - they have different behaviors and lifespans. Expiration, revisiting sites, and reloading can all trigger “false positives” that don’t count for your (more accurate) leaderboard score! You can’t eat the same cookie twice, kids.',
		},
	];

	const leaderBoardData = [
		{ title: 'WELP,,', content: 'Browser cookies accepted: 140.000m' },
		{ title: 'CHOOYLUMPS', content: 'Browser cookies accepted: 19.225m' },
		{ title: 'JDADDY', content: 'Browser cookies accepted: 4.715m' },
		{ title: 'ALEXODDY01', content: 'Browser cookies accepted: 4.139m' },
		{ title: 'HEROWILSON', content: 'Browser cookies accepted: 2.029m' },
		{ title: 'EQUADRI', content: 'Browser cookies accepted: 1.545m' },
		{ title: 'RUNSWITHKNIFEZ', content: 'Browser cookies accepted: 1.267m' },
		{ title: 'SECRETNIKEAGENT', content: 'Browser cookies accepted: 1.149m' },
		{ title: 'COOKIE-MONSTER', content: 'Browser cookies accepted: 1.115m' },
		{ title: 'BABABOOEY', content: 'Browser cookies accepted: 1.109m' },
	];

	return (
		<div className='page-view py-5'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-md-10'>
						<div className='row'>
							<div className='col-md-4 card-fixed'>
								<div className='bg-primary pt-3 px-1 pb-1 border-rd-4'>
									<div className='bg-white p-4 border-rd-4'>
										<Image
											alt='Cookie'
											src='https://cooooookies.com/_nuxt/img/logo.8dbce29.png'
											className='img-fluid'
											width='100%'
										/>
									</div>
								</div>

								<div className='bg-primary px-1 pb-1 border-rd-4 mt-4'>
									<p className='pt-2 card-title'>Game Over</p>

									<div className='bg-warning p-3 border-rd-4'>
										<p className='card-content-large'>
											THE GAMES OVER, BUT YOU CAN STILL COUNT COOKIES!
										</p>

										<Button
											variant='primary'
											className='bg-primary d-block w-100 mt-2 card-btn'
										>
											GET THE PLUGIN
										</Button>
									</div>
								</div>
							</div>

							<div className='col-md-4 card-fixed card-fixed-middle'>
								<div className='col-md-4 card-fixed card-fixed-middle'>
									<div className='bg-primary px-1 pb-1 border-rd-4'>
										<p className='pt-2 card-title'>We have a winner!</p>

										<div className='bg-white p-3 border-rd-4'>
											{howItWorkData.map((data, key) => (
												<div key={key}>
													<div>
														<p className='text-primary content-desc'>
															Step {key + 1}
														</p>

														<p className='card-content-md my-3'>{data.title}</p>
														<p className='text-muted content-desc'>
															{data.content}
														</p>
													</div>

													{key + 1 !== howItWorkData.length && (
														<div>
															<hr />
														</div>
													)}
												</div>
											))}
										</div>
									</div>

									<div className='bg-primary px-1 pb-1 border-rd-4 mt-4'>
										<p className='pt-2 card-title'>FAQ</p>

										<div className='bg-white p-3 border-rd-4'>
											{faqData.map((data, key) => (
												<div key={key}>
													<div>
														<p className='text-primary content-desc'>
															Step {key + 1}
														</p>

														<p className='card-content-md my-3'>{data.title}</p>
														<p className='text-muted content-desc'>
															{data.content}
														</p>
													</div>

													{key + 1 !== faqData.length && (
														<div>
															<hr />
														</div>
													)}
												</div>
											))}
										</div>
									</div>
								</div>
							</div>

							<div className='col-md-4 card-fixed card-fixed-last'>
								<div className='bg-primary px-1 pb-1 border-rd-4'>
									<p className='pt-2 card-title'>We have a winner!</p>

									<div className='bg-warning p-3 border-rd-4'>
										<p className='card-content-large'>
											ON MAY 3RD 2021{' '}
											<span className='text-primary'>WELP,,</span> WON 100 LBS
											OF COOKIES!
										</p>
									</div>
								</div>

								<div className='bg-primary px-1 pb-1 border-rd-4 mt-4'>
									<p className='pt-2 card-title'>Leader Board</p>

									<div className='bg-white p-3 border-rd-4'>
										{leaderBoardData.map((data, key) => (
											<div key={key}>
												<div>
													<p className='count-card d-flex align-items-center justify-content-center'>{key + 1}</p>

													<p className='card-content-md mt-3'>{data.title}</p>
													<p className='text-muted content-desc'>
														{data.content}
													</p>
												</div>

												{key + 1 !== leaderBoardData.length && (
													<div>
														<hr />
													</div>
												)}
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageView;
