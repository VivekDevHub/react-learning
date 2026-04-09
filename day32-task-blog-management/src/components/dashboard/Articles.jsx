import React from 'react';
import styles from '../../css/dashboard/Articles.module.css';
import { useNavigate } from 'react-router';

const Articles = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.mainDiv}>
            <h3 className={styles.head}>Your Articles</h3>

            <div className={styles.noArticles}>
                <i className={`ri-file-text-line ${styles.icon}`}></i>
                <h4 className={styles.headTxt}>No articles yet</h4>
                <p className={styles.subTxt}>
                    Start writing your first article
                </p>
                <button className={styles.button}><i class="ri-add-line" onClick={() => navigate("/dashboard/new")}></i> Create Article</button>
            </div>
        </div>
    )
}

export default Articles