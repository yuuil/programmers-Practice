function solution(board) {
    let dp = [], ans = 0;
    let r = board.length, c = board[0].length;
    for(let i=0; i<r; i++) {
        dp[i] = [];
        for(let j=0; j<c; j++) {
            dp[i].push(0);
        }
    }
    for(let i=0; i<r; i++) {
        dp[i][0] = board[i][0];
        ans = Math.max(ans, dp[i][0]);
    }
    for(let i=0; i<c; i++) {
        dp[0][i] = board[0][i];
        ans = Math.max(ans, dp[0][i]);
    }
    for(let i=1; i<r; i++) {
        for(let j=1; j<c; j++) {
            if(board[i][j]) {
                dp[i][j] = Math.min(Math.min(dp[i][j-1], dp[i-1][j]), dp[i-1][j-1]) + 1;
                ans = Math.max(ans, dp[i][j]);
            }
        }
    }
    return ans*ans;
}