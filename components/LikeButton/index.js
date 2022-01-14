import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import styles from "./LikeButton.module.css";
import { useEffect, useState } from "react";

export function LikeButton({ id }) {
  const [isLiked, setIsLiked] = useState(() => {
    const liked = localStorage.getItem(id);
    const likedJSON = JSON.parse(liked);
    return likedJSON || false;
  });

  useEffect(() => {
    localStorage.setItem(id, isLiked);
  }, [isLiked]);

  const alternateLike = () => setIsLiked((prevLiked) => !prevLiked);

  const likeIcon = isLiked ? faHeartSolid : faHeart;

  return (
    <div className={styles.like}>
      <button aria-label="like" onClick={alternateLike}>
        <FontAwesomeIcon icon={likeIcon} />
      </button>
    </div>
  );
}
