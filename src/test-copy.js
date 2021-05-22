/*
 * Complete the 'getNumberOfOptions' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY priceOfJeans
 *  2. INTEGER_ARRAY priceOfShoes
 *  3. INTEGER_ARRAY priceOfSkirts
 *  4. INTEGER_ARRAY priceOfTops
 *  5. INTEGER budgeted
 */

/**
 *
 * @param {number[]} priceOfJeans
 * @param {number[]} priceOfShoes
 * @param {number[]} priceOfSkirts
 * @param {number[]} priceOfTops
 * @param {number} budgeted
 * @returns
 */
function getNumberOfOptions(
    priceOfJeans,
    priceOfShoes,
    priceOfSkirts,
    priceOfTops,
    budgeted
) {
    // Write your code here
    let numberOfOptions = 0;

    // Get rid of all values greater than or equal to dollar amount for just one item
    // which means if skirt costs as much as budget then shopper cannot buy other items so get rid of that price for skirt
    let cutAt = 0;
    let numberOfItemsRemove = 0;
    priceOfSkirts.sort();
    priceOfTops.sort();
    priceOfShoes.sort();
    priceOfJeans.sort();

    for (let i = 0; i < priceOfSkirts.length; i++) {
        if (priceOfSkirts[i] >= budgeted) {
            cutAt = i;
            numberOfItemsRemove = priceOfSkirts.length - (i + 1);
            break;
        }
    }
    priceOfSkirts.slice(cutAt + 1, numberOfItemsRemove);

    for (let i = 0; i < priceOfTops.length; i++) {
        if (priceOfTops[i] >= budgeted) {
            cutAt = i;
            numberOfItemsRemove = priceOfTops.length - (i + 1);
            break;
        }
    }
    priceOfTops.slice(cutAt + 1, numberOfItemsRemove);

    for (let i = 0; i < priceOfShoes.length; i++) {
        if (priceOfShoes[i] >= budgeted) {
            cutAt = i;
            numberOfItemsRemove = priceOfShoes.length - (i + 1);
            break;
        }
    }
    priceOfShoes.slice(cutAt + 1, numberOfItemsRemove);

    for (let i = 0; i < priceOfJeans.length; i++) {
        if (priceOfJeans[i] >= budgeted) {
            cutAt = i;
            numberOfItemsRemove = priceOfJeans.length - (i + 1);
            break;
        }
    }
    priceOfJeans.slice(cutAt + 1, numberOfItemsRemove);

    let memoizationCD = new Array();
    let memoizationBCD = new Array();

    // use memoization dictionary and only send data for prices that are less than budget
    for (let c = 0; c < priceOfTops.length; c++) {
        for (let d = 0; d < priceOfSkirts.length; d++) {
            if (priceOfTops[c] + priceOfSkirts[d] < budgeted) {
                memoizationCD["c" + c + "d" + d] = priceOfTops[c] + priceOfSkirts[d];
            } else {
                break;
            }
        }
    }

    // use memoization dictionary and only send data for prices that are less than budget
    for (var pair in memoizationCD) {
        for (let b = 0; b < priceOfShoes.length; b++) {
            if (pair.Value + priceOfShoes[b] < budgeted) {
                memoizationBCD["b" + b + pair.ToString()] = pair + priceOfShoes[b];
            } else {
                break;
            }
        }
    }

    // finally use memoization data to find out if 4 items fit into budget
    for (var pair in memoizationBCD) {
        for (let a = 0; a < priceOfJeans.length; a++) {
            if (pair + priceOfJeans[a] <= budgeted) {
                numberOfOptions++;
            } else {
                break;
            }
        }
    }

    return numberOfOptions;
}