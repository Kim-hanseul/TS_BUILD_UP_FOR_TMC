import { IArticle } from "@/types";
import React from "react"

type Props = {
    article:IArticle,
    deletePost : (id : number)=> void // 함수형객체
}
const Article : React.FC<Props> = ({article, deletePost}) => {
    
    return (
        <>
        <h1>게시글</h1>
        <h2>글 번호 : {article.artId}</h2>
        <h2>제목 : {article.title}</h2>
        <h2>내용 : {article.content}</h2>
        <button onClick={()=> deletePost(article.artId)}>삭제버튼</button>
        </>
    );
};

export default Article;