import { createContext, useContext, useState } from "react";
import { load } from "../utils/localStorage";

const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {

    const [articles, setArticles] = useState(load("articles"));

    const items = {
        articles,
        setArticles
    }

    return (
        <ArticleContext.Provider value={items}>
            {children}
        </ArticleContext.Provider>
    )
};


export const useArticles = () => useContext(ArticleContext);