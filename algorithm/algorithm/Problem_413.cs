using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace algorithm
{
    class Problem_413
    {
        public int NumberOfArithmeticSlices(int[] A)
        {
            print(A);
            //Console.WriteLine(A.Length);

            int subsetCount = 0;

            for (int i = 0; i < A.Length - 2; i++)
            {
                int defaultGap = A[i+1] - A[i];
                int gapSubset = 0;
                int currentPrenumber = A[i+1];
                for (int k = i + 2; k < A.Length; k++)
                {
                    int currentGap = A[k] - currentPrenumber;
                    if (currentGap == defaultGap)
                    {
                        //Console.WriteLine(i + "/" + (i+1) + "/" + k);
                        subsetCount++;
                        gapSubset++;
                        currentPrenumber = A[k];
                    }
                    else if (currentGap != defaultGap)
                    {
                        break;
                    }
                }
            }
            Console.WriteLine(subsetCount);
            return subsetCount;
        }

        public void print(int[] nums)
        {
            foreach (var item in nums)
            {
                Console.Write(item.ToString() + " ");
            }
            Console.WriteLine();
        }
    }
}
