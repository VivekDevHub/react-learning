import React, { useEffect, useRef, useState } from 'react';
import styles from '../../css/newDashboard/Form.module.css';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import InputText from '../ui/InputText';
import { useArticles } from '../../context/ArticleContext';
import { useAuth } from '../../context/AuthContext';
import { nanoid } from 'nanoid';
import { save } from '../../utils/localStorage';
import InputFeild from '../ui/InputField';

const Form = ({ article }) => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const { setArticles, articles } = useArticles();
    const [tags, setTags] = useState([]);
    const { user } = useAuth();
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const value = e.target.value.trim();

            if (!value) return;
            if (tags.includes(value)) return;
            if (tags.length >= 5) return;

            setTags([...tags, value]);
            setValue("tags", [...tags, value]);

            e.target.value = "";

        }
    }

    useEffect(() => {
        if (article) {
            setValue("title", article.title);
            setValue("desc", article.desc);
            setValue("content", article.content);
            setValue("tags", article.tags);
            setTags(article.tags);
        }
    }, [])

    const removeEle = (idx) => {
        const updated = tags.filter((_, i) => i != idx);
        setValue("tags", updated);
        setTags(updated);
    }

    const todayDate = () => {
        const today = new Date();
        const day = today.getDate();
        const year = today.getFullYear();
        const month = today.toLocaleString("en-us", { month: "long" })
        const sufix = () => {
            if (day > 3 && day < 21) return "th";
            switch (day % 10) {
                case 1: return "st";
                case 2: return "nd";
                case 3: return "rd";
                default: return "th";
            }
        }

        return `${day}${sufix()}, ${month}, ${year}`;
    }

    const submitHandler = (data, e) => {

        if (article) {
            const updatedArticle = {
                ...date,
                ...article,
                type: e?.navtiveEvent?.submitter?.name == "save" ? "draft" : "publish",
                date: todayDate()
            }
            if (e?.navtiveEvent?.submitter?.name == "save") {
                const updatedArray = articles.map((a) => {
                    a.id == article.id ? updatedArticle : a
                })
                setArticles(updatedArray);
            } else {
                const updatedArray = articles.map((a) => {
                    a.id == article.id ? updatedArticle : a
                })
                setArticles(updatedArray);
                
                // setArticles(prev => prev.map((a) => {
                //     a.id == article.id ? updatedArticle : a
                // }));
                // setArticles(prev => [...prev, { ...data, ...article, type: "publish", date: todayDate() }]);
            }

            navigate("/dashboard");
            return;
        }


        if (e?.navtiveEvent?.submitter?.name == "save") {
            setArticles(prev => [...prev, { ...data, type: "draft", date: todayDate(), author: user.name, email: user.email, id: nanoid() }]);
            save('articles', [...articles, { ...data, type: "draft", date: todayDate(), author: user.name, email: user.email, id: nanoid() }])
        } else {
            setArticles(prev => [...prev, { ...data, type: "publish", date: todayDate(), author: user.name, email: user.email, id: nanoid() }]);
            save('articles', [...articles, { ...data, type: "publish", date: todayDate(), author: user.name, email: user.email, id: nanoid() }])
        }
        navigate("/dashboard");
    }

    return (
        <>
            <p onClick={() => navigate("/dashboard")} className={styles.back}><i className="ri-arrow-left-long-line"></i> Back to Dashboard</p>
            <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
                <h4 className={styles.head}>Create new Article</h4>
                <InputFeild label={"title"} placeHolder={'Enter a Compelling title...'} type={"text"} error={errors?.title?.message} {...register("title", { required: "Title is required" })} />
                <InputText label={"excerpt"} placeHolder={"Write a breif summary of your article..."} error={errors?.desc?.message} add='A short description that appears on the blog listing' {...register("desc", { required: "Excerpt is required" })} />
                <InputText label={"content"} placeHolder={"Write your article content here... (Markdown Supported)"} error={errors?.content?.message} add='Supports Markdown: ## for headers, **bold**, *italic*, `code`, etc.' {...register("content", { required: "Excerpt is required" })} />
                <div className={styles.inputBox}>
                    <label htmlFor="tags" className={styles.label}>Tags</label>
                    <div>
                        {
                            tags.map((tag, idx) => {
                                return (
                                    <span className={styles.tag} key={idx}>
                                        {tag} <i className="ri-close-line" onClick={() => removeEle(idx)}></i>
                                    </span>
                                )
                            })
                        }
                    </div>
                    <input type="text" placeholder='Add Tags (press enter to add' className={styles.input} onKeyDown={handleKeyDown} />
                    <p className={styles.add}>Add up to 5 tags to help readers find your article</p>
                </div>

                <div className={styles.buttons}>
                    <button className={styles.draft} type='submit' name='save'><i className="ri-file-text-line"></i> Save Draft</button>
                    <button className={styles.publish} type='submit' name='publish'><i className="ri-send-plane-fill"></i> Publish</button>
                </div>
            </form>
        </>
    )
}

export default Form