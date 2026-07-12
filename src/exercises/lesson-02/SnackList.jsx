const snacks = [
  { name: 'Popcorn', rank: 4 },
  { name: 'Chips', rank: 3 },
  { name: 'Cookies', rank: 2 },
  { name: 'Chocolate', rank: 1 },
];

function SnackList() {
  {
    /* Sort snacks from favorite (rank 1) to least favorite */
  }
  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {sortedSnacks.map((snack) => (
        <li key={snack.name}>{snack.name}</li>
      ))}
    </ol>
  );
}

export default SnackList;
