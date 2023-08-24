<template>
  <div>
    <div class="game-board">
      <GameBlock
        v-for="(cell, index) in board.flat()"
        :key="index"
        :mark="cell"
        :current-player="currentPlayer"
        @blockClicked="markBlock(Math.floor(index / 3), index % 3)"
      />
    </div>
    <ResultModal v-if="winner" :result="winner" @reset="resetGame" />
  </div>
</template>

<script>
import GameBlock from "./GameBlock.vue";
import ResultModal from "./ResultModal.vue";

export default {
  data() {
    return {
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      currentPlayer: "X",
      turn: 0,
      winner: null,
    };
  },
  methods: {
    markBlock(rowIndex, colIndex) {
      if (this.board[rowIndex][colIndex] === "") {
        this.turn++;
        this.board[rowIndex][colIndex] = this.currentPlayer;

        if (this.checkWinner()) {
          this.winner = this.currentPlayer;
        } else if (this.board.flat().every((cell) => cell !== "")) {
          this.winner = "tie";
        } else {
          this.currentPlayer = this.turn % 2 === 0 ? "X" : "O";
        }
      }
    },
    checkWinner() {
      const winningCombinations = [
        // Rows
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        // Columns
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        // Diagonals
        [0, 4, 8],
        [2, 4, 6],
      ];

      const flatBoard = this.board.flat();

      for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (
          flatBoard[a] &&
          flatBoard[a] === flatBoard[b] &&
          flatBoard[a] === flatBoard[c]
        ) {
          return true;
        }
      }

      return false;
    },
    resetGame() {
      this.board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
      this.currentPlayer = "X";
      this.winner = null;
    },
  },
  components: {
    GameBlock,
    ResultModal,
  },
};
</script>

<style lang="scss" scoped>
.game-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
.game-row {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 1rem;
}
</style>
