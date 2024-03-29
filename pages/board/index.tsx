import AddPost from "@/components/board/AddPost"
import Article from "@/components/board/Article"
import { IArticle } from "@/types"
import { InferGetStaticPropsType } from "next"
import React, { useState } from "react"

export default function BoardPage({articles} : InferGetStaticPropsType<typeof getStaticProps>) {
    const [articleList, setArticles] = useState(articles)
    const addPost = async (e:React.FormEvent, formData: IArticle) => {
        e.preventDefault()
        const article: IArticle = {
            artId : Math.random(),
            title : formData.title,
            content : formData.content
        }
        setArticleList([article, ...articleList])
    }
    const deletePost = async (artId:number) => {
        // filter 사용해서 문제해결 한 문장
       const arr : IArticle[] = articleList.filter((article: IArticle) => {article.artId !== artId});
        setArticleList(arr)
    }

    if(!articleList) return <h1>Loading...</h1>

    return <>
    <AddPost write={(addPost)}/>
    {articleList.map((article : IArticle)=>(
        <Article key={article.artId} deletePost={deletePost} article={article}/>
    ))}
    </>
}

export async function getStaticProps() {
    const res = await fetch(BASE_URL)
    const articles: IArticle[] = await res.json()
    return {props: {articles}}
    
}

const BASE_URL: string = "http://localhost:8080/articles"

function setArticleList(arg0: IArticle[]) {
    throw new Error("Function not implemented.")
}

