"use client";
import Image from 'next/image';
import { useEffect } from 'react';
import { HashtagIcon, CheckBadgeIcon, CheckIcon, Square2StackIcon, UserIcon} from '@heroicons/react/24/outline';



export default function Page() {

    useEffect(() => {
        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-item');
        const indicators = document.querySelectorAll('.bottom-2 button, .bottom-4 button');
        const progressBar = document.querySelector('.progress-bar');
        let touchStartX = 0;
        let touchEndX = 0;
        const carousel = document.querySelector('.carousel-track');
        const prevButton = document.querySelector('.nav-button-left');
        const nextButton = document.querySelector('.nav-button-right');

        console.log('slides', slides.length);


        // Add touch events for swipe
        if (carousel) {
            carousel.addEventListener('touchstart', e => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            carousel.addEventListener('touchend', e => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });
        }

        if (prevButton) {
            prevButton.addEventListener('click', prevSlide);
        }

        if (nextButton) {
            nextButton.addEventListener('click', nextSlide);
        }


        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        }

        function updateSlides() {
            slides.forEach((slide, index) => {
                slide.className = 'carousel-item absolute top-0 left-0 w-full h-full';

                // Loop
                // if (index === currentSlide) {
                //     slide.classList.add('active');
                // } else if (index === (currentSlide + 1) % slides.length) {
                //     slide.classList.add('next');
                // } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
                //     slide.classList.add('prev');
                // } else {
                //     slide.classList.add('hidden');
                // }

                // No loop
                if (index === currentSlide) {
                    slide.classList.add('active');
                } else if (index === currentSlide + 1) {
                    slide.classList.add('next');
                } else if (index === currentSlide - 1) {
                    slide.classList.add('prev');
                } else {
                    slide.classList.add('hidden');
                }
            });

            // Hide buttons
            if (currentSlide === 0) {
                prevButton?.classList.add('hidden');
            } else {
                prevButton?.classList.remove('hidden');
            }

            if (currentSlide=== slides.length - 1) {
                nextButton?.classList.add('hidden');
            } else {
                nextButton?.classList.remove('hidden');
            }

            // Update indicators
            indicators.forEach((indicator, index) => {
                indicator.className = `w-8 sm:w-12 h-1 sm:h-1.5 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white/40' : 'bg-white/20'
                } hover:bg-white/60`;
            });

            // Update progress bar
            if (progressBar) {
                progressBar.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
            }
        }


        function nextSlide() {

            // loop
            // currentSlide = (currentSlide + 1) % slides.length;

            // No loop
            if (slides && currentSlide < slides.length - 1) {
                currentSlide = currentSlide + 1;
            }

            updateSlides();
        }

        function prevSlide() {
            // loop
            // console.log(currentSlide);
            // currentSlide = (currentSlide - 1 + slides.length) % slides.length;

            // No loop
            if (slides && currentSlide > 0) {
                currentSlide = currentSlide - 1;
            }
            updateSlides();
        }

        // Add click handlers to indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentSlide = index;
                updateSlides();
            });
        });

        // Initialize slides
        updateSlides();
    }
    , []);




    return (
        <div className="flex flex-col min-h-screen">

            {/* background */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/20 to-fuchsia-900/20"></div>
                <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-violet-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-fuchsia-500/10 rounded-full filter blur-3xl"></div>
            </div>

            <header className="my-10 flex items-center justify-between mx-6">
                <span className="text-3xl font-bold ">PACKS</span>
                <span className="text-lg float-right">1/4</span>
            </header>

            {/* <!-- Carousel container --> */}
            <div className="carousel-container relative" style={{ height: 'calc(100vh - 250px)' }}>
                {/* <!-- Progress bar --> */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 rounded-full overflow-hidden z-20">
                    <div className="progress-bar absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
                </div>

                {/* <!-- Navigation buttons --> */}
                <button className="nav-button nav-button-left absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white touch-manipulation" title="Previous slide">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>

                <button className="nav-button nav-button-right absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white touch-manipulation" title="Next slide">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>

                {/* <!-- Carousel track --> */}
                {/* <div className="carousel-track relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden"> */}
                <div className="carousel-track relative h-full overflow-hidden">

                    <div className="carousel-item active absolute top-0 left-0 w-full h-full">
                        <div className="w-full h-full p-4 sm:p-8">
                            <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group">
                                <Image
                                    src="https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&fit=crop&q=80"
                                    alt="Geometric art installation"
                                    fill
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/50 to-black/50 "></div>
                                <div className="absolute inset-x-0 p-4 sm:p-8 ">
                                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Common Words</h3>
                                    <p className="flex items-center my-2 text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">
                                        <span className="mr-2">
                                        <CheckBadgeIcon className="h-5 w-5" />
                                        </span>
                                        EASY
                                    </p>
                                    <p className="flex items-center my-2 text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">
                                        <span className="mr-2">
                                        <HashtagIcon className="h-5 w-5" />
                                        </span>
                                        25 WORDS
                                    </p>
                                </div>
                                {/* <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent"> */}
                                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 ">


                                    <div className="mt-auto flex  justify-between">

                                        <div className="text-center">
                                            <p className="text-xl sm:text-3xl md:text-5xl font-bold text-gray-200">22</p>
                                            <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">LEARNING WORDS</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xl sm:text-3xl md:text-5xl font-bold text-gray-200">3</p>
                                            <p className="text-sm text-gray-200">MASTERED WORDS</p>
                                        </div>
                                        <div className="text-center">
                                        <p className="flex justify-center text-gray-200">
                                            <CheckIcon className="h-7 w-7 sm:h-9 sm:w-9 md:h-12 md:w-12" />
                                        </p>
                                        <p className="text-sm text-gray-200">TEST AVAILABLE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item hidden absolute top-0 left-0 w-full h-full">
                        <div className="w-full h-full p-4 sm:p-8">
                                <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group">
                                <Image
                                    src="https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&fit=crop&q=80"
                                    alt="Geometric art installation"
                                    fill
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/50 to-black/50 "></div>
                                <div className="absolute inset-x-0 p-4 sm:p-8 ">
                                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">News Words</h3>
                                    <p className="flex items-center my-2 text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">
                                        <span className="mr-2">
                                        <CheckBadgeIcon className="h-5 w-5" />
                                        </span>
                                        HARD
                                    </p>
                                    <p className="flex items-center my-2 text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">
                                        <span className="mr-2">
                                        <HashtagIcon className="h-5 w-5" />
                                        </span>
                                        45 WORDS
                                    </p>
                                </div>
                                {/* <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent"> */}
                                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 ">


                                    <div className="mt-auto flex  justify-between">

                                        <div className="text-center">
                                            <p className="text-xl sm:text-3xl md:text-5xl font-bold text-gray-200">45</p>
                                            <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">LEARNING WORDS</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xl sm:text-3xl md:text-5xl font-bold text-gray-200">0</p>
                                            <p className="text-sm text-gray-200">MASTERED WORDS</p>
                                        </div>
                                        <div className="text-center">
                                        <p className="flex justify-center text-gray-200">
                                            <CheckIcon className="h-7 w-7 sm:h-9 sm:w-9 md:h-12 md:w-12" />
                                        </p>
                                        <p className="text-sm text-gray-200">TEST AVAILABLE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item hidden absolute top-0 left-0 w-full h-full">
                        <div className="w-full h-full p-4 sm:p-8">
                                <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group">
                                <Image
                                    src="https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&fit=crop&q=80"
                                    alt="Geometric art installation"
                                    fill
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/50 to-black/50 "></div>
                                <div className="absolute inset-x-0 p-4 sm:p-8 ">
                                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">The Friend Words</h3>
                                    <p className="flex items-center my-2 text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">
                                        <span className="mr-2">
                                        <CheckBadgeIcon className="h-5 w-5" />
                                        </span>
                                        MEDIUM
                                    </p>
                                    <p className="flex items-center my-2 text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">
                                        <span className="mr-2">
                                        <HashtagIcon className="h-5 w-5" />
                                        </span>
                                        35 WORDS
                                    </p>
                                </div>
                                {/* <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent"> */}
                                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 ">


                                    <div className="mt-auto flex  justify-between">

                                        <div className="text-center">
                                            <p className="text-xl sm:text-3xl md:text-5xl font-bold text-gray-200">35</p>
                                            <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">LEARNING WORDS</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xl sm:text-3xl md:text-5xl font-bold text-gray-200">0</p>
                                            <p className="text-sm text-gray-200">MASTERED WORDS</p>
                                        </div>
                                        <div className="text-center">
                                        <p className="flex justify-center text-gray-200">
                                            <CheckIcon className="h-7 w-7 sm:h-9 sm:w-9 md:h-12 md:w-12" />
                                        </p>
                                        <p className="text-sm text-gray-200">TEST AVAILABLE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item hidden absolute top-0 left-0 w-full h-full">
                        <div className="w-full h-full p-4 sm:p-8">
                                <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group">
                                <Image
                                    src="https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&fit=crop&q=80"
                                    alt="Futuristic tech setup"
                                        fill
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/40 to-pink-500/40 mix-blend-overlay"></div>
                                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Tech Haven</h3>
                                    <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">Immerse yourself in the cutting edge of technology and innovation.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item hidden absolute top-0 left-0 w-full h-full">
                        <div className="w-full h-full p-4 sm:p-8">
                                <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group">
                                <Image
                                        src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80"
                                        alt="Abstract digital art"
                                        fill
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/40 to-rose-500/40 mix-blend-overlay"></div>
                                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Neural Dreams</h3>
                                    <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">AI-generated masterpieces that blur the line between human and machine creativity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Indicators --> */}
                <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-20">
                    <button className="w-8 sm:w-12 h-1 sm:h-1.5 rounded-full bg-white/40 hover:bg-white/60 transition-colors" title="Go to slide 1"></button>
                    <button className="w-8 sm:w-12 h-1 sm:h-1.5 rounded-full bg-white/20 hover:bg-white/60 transition-colors" title="Go to slide 2"></button>
                    <button className="w-8 sm:w-12 h-1 sm:h-1.5 rounded-full bg-white/20 hover:bg-white/60 transition-colors" title="Go to slide 3"></button>
                </div>
            </div>


            <footer className="mt-auto flex justify-between font-bold  mt-12 p-8 pt-16">

                <div className="flex items-center ">
                <Square2StackIcon className="h-10 w-10" />
                PACKS
                </div>

                <div className="flex items-center">
                <UserIcon className="h-10 w-10" />
                YOU</div>
            </footer>


        </div>
      );
}
