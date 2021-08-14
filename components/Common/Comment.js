import React from "react";

const Comment = (props) => {
  return (
    <div className="comments-area">
      <div className="comment-respond">
        <h3 className="comment-reply-title">Bình luận</h3>

        <form className="comment-form">
          <p className="comment-form-comment">
            <label>Bình luận</label>
            <textarea name="comment" id="comment" rows="5"></textarea>
          </p>
          <p className="comment-form-author">
            <label>
              Tên bạn <span className="required">*</span>
            </label>
            <input type="text" id="author" name="author" />
          </p>
          <p className="comment-form-email">
            <label>
              Email <span className="required">*</span>
            </label>
            <input type="email" id="email" name="email" />
          </p>

          <p className="form-submit">
            <input
              type="submit"
              name="submit"
              id="submit"
              className="submit"
              value="Gủi"
            />
          </p>
        </form>
      </div>
    </div>
  );
};

export default Comment;
