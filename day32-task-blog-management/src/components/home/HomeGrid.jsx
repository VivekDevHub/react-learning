import React from 'react';
import styles from '../../css/home/HomeGrid.module.css';
import Card from '../ui/Card';

const HomeGrid = () => {

    const articles = [
        {
            id: 1,
            tags: ["React", "JavaScript", "Web Development"],
            title: "Getting Started with React Hooks",
            description:
                "Learn how React Hooks can simplify your component logic and make your code more reusable.",
            author: "Sarah Chen",
            date: "January 15, 2024"
        },
        {
            id: 2,
            tags: ["Node.js", "API", "Backend"],
            title: "Building Scalable APIs with Node.js",
            description:
                "Explore best practices for creating robust and scalable REST APIs using Node.js and Express.",
            author: "Sarah Chen",
            date: "January 20, 2024"
        },
        {
            id: 3,
            tags: ["Programming", "Best Practices", "Software Engineering"],
            title: "The Art of Clean Code",
            description:
                "Discover the principles and practices that separate good code from great code.",
            author: "Marcus Johnson",
            date: "February 1, 2024"
        }
    ];

    return (
        <div className={styles.mainGrid}>
            {
                articles.map((elem) => {
                    return (
                        <Card article={elem} key={elem.id} />
                    )
                })
            }
        </div>
    )
}

export default HomeGrid