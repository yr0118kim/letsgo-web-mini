import * as c from "./style";
import { useState, useRef, useEffect } from "react";
import Commentimg from "../../assets/commentLogo.svg";
import SubmitComment from "../../assets/writingComment.svg";
import CommentFrame from "../common/Table/Comment";
import { useCreateComment } from "../../hooks/Comment/useComment";

const CommentContainer = () => {
  const commentCount: string = String(10);
  const { commentData, setCommentData, handleChange } = useCreateComment();

  const [isInputVisible, setInputVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickOutside = (e: any) => {
    if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
      setInputVisible(false);
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("dd");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleContainerClick = () => {
    setInputVisible(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit"></button>
      {/* <c.CommentFlex>
        <c.CommentTitle>
          댓글 <c.CommentCount>{commentCount}</c.CommentCount>
        </c.CommentTitle>
        <c.RefreshButton onClick={() => window.location.reload()}>
          새로고침
        </c.RefreshButton>
      </c.CommentFlex>
      <c.CommentInputWrap>
        <c.CommentInputContainer onClick={handleContainerClick}>
          <c.CommentInputWrap>
            <c.CommentInputIcon
              src={Commentimg}
              alt="error"
              style={{ width: "20px", height: "20px" }}
            />
            {isInputVisible ? (
              <input
                type="text"
                ref={inputRef}
                autoFocus
                name="content"
                value={commentData.content}
                onChange={handleChange}
              />
            ) : (
              <span>댓글을 달아주세요</span>
            )}
            <c.CommentButton type="submit">
              <c.CommentSubmit src={SubmitComment} alt="error" />
            </c.CommentButton>
          </c.CommentInputWrap>
        </c.CommentInputContainer>
      </c.CommentInputWrap>
      <CommentFrame /> */}
    </form>
  );
};

export default Comment;
