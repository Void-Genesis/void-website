import React from 'react';

interface TestimonialCardProps {
    name: string;
    image: string;
    rating: string;
    testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, image, rating, testimonial }) => {
    return (
        <div className="flex flex-col">
            <div className="p-5 bg-void-grey-300 border border-void-grey-800 rounded">
                <div className="pt-6 pb-7 px-[10px] text-center">
                    <div className="flex flex-row items-center justify-between mb-5">
                        <img className="w-8" src={image} alt={name} />
                        <h1 className="text-base font-black">{name}</h1>
                        <img className="h-[10px]" src={rating} alt="Rating" />
                    </div>
                    <p className="mt-3 text-base leading-[120%] tracking-[0.16px] font-normal text-left">{testimonial}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
