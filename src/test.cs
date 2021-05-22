  public static long NumberOfOptionsMemo(List<int> priceOfJeans, List<int> priceOfShoes,  List<int> priceOfSkirts, List<int> priceOfTops, int budgeted)
        {
            long numberOfOptions = 0;

            // Get rid of all values greater than or equal to dollar amount for just one item
            // which means if skirt costs as much as budget then shopper cannot buy other items so get rid of that price for skirt
            int cutAt = 0;
            int numberOfItemsRemove = 0;
            priceOfSkirts.Sort();
            priceOfTops.Sort();
            priceOfShoes.Sort();
            priceOfJeans.Sort();

            for (int i = 0; i < priceOfSkirts.Count; i++)
            {
                if (priceOfSkirts[i] >= budgeted)
                {
                    cutAt = i;
                    numberOfItemsRemove = priceOfSkirts.Count - (i + 1);
                    break;
                }
            }
            priceOfSkirts.RemoveRange(cutAt + 1, numberOfItemsRemove);

            for (int i = 0; i < priceOfTops.Count; i++)
            {
                if (priceOfTops[i] >= budgeted)
                {
                    cutAt = i;
                    numberOfItemsRemove = priceOfTops.Count - (i + 1);
                    break;
                }
            }
            priceOfTops.RemoveRange(cutAt + 1, numberOfItemsRemove);

            for (int i = 0; i < priceOfShoes.Count; i++)
            {
                if (priceOfShoes[i] >= budgeted)
                {
                    cutAt = i;
                    numberOfItemsRemove = priceOfShoes.Count - (i + 1);
                    break;
                }
            }
            priceOfShoes.RemoveRange(cutAt + 1, numberOfItemsRemove);

            for (int i = 0; i < priceOfJeans.Count; i++)
            {
                if (priceOfJeans[i] >= budgeted)
                {
                    cutAt = i;
                    numberOfItemsRemove = priceOfJeans.Count - (i + 1);
                    break;
                }
            }
            priceOfJeans.RemoveRange(cutAt + 1, numberOfItemsRemove);


            Dictionary<string, int> memoizationCD = new Dictionary<string, int>();
            Dictionary<string, int> memoizationBCD = new Dictionary<string, int>();

            // use memoization dictionary and only send data for prices that are less than budget
            for (int c = 0; c < priceOfTops.Count; c++)
            {
                for (int d = 0; d < priceOfSkirts.Count; d++)
                {
                    if (priceOfTops[c] + priceOfSkirts[d] < budgeted)
                    {
                        memoizationCD["c" + c + "d" + d] = priceOfTops[c] + priceOfSkirts[d];
                    }
                    else
                    {
                        break;
                    }
                }
            }


            // use memoization dictionary and only send data for prices that are less than budget
            foreach (var pair in memoizationCD)
            {
                for (int b = 0; b < priceOfShoes.Count; b++)
                {
                    if (pair.Value + priceOfShoes[b] < budgeted)
                    {
                        memoizationBCD["b" + b + pair.Key.ToString()] = pair.Value + priceOfShoes[b];
                    }
                    else
                    {
                        break;
                    }
                }
            }

            // finally use memoization data to find out if 4 items fit into budget
            foreach (var pair in memoizationBCD)
            {
                for (int a = 0; a < priceOfJeans.Count; a++)
                {
                    if (pair.Value + priceOfJeans[a] <= budgeted)
                    {
                        numberOfOptions++;
                    }
                    else
                    {
                        break;
                    }
                }

            }


            return numberOfOptions;

        }
    