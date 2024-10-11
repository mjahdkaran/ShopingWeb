import React from 'react';

interface RatingProps {
    rating: number;  // امتیاز محصول
    count: number;   // تعداد رای‌ها
}

const Rating: React.FC<RatingProps> = ({ rating, count }) => {
    const filledStars = Math.floor(rating); // تعداد ستاره‌های پر شده
    const hasHalfStar = rating % 1 !== 0; // آیا ستاره نصفه وجود دارد؟
    const totalStars = 5; // تعداد کل ستاره‌ها

    return (
        <div>
            {Array.from({ length: totalStars }, (_, index) => {
                if (index < filledStars) {
                    return <i key={index} className="bi bi-star-fill" style={{ color: 'gold' }}></i>; // ستاره پر شده
                } else if (index === filledStars && hasHalfStar) {
                    return <i key={index} className="bi bi-star-half" style={{ color: 'gold' }}></i>; // ستاره نصفه
                } else {
                    return <i key={index} className="bi bi-star"></i>; // ستاره خالی
                }
            })}
            <span> ({count})</span> {/* نمایش تعداد رای‌ها */}
        </div>
    );
};

export default Rating;