import React from 'react';
import styles from '../../css/home/HomeGrid.module.css';
import Card from '../ui/Card';
import { useArticles } from '../../context/ArticleContext';

const HomeGrid = () => {
    const { articles } = useArticles();
    const publishedArticles = articles.filter((article) => article.type == "publish");

    return (
        <div className={styles.mainGrid}>
            {
                publishedArticles.map((elem) => {
                    return (
                        <Card article={elem} key={elem.id} />
                    )
                })
            }
        </div>
    )
}

export default HomeGrid