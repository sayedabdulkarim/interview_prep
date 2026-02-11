/**
 * Feature #1: useActionState (React 19)
 *
 * - Form action state management
 * - Returns [state, formAction, isPending]
 * - Replaces old useFormState from ReactDOM
 * - Handles async actions, pending states, errors automatically
 */
import { useActionState } from "react";

async function addToCart(prevState, formData) {
  const item = formData.get("item");

  // Simulate API call
  await new Promise((res) => setTimeout(res, 1500));

  // Simulate random failure
  if (Math.random() < 0.3) {
    return { success: false, message: `Failed to add "${item}". Try again.`, items: prevState.items };
  }

  return {
    success: true,
    message: `"${item}" added to cart!`,
    items: [...prevState.items, item],
  };
}

export default function UseActionStateDemo() {
  const [state, formAction, isPending] = useActionState(addToCart, {
    success: null,
    message: "",
    items: [],
  });

  return (
    <div>
      <h2>1. useActionState</h2>
      <p>Form action state management — handles async, pending, errors automatically.</p>

      <form action={formAction}>
        <input name="item" placeholder="Enter item name" required />
        <button type="submit" disabled={isPending}>
          {isPending ? "Adding..." : "Add to Cart"}
        </button>
      </form>

      {state.message && (
        <p style={{ color: state.success ? "green" : "red" }}>{state.message}</p>
      )}

      {state.items.length > 0 && (
        <div>
          <h4>Cart Items:</h4>
          <ul>
            {state.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
