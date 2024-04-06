import React, { useState } from "react";
import * as d from "./style";
import Like from "../../../assets/postLike.svg";
import More from "../../../assets/more.svg";
import PostImage from "../../../assets/postImg.svg";
import { useLikePostMutation } from "../../../hooks/Post/useLikePost";
import CommentFrame from "../Table/Comment";

const Post: React.FC = () => {
  const { mutate } = useLikePostMutation();
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = (postId: number) => {
    mutate(postId);
    setLikeCount((prevCount) => prevCount + 1);
  };

  return (
    <d.PostContainer>
      <d.PostWrap>
        <d.PostTopWrap>
          <d.PostTitle>홍대에서 페이커만남 ㄹㅇ.jpg</d.PostTitle>
          <d.PostSubTitleWrap>
            <div
              style={{
                display: "flex",
                marginTop: "1%",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div>
                <d.PostLeftSubTitle>게임</d.PostLeftSubTitle>
                <d.PostLeftSubTitle>1일전</d.PostLeftSubTitle>
                <d.PostLeftSubTitle>
                  대구소프트웨어마이스터고 3학년 여학생
                </d.PostLeftSubTitle>
              </div>
              <div>
                <d.PostRightSubTitle>조회수</d.PostRightSubTitle>
                <d.PostRightSubTitle>댓글</d.PostRightSubTitle>
                <d.PostRightSubTitle onClick={() => handleLikeClick(123)}>
                  좋아요
                </d.PostRightSubTitle>
              </div>
            </div>
          </d.PostSubTitleWrap>
        </d.PostTopWrap>
        <d.PostMidContainer>
          <d.PostMidWrap>
            <img src={PostImage} alt="post" />
          </d.PostMidWrap>
          <d.PostHeading>응 상시숭배야</d.PostHeading>
          <d.PostTagContainer style={{ marginBottom: "2%" }}>
            <d.PostTagHeading>#태그</d.PostTagHeading>
            <d.PostTagHeading>#태그</d.PostTagHeading>
            <d.PostTagHeading>#태그</d.PostTagHeading>
            <d.PostTagHeading>#태그</d.PostTagHeading>
          </d.PostTagContainer>
        </d.PostMidContainer>
        <d.PostBottomContainer>
          <d.PostLike onClick={() => handleLikeClick(123)}>
            <d.PostLikeImg src={Like} alt="좋아요" />
            <d.PostLikeCount>{likeCount}</d.PostLikeCount>
          </d.PostLike>
          <d.PostMore>
            <d.PostMoreLikeImg src={More} alt="더보기" />
          </d.PostMore>
        </d.PostBottomContainer>
      </d.PostWrap>
      <CommentFrame />
    </d.PostContainer>
  );
};

export default Post;
