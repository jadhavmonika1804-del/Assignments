let prices: number[] = [7, 1, 5, 3, 6, 4];

let minPrice = prices[0];
let maxProfit = 0;

let buyDay = 0;
let sellDay = 0;
let tempBuyDay = 0;

for (let i = 1; i < prices.length; i++) {

    // Update min price (buy)
    if (prices[i] < minPrice) {
        minPrice = prices[i];
        tempBuyDay = i; // potential buy day
    }

    let profit = prices[i] - minPrice;

    // Update max profit and actual buy/sell days
    if (profit > maxProfit) {
        maxProfit = profit;
        buyDay = tempBuyDay;
        sellDay = i;
    }
}

// Print result
if (maxProfit > 0) {
    console.log("Max Profit is " + maxProfit);
    console.log("Buy the share on day " + (buyDay + 1));
    console.log("Sell the share on day " + (sellDay + 1));
} else {
    console.log("You will lose your money, don't buy this share");
}