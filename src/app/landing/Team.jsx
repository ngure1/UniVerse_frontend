"use client";
import React from "react";
import { Element } from "react-scroll";
import Link from "next/link";
import Image from "next/image";

const Team = () => {
	return (
		<Element
			name="theTeam"
			className="pt-[8.75rem]">
			<div className="flex flex-col py-[2rem] justify-center items-center gap-[1rem] self-stretch w-full">
				<div className="flex flex-col justify-center items-center gap-[0.25rem]">
					<h2 className="heading-2"> Meet the Team </h2>
					<p className="body-text muted">
						The Brains behind the brilliant project
					</p>
				</div>
				<div className="flex items-center justify-center flex-col gap-[1rem] py-[0.75rem] w-full">
					<div className="flex px-[2.5rem] flex-wrap items-center justify-center gap-[1.75rem] max-sm:flex-col">
						<div className="flex items-center justify-center w-[20.5rem] flex-col border border-cyan-500 rounded-sm px-[3rem] py-[2rem] gap-[2rem]">
							<div className="relative">
								<div className="h-[8.75rem] w-[8.75rem] rounded-full bg-slate-500 relative">
									<Image
										alt="Team Member Image"
										src="/images/profiles/Nderu.jpeg"
										width="200"
										height="200"
										className="rounded-full"
									/>
								</div>
								<div
									className="flex items-start justify-center gap-[0.75rem] py-[1.625rem] w-[6.2375rem] h-[6.2375rem] rounded-[6.25rem] bg-white dark:bg-black absolute top-[7.25rem] left-[1rem]
                ">
									<Link href="https://www.linkedin.com/in/dr-lawrence-nderu/">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 29 28"
											fill="none"
											className="hover:w-8 hover:h-7 transition-width transition-height duration-200">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M28.4497 28H22.6478V18.9051C22.6478 16.7361 22.6111 13.9461 19.6331 13.9461C16.6147 13.9461 16.1539 16.3099 16.1539 18.7495V28H10.358V9.297H15.9204V11.8543H15.9998C16.7737 10.3833 18.6661 8.83282 21.4888 8.83282C27.3641 8.83282 28.4497 12.7055 28.4497 17.7428V28ZM3.81646 6.74219C1.95215 6.74219 0.449707 5.23209 0.449707 3.37048C0.449707 1.5101 1.95215 0 3.81646 0C5.6722 0 7.17954 1.5101 7.17954 3.37048C7.17954 5.23209 5.6722 6.74219 3.81646 6.74219ZM6.71866 28H0.910587V9.297H6.71866V28Z"
												fill="#0077B5"
											/>
										</svg>
									</Link>
									<Link href="https://www.github.com/JhubAfrica">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 29 28"
											fill="none"
											className="hover:w-8 hover:h-7 transition-width transition-height duration-200">
											<path
												d="M14.4497 0C6.71818 0 0.449707 6.26847 0.449707 14C0.449707 21.7324 6.71818 28 14.4497 28C22.1812 28 28.4497 21.7324 28.4497 14C28.4496 6.26847 22.1811 0 14.4497 0ZM18.3714 24.6653C18.2908 23.5698 18.2008 22.2127 18.1955 21.6632C18.1605 21.2414 18.1149 20.1687 17.0965 19.4836C21.1398 19.145 23.0639 16.9102 23.2023 13.9571C23.3178 12.2754 22.6492 10.7966 21.4619 9.60316C21.5223 8.32657 21.4234 6.81363 21.3412 6.14872C20.4295 5.88623 18.3032 7.00884 17.709 7.48922C16.456 7.00269 13.3892 6.83209 11.5254 7.48922C10.2041 6.55999 8.70006 5.98599 7.8802 6.14612C7.1233 7.82351 7.60983 9.40901 7.75766 9.59797C6.78287 10.4888 5.42314 11.5851 5.79241 13.882C6.38476 17.2498 8.75426 19.0664 12.5692 19.5108C11.7555 19.6771 11.6181 20.2843 11.5498 20.5477C8.98782 21.6047 8.25553 19.895 7.93172 19.4496C6.85639 18.1187 5.89121 18.5046 5.83172 18.5255C5.77395 18.5465 5.73022 18.6305 5.73637 18.6708C5.79058 18.9578 6.37601 19.2492 6.40485 19.2727C7.19846 19.8642 7.49248 20.9326 7.67356 21.2371C8.81193 23.1087 11.458 22.3326 11.4833 22.3484C11.4851 22.512 11.465 23.8893 11.4492 24.9612C6.62457 23.6433 3.07468 19.2421 3.07468 14C3.07468 7.71749 8.1672 2.62507 14.4496 2.62507C20.732 2.62507 25.8246 7.71749 25.8246 14C25.8246 18.9026 22.7184 23.0666 18.3714 24.6653Z"
												fill="#2B414D"
											/>
										</svg>
									</Link>
								</div>
							</div>
							<div className="z-10">
								<p className="sub-heading-3">
									Dr. Lawrence Nderu
								</p>
								<p className="muted">Project PI</p>
							</div>
						</div>

						<div className="flex items-center justify-center w-[20.5rem] flex-col border border-cyan-500 rounded-sm px-[3rem] py-[2rem] gap-[2rem]">
							<div className="relative">
								<div className="h-[8.75rem] w-[8.75rem] rounded-full bg-slate-500 relative">
									<Image
										alt="Team Member Image"
										src="/images/profiles/Jose.jpeg"
										width="200"
										height="200"
										className="rounded-full"
									/>
								</div>
								<div
									className="flex items-start justify-center gap-[0.75rem] py-[1.625rem] w-[6.2375rem] h-[6.2375rem] rounded-[6.25rem] bg-white dark:bg-black absolute top-[7.25rem] left-[1rem]
                ">
									<Link href="https://www.linkedin.com/in/joseph-ngure-bba51025b/">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 29 28"
											fill="none"
											className="hover:w-8 hover:h-7 transition-width transition-height duration-200">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M28.4497 28H22.6478V18.9051C22.6478 16.7361 22.6111 13.9461 19.6331 13.9461C16.6147 13.9461 16.1539 16.3099 16.1539 18.7495V28H10.358V9.297H15.9204V11.8543H15.9998C16.7737 10.3833 18.6661 8.83282 21.4888 8.83282C27.3641 8.83282 28.4497 12.7055 28.4497 17.7428V28ZM3.81646 6.74219C1.95215 6.74219 0.449707 5.23209 0.449707 3.37048C0.449707 1.5101 1.95215 0 3.81646 0C5.6722 0 7.17954 1.5101 7.17954 3.37048C7.17954 5.23209 5.6722 6.74219 3.81646 6.74219ZM6.71866 28H0.910587V9.297H6.71866V28Z"
												fill="#0077B5"
											/>
										</svg>
									</Link>
									<Link href="https://www.github.com/ngure1">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 29 28"
											fill="none"
											className="hover:w-8 hover:h-7 transition-width transition-height duration-200">
											<path
												d="M14.4497 0C6.71818 0 0.449707 6.26847 0.449707 14C0.449707 21.7324 6.71818 28 14.4497 28C22.1812 28 28.4497 21.7324 28.4497 14C28.4496 6.26847 22.1811 0 14.4497 0ZM18.3714 24.6653C18.2908 23.5698 18.2008 22.2127 18.1955 21.6632C18.1605 21.2414 18.1149 20.1687 17.0965 19.4836C21.1398 19.145 23.0639 16.9102 23.2023 13.9571C23.3178 12.2754 22.6492 10.7966 21.4619 9.60316C21.5223 8.32657 21.4234 6.81363 21.3412 6.14872C20.4295 5.88623 18.3032 7.00884 17.709 7.48922C16.456 7.00269 13.3892 6.83209 11.5254 7.48922C10.2041 6.55999 8.70006 5.98599 7.8802 6.14612C7.1233 7.82351 7.60983 9.40901 7.75766 9.59797C6.78287 10.4888 5.42314 11.5851 5.79241 13.882C6.38476 17.2498 8.75426 19.0664 12.5692 19.5108C11.7555 19.6771 11.6181 20.2843 11.5498 20.5477C8.98782 21.6047 8.25553 19.895 7.93172 19.4496C6.85639 18.1187 5.89121 18.5046 5.83172 18.5255C5.77395 18.5465 5.73022 18.6305 5.73637 18.6708C5.79058 18.9578 6.37601 19.2492 6.40485 19.2727C7.19846 19.8642 7.49248 20.9326 7.67356 21.2371C8.81193 23.1087 11.458 22.3326 11.4833 22.3484C11.4851 22.512 11.465 23.8893 11.4492 24.9612C6.62457 23.6433 3.07468 19.2421 3.07468 14C3.07468 7.71749 8.1672 2.62507 14.4496 2.62507C20.732 2.62507 25.8246 7.71749 25.8246 14C25.8246 18.9026 22.7184 23.0666 18.3714 24.6653Z"
												fill="#2B414D"
											/>
										</svg>
									</Link>
								</div>
							</div>
							<div className="z-10">
								<p className="sub-heading-3">Joseph Ngure</p>
								<p className="muted">Team Lead</p>
							</div>
						</div>

						<div className="flex items-center justify-center w-[20.5rem] flex-col border border-cyan-500 rounded-sm px-[3rem] py-[2rem] gap-[2rem]">
							<div className="relative">
								<div className="h-[8.75rem] w-[8.75rem] rounded-full bg-slate-500 relative">
									<Image
										alt="Team Member Image"
										src="/images/profiles/Maurice.jpeg"
										width="200"
										height="200"
										className="rounded-full"
									/>
								</div>
								<div
									className="flex items-start justify-center gap-[0.75rem] py-[1.625rem] w-[6.2375rem] h-[6.2375rem] rounded-[6.25rem] bg-white dark:bg-black absolute top-[7.25rem] left-[1rem]
                ">
									<Link href="https://www.linkedin.com/in/maurice-macharia-1300332a1/">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 29 28"
											fill="none"
											className="hover:w-8 hover:h-7 transition-width transition-height duration-200">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M28.4497 28H22.6478V18.9051C22.6478 16.7361 22.6111 13.9461 19.6331 13.9461C16.6147 13.9461 16.1539 16.3099 16.1539 18.7495V28H10.358V9.297H15.9204V11.8543H15.9998C16.7737 10.3833 18.6661 8.83282 21.4888 8.83282C27.3641 8.83282 28.4497 12.7055 28.4497 17.7428V28ZM3.81646 6.74219C1.95215 6.74219 0.449707 5.23209 0.449707 3.37048C0.449707 1.5101 1.95215 0 3.81646 0C5.6722 0 7.17954 1.5101 7.17954 3.37048C7.17954 5.23209 5.6722 6.74219 3.81646 6.74219ZM6.71866 28H0.910587V9.297H6.71866V28Z"
												fill="#0077B5"
											/>
										</svg>
									</Link>
									<Link href="https://www.github.com/Macharia-Maurice">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 29 28"
											fill="none"
											className="hover:w-8 hover:h-7 transition-width transition-height duration-200">
											<path
												d="M14.4497 0C6.71818 0 0.449707 6.26847 0.449707 14C0.449707 21.7324 6.71818 28 14.4497 28C22.1812 28 28.4497 21.7324 28.4497 14C28.4496 6.26847 22.1811 0 14.4497 0ZM18.3714 24.6653C18.2908 23.5698 18.2008 22.2127 18.1955 21.6632C18.1605 21.2414 18.1149 20.1687 17.0965 19.4836C21.1398 19.145 23.0639 16.9102 23.2023 13.9571C23.3178 12.2754 22.6492 10.7966 21.4619 9.60316C21.5223 8.32657 21.4234 6.81363 21.3412 6.14872C20.4295 5.88623 18.3032 7.00884 17.709 7.48922C16.456 7.00269 13.3892 6.83209 11.5254 7.48922C10.2041 6.55999 8.70006 5.98599 7.8802 6.14612C7.1233 7.82351 7.60983 9.40901 7.75766 9.59797C6.78287 10.4888 5.42314 11.5851 5.79241 13.882C6.38476 17.2498 8.75426 19.0664 12.5692 19.5108C11.7555 19.6771 11.6181 20.2843 11.5498 20.5477C8.98782 21.6047 8.25553 19.895 7.93172 19.4496C6.85639 18.1187 5.89121 18.5046 5.83172 18.5255C5.77395 18.5465 5.73022 18.6305 5.73637 18.6708C5.79058 18.9578 6.37601 19.2492 6.40485 19.2727C7.19846 19.8642 7.49248 20.9326 7.67356 21.2371C8.81193 23.1087 11.458 22.3326 11.4833 22.3484C11.4851 22.512 11.465 23.8893 11.4492 24.9612C6.62457 23.6433 3.07468 19.2421 3.07468 14C3.07468 7.71749 8.1672 2.62507 14.4496 2.62507C20.732 2.62507 25.8246 7.71749 25.8246 14C25.8246 18.9026 22.7184 23.0666 18.3714 24.6653Z"
												fill="#2B414D"
											/>
										</svg>
									</Link>
								</div>
							</div>
							<div className="z-10">
								<p className="sub-heading-3">
									Maurice Macharia
								</p>
								<p className="muted">Full Stack Developer</p>
							</div>
						</div>
						<div className="flex items-center justify-center w-[20.5rem] flex-col border border-cyan-500 rounded-sm px-[3rem] py-[2rem] gap-[2rem]">
							<div className="relative">
								<div className="h-[8.75rem] w-[8.75rem] rounded-full bg-slate-500 relative">
									<Image
										alt="Team Member Image"
										src="/images/profiles/Hilda.jpeg"
										width="200"
										height="200"
										className="rounded-full"
									/>
								</div>
								<div
									className="flex items-start justify-center gap-[0.75rem] py-[1.625rem] w-[6.2375rem] h-[6.2375rem] rounded-[6.25rem] bg-white dark:bg-black absolute top-[7.25rem] left-[1rem]
                ">
									<Link href="https://www.linkedin.com/in/hilda-mwangi-8585a5254">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 29 28"
											fill="none"
											className="hover:w-8 hover:h-7 transition-width transition-height duration-200">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M28.4497 28H22.6478V18.9051C22.6478 16.7361 22.6111 13.9461 19.6331 13.9461C16.6147 13.9461 16.1539 16.3099 16.1539 18.7495V28H10.358V9.297H15.9204V11.8543H15.9998C16.7737 10.3833 18.6661 8.83282 21.4888 8.83282C27.3641 8.83282 28.4497 12.7055 28.4497 17.7428V28ZM3.81646 6.74219C1.95215 6.74219 0.449707 5.23209 0.449707 3.37048C0.449707 1.5101 1.95215 0 3.81646 0C5.6722 0 7.17954 1.5101 7.17954 3.37048C7.17954 5.23209 5.6722 6.74219 3.81646 6.74219ZM6.71866 28H0.910587V9.297H6.71866V28Z"
												fill="#0077B5"
											/>
										</svg>
									</Link>
									<Link href="https://www.github.com/mwangi-hilda">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 29 28"
											fill="none"
											className="hover:w-8 hover:h-7 transition-width transition-height duration-200">
											<path
												d="M14.4497 0C6.71818 0 0.449707 6.26847 0.449707 14C0.449707 21.7324 6.71818 28 14.4497 28C22.1812 28 28.4497 21.7324 28.4497 14C28.4496 6.26847 22.1811 0 14.4497 0ZM18.3714 24.6653C18.2908 23.5698 18.2008 22.2127 18.1955 21.6632C18.1605 21.2414 18.1149 20.1687 17.0965 19.4836C21.1398 19.145 23.0639 16.9102 23.2023 13.9571C23.3178 12.2754 22.6492 10.7966 21.4619 9.60316C21.5223 8.32657 21.4234 6.81363 21.3412 6.14872C20.4295 5.88623 18.3032 7.00884 17.709 7.48922C16.456 7.00269 13.3892 6.83209 11.5254 7.48922C10.2041 6.55999 8.70006 5.98599 7.8802 6.14612C7.1233 7.82351 7.60983 9.40901 7.75766 9.59797C6.78287 10.4888 5.42314 11.5851 5.79241 13.882C6.38476 17.2498 8.75426 19.0664 12.5692 19.5108C11.7555 19.6771 11.6181 20.2843 11.5498 20.5477C8.98782 21.6047 8.25553 19.895 7.93172 19.4496C6.85639 18.1187 5.89121 18.5046 5.83172 18.5255C5.77395 18.5465 5.73022 18.6305 5.73637 18.6708C5.79058 18.9578 6.37601 19.2492 6.40485 19.2727C7.19846 19.8642 7.49248 20.9326 7.67356 21.2371C8.81193 23.1087 11.458 22.3326 11.4833 22.3484C11.4851 22.512 11.465 23.8893 11.4492 24.9612C6.62457 23.6433 3.07468 19.2421 3.07468 14C3.07468 7.71749 8.1672 2.62507 14.4496 2.62507C20.732 2.62507 25.8246 7.71749 25.8246 14C25.8246 18.9026 22.7184 23.0666 18.3714 24.6653Z"
												fill="#2B414D"
											/>
										</svg>
									</Link>
								</div>
							</div>
							<div className="z-10">
								<p className="sub-heading-3">Hilda Mwangi</p>
								<p className="muted">Frontend Developer</p>
							</div>
						</div>

						<div className="flex items-center justify-center w-[20.5rem] flex-col border border-cyan-500 rounded-sm px-[3rem] py-[2rem] gap-[2rem]">
							<div className="relative">
								<div className="h-[8.75rem] w-[8.75rem] rounded-full bg-slate-500 relative">
									<Image
										alt="Team Member Image"
										src="/images/profiles/Florence.jpeg"
										width="200"
										height="200"
										className="rounded-full"
									/>
								</div>
								<div
									className="flex items-start justify-center gap-[0.75rem] py-[1.625rem] w-[6.2375rem] h-[6.2375rem] rounded-[6.25rem] bg-white dark:bg-black absolute top-[7.25rem] left-[1rem]
                ">
									<Link href="https://www.linkedin.com/in/florence-king-ori-779448309/">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 29 28"
											fill="none"
											className="hover:w-8 hover:h-7 transition-width transition-height duration-200">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M28.4497 28H22.6478V18.9051C22.6478 16.7361 22.6111 13.9461 19.6331 13.9461C16.6147 13.9461 16.1539 16.3099 16.1539 18.7495V28H10.358V9.297H15.9204V11.8543H15.9998C16.7737 10.3833 18.6661 8.83282 21.4888 8.83282C27.3641 8.83282 28.4497 12.7055 28.4497 17.7428V28ZM3.81646 6.74219C1.95215 6.74219 0.449707 5.23209 0.449707 3.37048C0.449707 1.5101 1.95215 0 3.81646 0C5.6722 0 7.17954 1.5101 7.17954 3.37048C7.17954 5.23209 5.6722 6.74219 3.81646 6.74219ZM6.71866 28H0.910587V9.297H6.71866V28Z"
												fill="#0077B5"
											/>
										</svg>
									</Link>
									<Link href="https://www.github.com/kingoriwangechi">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 29 28"
											fill="none"
											className="hover:w-8 hover:h-7 transition-width transition-height duration-200">
											<path
												d="M14.4497 0C6.71818 0 0.449707 6.26847 0.449707 14C0.449707 21.7324 6.71818 28 14.4497 28C22.1812 28 28.4497 21.7324 28.4497 14C28.4496 6.26847 22.1811 0 14.4497 0ZM18.3714 24.6653C18.2908 23.5698 18.2008 22.2127 18.1955 21.6632C18.1605 21.2414 18.1149 20.1687 17.0965 19.4836C21.1398 19.145 23.0639 16.9102 23.2023 13.9571C23.3178 12.2754 22.6492 10.7966 21.4619 9.60316C21.5223 8.32657 21.4234 6.81363 21.3412 6.14872C20.4295 5.88623 18.3032 7.00884 17.709 7.48922C16.456 7.00269 13.3892 6.83209 11.5254 7.48922C10.2041 6.55999 8.70006 5.98599 7.8802 6.14612C7.1233 7.82351 7.60983 9.40901 7.75766 9.59797C6.78287 10.4888 5.42314 11.5851 5.79241 13.882C6.38476 17.2498 8.75426 19.0664 12.5692 19.5108C11.7555 19.6771 11.6181 20.2843 11.5498 20.5477C8.98782 21.6047 8.25553 19.895 7.93172 19.4496C6.85639 18.1187 5.89121 18.5046 5.83172 18.5255C5.77395 18.5465 5.73022 18.6305 5.73637 18.6708C5.79058 18.9578 6.37601 19.2492 6.40485 19.2727C7.19846 19.8642 7.49248 20.9326 7.67356 21.2371C8.81193 23.1087 11.458 22.3326 11.4833 22.3484C11.4851 22.512 11.465 23.8893 11.4492 24.9612C6.62457 23.6433 3.07468 19.2421 3.07468 14C3.07468 7.71749 8.1672 2.62507 14.4496 2.62507C20.732 2.62507 25.8246 7.71749 25.8246 14C25.8246 18.9026 22.7184 23.0666 18.3714 24.6653Z"
												fill="#2B414D"
											/>
										</svg>
									</Link>
								</div>
							</div>
							<div className="z-10">
								<p className="sub-heading-3">
									Florence King'ori
								</p>
								<p className="muted">Frontend Developer</p>
							</div>
						</div>
						<div className="flex items-center justify-center w-[20.5rem] flex-col border border-cyan-500 rounded-sm px-[3rem] py-[2rem] gap-[2rem]">
							<div className="relative">
								<div className="h-[8.75rem] w-[8.75rem] rounded-full bg-slate-500 relative">
									<Image
										alt="Team Member Image"
										src="/images/profiles/Boni.jpeg"
										width="200"
										height="200"
										className="rounded-full"
									/>
								</div>
								<div
									className="flex items-start justify-center gap-[0.75rem] py-[1.625rem] w-[6.2375rem] h-[6.2375rem] rounded-[6.25rem] bg-white dark:bg-black absolute top-[7.25rem] left-[1rem]
                ">
									<Link href="https://www.linkedin.com/in/theuri-karue-260846242/">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 29 28"
											fill="none"
											className="hover:w-8 hover:h-7 transition-width transition-height duration-200">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M28.4497 28H22.6478V18.9051C22.6478 16.7361 22.6111 13.9461 19.6331 13.9461C16.6147 13.9461 16.1539 16.3099 16.1539 18.7495V28H10.358V9.297H15.9204V11.8543H15.9998C16.7737 10.3833 18.6661 8.83282 21.4888 8.83282C27.3641 8.83282 28.4497 12.7055 28.4497 17.7428V28ZM3.81646 6.74219C1.95215 6.74219 0.449707 5.23209 0.449707 3.37048C0.449707 1.5101 1.95215 0 3.81646 0C5.6722 0 7.17954 1.5101 7.17954 3.37048C7.17954 5.23209 5.6722 6.74219 3.81646 6.74219ZM6.71866 28H0.910587V9.297H6.71866V28Z"
												fill="#0077B5"
											/>
										</svg>
									</Link>
									<Link href="https://www.github.com/theurikarue">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 29 28"
											fill="none"
											className="hover:w-8 hover:h-7 transition-width transition-height duration-200">
											<path
												d="M14.4497 0C6.71818 0 0.449707 6.26847 0.449707 14C0.449707 21.7324 6.71818 28 14.4497 28C22.1812 28 28.4497 21.7324 28.4497 14C28.4496 6.26847 22.1811 0 14.4497 0ZM18.3714 24.6653C18.2908 23.5698 18.2008 22.2127 18.1955 21.6632C18.1605 21.2414 18.1149 20.1687 17.0965 19.4836C21.1398 19.145 23.0639 16.9102 23.2023 13.9571C23.3178 12.2754 22.6492 10.7966 21.4619 9.60316C21.5223 8.32657 21.4234 6.81363 21.3412 6.14872C20.4295 5.88623 18.3032 7.00884 17.709 7.48922C16.456 7.00269 13.3892 6.83209 11.5254 7.48922C10.2041 6.55999 8.70006 5.98599 7.8802 6.14612C7.1233 7.82351 7.60983 9.40901 7.75766 9.59797C6.78287 10.4888 5.42314 11.5851 5.79241 13.882C6.38476 17.2498 8.75426 19.0664 12.5692 19.5108C11.7555 19.6771 11.6181 20.2843 11.5498 20.5477C8.98782 21.6047 8.25553 19.895 7.93172 19.4496C6.85639 18.1187 5.89121 18.5046 5.83172 18.5255C5.77395 18.5465 5.73022 18.6305 5.73637 18.6708C5.79058 18.9578 6.37601 19.2492 6.40485 19.2727C7.19846 19.8642 7.49248 20.9326 7.67356 21.2371C8.81193 23.1087 11.458 22.3326 11.4833 22.3484C11.4851 22.512 11.465 23.8893 11.4492 24.9612C6.62457 23.6433 3.07468 19.2421 3.07468 14C3.07468 7.71749 8.1672 2.62507 14.4496 2.62507C20.732 2.62507 25.8246 7.71749 25.8246 14C25.8246 18.9026 22.7184 23.0666 18.3714 24.6653Z"
												fill="#2B414D"
											/>
										</svg>
									</Link>
								</div>
							</div>
							<div className="z-10">
								<p className="sub-heading-3">Bonface Theuri</p>
								<p className="muted">Backend Developer</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Element>
	);
};

export default Team;
