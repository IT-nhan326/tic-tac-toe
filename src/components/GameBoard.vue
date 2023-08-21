<template>
  <div class="board">
    <div class="row" v-for="rowIndex in 3" :key="rowIndex">
      <div class="block" v-for="colIndex in 3" :key="colIndex"></div>
    </div>
  </div>
</template>

<style scoped>
.board {
  width: 9rem; /* Width of the entire board */
  height: 9rem; /* Height of the entire board */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem; /* Gap between blocks */
  border: 1px solid #000;
  padding: 1rem;
}

.row {
  display: flex;
  justify-content: space-between;
}

.block {
  width: 2rem; /* Width of each block */
  height: 2rem; /* Height of each block */
  background-color: #eee;
  border: 1px solid #ccc;
}
</style>
