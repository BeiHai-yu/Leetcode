// 数组划分两个相等区域


function canPartition(nums) {
    let sum = nums.reduce((pre, cur)=> pre+cur);
    if (sum % 2 != 0) {
        return false;
    }
    let w = sum / 2, n = nums.length;
    let dp = new Array(n+1).fill().map(item=> new Array(w+1)).fill(false);
    dp[0][0] = true;
    for (let i = 1; i <= n; i++) {
        let num = nums[i-1];        // 0-1 背包一个物品只能用一次
        for (let j = 1; j <= W; j++) { 
            if(j >= num)// 从后往前，先计算 dp[i] 再计算 dp[i-num]
                dp[i][j] = dp[i-1][j] || dp[i - 1][j - num];
            else
                dp[i][j] = dp[i-1][j];
        }
    }
    return dp[n][W];
}