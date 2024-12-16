import React, { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([]); // 댓글 목록
  const [newComment, setNewComment] = useState(""); // 새 댓글 내용
  const [showComments, setShowComments] = useState(false); // 댓글 표시 여부
  const [editIndex, setEditIndex] = useState(null); // 수정 중인 댓글 인덱스
  const [editText, setEditText] = useState(""); // 수정 중인 댓글 내용

  // 댓글 추가
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { text: newComment, likes: 0 }]); 
      setNewComment("");
    }
  };

  // 댓글 표시/숨기기 토글
  const toggleComments = () => {
    setShowComments(!showComments);
  };

  // 댓글 수정 모드 활성화
  const handleEditComment = (index) => {
    setEditIndex(index);
    setEditText(comments[index].text);
  };

  // 댓글 수정 저장
  const handleSaveEdit = () => {
    if (editText.trim()) {
      const updatedComments = [...comments];
      updatedComments[editIndex].text = editText;
      setComments(updatedComments);
      setEditIndex(null);
      setEditText("");
    }
  };

  // 댓글 삭제
  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  // 좋아요 증가
  const handleLike = (index) => {
    setComments((prevComments) => {
      const updatedComments = [...prevComments];
      updatedComments[index] = {
        ...updatedComments[index],
        likes: (updatedComments[index].likes || 0) + 1,
      };
      return updatedComments;
    });
  };

  return (
    <div>
      <button onClick={toggleComments} className="commentToggleBtn">
        {showComments ? "댓글 숨기기" : "댓글 보기"}
      </button>
      {showComments && (
        <div>
          <ul className="commentList">
            {comments.map((comment, index) => (
              <li key={index}>
                <div>
                  {editIndex === index ? (
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                  ) : (
                    <span>{comment.text}</span>
                  )}
                </div>
                <div>
                  {editIndex === index ? (
                    <button className="commentSaveBtn" onClick={handleSaveEdit}>
                      저장
                    </button>
                  ) : (
                    <button
                      className="editBtn"
                      onClick={() => handleEditComment(index)}
                    >
                      수정
                    </button>
                  )}
                  <button
                    className="deleteBtn"
                    onClick={() => handleDeleteComment(index)}
                  >
                    삭제
                  </button>
                  <button
                    className="commentLikeBtn"
                    onClick={() => handleLike(index)} // index 전달
                  >
                    👍 조아요 {comment.likes || 0} {/* 기본값 0 처리 */}
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="reple">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="댓글을 입력하세요"
            />
            <button className="commentAddBtn" onClick={handleAddComment}>
              댓글 추가
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentSection;