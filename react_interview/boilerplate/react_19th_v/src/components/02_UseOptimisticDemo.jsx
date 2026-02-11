/**
 * Feature #2: useOptimistic (React 19)
 *
 * - Optimistic UI updates while async request in progress
 * - Shows immediate feedback, reverts on failure
 * - Returns [optimisticState, addOptimistic]
 */
import { useOptimistic, useActionState } from "react";

async function likeAction(prevState, formData) {
  const action = formData.get("action");
  await new Promise((res) => setTimeout(res, 2000));

  // Simulate occasional failure
  if (Math.random() < 0.2) {
    return prevState; // Revert - request failed
  }

  return action === "like" ? prevState + 1 : prevState - 1;
}

export default function UseOptimisticDemo() {
  const [likes, formAction, isPending] = useActionState(likeAction, 10);
  const [optimisticLikes, addOptimisticLike] = useOptimistic(likes);

  const isOptimistic = optimisticLikes !== likes;

  return (
    <div>
      <h2>2. useOptimistic</h2>
      <p>Optimistic UI — shows instant feedback, reverts if API fails.</p>

      <div style={{ fontSize: "24px", margin: "10px 0" }}>
        ❤️ {optimisticLikes} likes
        {isOptimistic && <span style={{ color: "orange" }}> (updating...)</span>}
      </div>

      <form
        action={(formData) => {
          addOptimisticLike((prev) => prev + 1);
          formAction(formData);
        }}
      >
        <input type="hidden" name="action" value="like" />
        <button type="submit" disabled={isPending}>
          👍 Like
        </button>
      </form>

      <p style={{ color: "gray", fontSize: "12px" }}>
        Click Like — count updates instantly (optimistic). After 2s, server confirms.
        20% chance of failure (reverts back).
      </p>
    </div>
  );
}
