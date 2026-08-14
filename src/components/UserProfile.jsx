//components/UserProfile.jsx

/*
    ### 1. Extract Reusable Components
    - Refactor `StudentWork.jsx` to extract reusable UI into separate components.
    - You must extract:
    - A user profile section
    - A task filter button group
    - A single task item
    - Each extracted component must:
    - Receive data via props
    - Contain no unnecessary state
    - Be reusable and presentation-focused

    ### Exercise #1
    - Reusable UI is extracted into separate components
    - Components receive data via props
    - No unnecessary state is introduced

*/
export default function UserProfile({ name }) {
  return <h2>Welcome, {name}</h2>;
}
