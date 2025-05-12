import { useEffect, useState } from "react";


export const StarBackground = () => {
    const [stars, setStars] = useState();

    useEffect(() => {
        generateStars();
    },[]);
    const generateStars = () => {
        const numberOfStars =math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );
        const newStar = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStar.push({
                id:i,
                y: Math.random() * 3+1,
                x: Math.random() * 100,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setStars(newStar);
        

    }
    return( <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 ">
        {stars.map((star) => (
            <div key={star.id} className="star-animate-pulse-subtle" style={{
                width: star.size + 'px',
                height: star.size + 'px',
                left: star.x + '%',
                top:  star.y + '%',
                opacity: star.size + '%',
                animationDuration: star.animationDuration + 's',
            }}/>
        ))}
         </div>
         );
}