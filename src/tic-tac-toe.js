class TicTacToe {
    constructor() {
        this.Xturn = true;
        this.matrix = [null, null, null, null, null, null, null, null, null];
    }

    getCurrentPlayerSymbol() {
        return (this.Xturn) ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.getFieldValue(rowIndex, columnIndex) != null) return;
        this.matrix[rowIndex * 3 + columnIndex] = this.getCurrentPlayerSymbol();
        this.Xturn = !this.Xturn;
    }
    checkState(type) {
        if (this.matrix[0] == type && this.matrix[1] == type && this.matrix[2] == type) { return true; }
        if (this.matrix[3] == type && this.matrix[4] == type && this.matrix[5] == type) { return true; }
        if (this.matrix[6] == type && this.matrix[7] == type && this.matrix[8] == type) { return true; }

        if (this.matrix[0] == type && this.matrix[3] == type && this.matrix[6] == type) { return true; }
        if (this.matrix[1] == type && this.matrix[4] == type && this.matrix[7] == type) { return true; }
        if (this.matrix[2] == type && this.matrix[5] == type && this.matrix[8] == type) { return true; }

        if (this.matrix[0] == type && this.matrix[4] == type && this.matrix[8] == type) { return true; }
        if (this.matrix[2] == type && this.matrix[4] == type && this.matrix[6] == type) { return true; }
    }

    isFinished() {
        if (this.checkState('x') || this.checkState('o') || this.noMoreTurns()) return true;
        return false;
    }

    getWinner() {
        if (this.checkState('x')) return 'x';
        if (this.checkState('o')) return 'o';
        return null;
    }

    noMoreTurns() {
        if (this.matrix.indexOf(null) == -1) return true;
        return false;
    }

    isDraw() {
        if (!this.noMoreTurns()) return false;
        if (this.getWinner()) return false;
        return true;
        //should return false if game is not finished or there is a winner, and true if it is a draw
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[3 * rowIndex + colIndex];
    }
}

module.exports = TicTacToe;