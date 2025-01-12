import React, { useEffect, useState } from "react";
import { getLandingPageData } from "../config/services";
//import { Tab } from "@headlessui/react";
import principal from "/src/assets/homepage/principal.png";
import TabsComponent from "../components/shared/Tabs";
import { ListGroup } from "react-bootstrap";

export default function HomePage() {
	const [data, setData] = useState([]);

	const getData = () => {
		getLandingPageData()
			.then((res) => setData(res.data))
			.catch((err) => console.log("something went wrong", err));
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			{data.map((c) => (
				<>
					<div className="mt-10 flex flex-row justify-evenly">
						{c.collegeStatistics.map((statistics) => (
							<div className="text-center rounded-full border-primaryColor border-8  h-[130px] w-[130px]">
								<div className="text-white counter-value text-xl bg-primaryColor p-4 rounded-t-full droppp font-bold">
									{statistics.number}
								</div>
								<h3 className=" font-semibold text-base text-primaryColor">
									{statistics.title}
								</h3>
							</div>
						))}
					</div>
					<div>
						<p className="flex justify-center text-2xl font-semibold xl:text-4xl">
							Welcome to Bapatla Engineering College
						</p>
						<div className="flex flex-col xl:flex-row xl:m-16 xl:mt-8">
							<div className=" justify-center m-7 mb-0 text-justify  xl:w-full xl:mr-8 xl:mt-12 xl:text-xl">
								The <b>Bapatla Engineering College(Autonomous)</b>, one of the
								seven educational institutions sponsored by the Bapatla
								Education Society, was established in 1981 with a vision to
								impart quality technical education and is affiliated to{" "}
								<b>Acharya Nagarjuna University</b>. The College is a little
								away from the din and bustle of Bapatla, a town with a historic
								and hoary past, about 75 Km. south of Vijayawada on
								Chennai-Vijayawada rail route. The college offers B.Tech.
								Programmes in 8 branches of Engineering- Civil, Computer
								Science, Electronics and Communications, Electrical and
								Electronics, Mechanical Engineering which are thrice NBA
								accredited, Electronics and Instrumentation, Chemical
								Engineering which are accredited twice and Information
								Technology which is accredited once.
								<a
									href="#"
									className="text-primaryColor mt-7 xl:mt-40 float-right underline "
								>
									view more
								</a>
							</div>

							<div className="xl:ml-8 xl:mt-1 xl:w-full xl:text-xl">
								<p className="text-primaryColor font-bold text-2xl">
									Principal's Message
								</p>
								<div className="w-16 h-1 bg-primaryColor rounded"></div>
								<img src={principal} className="ml-14 m-4 w-60 h-60" />
								<p className="text-justify">{c.principal.message}</p>
								<br />
								<b>
									{c.principal.name} <br />
									Principal
								</b>
							</div>
						</div>
					</div>

					<div className="flex flex-col justify-center items-center -mt-10">
						<div className="tabs-notices w-full max-w-md px-2 py-16 sm:px-0 md:w-max md:max-w-2xl lg:max-w-4xl">
							{/* <Tab.Group>
								<Tab.List className="flex space-x-1 bg-gray-900/20">
									{c.latestNews.map((latestNews, index) => (
										<Tab
											key={index}
										// className={({ selected }) =>
										// 	classNames(
										// 		"w-full  py-3 m-0 font-bold lg:text-xl leading-5 border-r-2 border-white",
										// 		"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
										// 		selected
										// 			? "bg-primaryColor text-white shadow"
										// 			: "text-black hover:bg-white/[0.12] hover:text-primaryColor"
										// 	)
										// }
										>
											<a href={latestNews.link}>{latestNews.title}</a>
											{latestNews.description}
										</Tab>
									))}
								</Tab.List>
								<Tab.List className="flex space-x-1 bg-gray-900/20">
									{c.notices.map((notice, index) => (
										<Tab
											key={index}
										// className={({ selected }) =>
										// 	classNames(
										// 		"w-full  py-3 m-0 font-bold lg:text-xl leading-5 border-r-2 border-white",
										// 		"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
										// 		selected
										// 			? "bg-primaryColor text-white shadow"
										// 			: "text-black hover:bg-white/[0.12] hover:text-primaryColor"
										// 	)
										// }
										>
											<a href={notice.link}>{notice.title}</a>
											{notice.description}
											{notice.date}
										</Tab>
									))}
								</Tab.List>
							</Tab.Group> */}
							<TabsComponent
								defaultKey={"latestNews"}
								tabsData={[
									{
										tabKey: "latestNews",
										tabTitle: "Latest News",
										tabView: (
											<ListGroup as="ul">
												{c.latestNews.map((latestNews, index) => (
													<ListGroup.Item
														key={index}
														as="li"
														className="d-flex justify-between"
													>
														<div className="my-auto mr-2">
															<a
																href={latestNews.link}
																className="link-primary-col"
															>
																{latestNews.title}
															</a>
															<p>{latestNews.description}</p>
														</div>
														<div className="my-auto text-nowrap">
															{/* {latestNews.date} */}
															<div className="bg-primaryColor p-1 text-white text-center font-bold">
																{new Date(latestNews.date).getDate()}
															</div>
															<div className="bg-secondaryColor p-1 text-black text-center">
																{new Date(latestNews.date).getMonth() + 1}-
																{new Date(latestNews.date).getFullYear()}
															</div>
														</div>
													</ListGroup.Item>
												))}
											</ListGroup>
										),
									},
									{
										tabKey: "events",
										tabTitle: "Events",
										tabView: (
											<ListGroup as="ul">
												{c.events.map((event, index) => (
													<ListGroup.Item
														key={index}
														as="li"
														className="d-flex justify-between"
													>
														<div className="my-auto mr-2">
															<a href={event.link} className="link-primary-col">
																{event.title}
															</a>
															<p>{event.description}</p>
														</div>
														<div className="my-auto text-nowrap">
															<div className="bg-primaryColor p-1 text-white text-center font-bold">
																{new Date(event.date).getDate()}
															</div>
															<div className="bg-secondaryColor p-1 text-black text-center">
																{new Date(event.date).getMonth() + 1}-
																{new Date(event.date).getFullYear()}
															</div>
														</div>
													</ListGroup.Item>
												))}
											</ListGroup>
										),
									},
								]}
							/>
						</div>
					</div>
				</>
			))}
		</>
	);
}
