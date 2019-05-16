using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace algorithm
{
    class Problem_416
    {
            public bool CanPartition(int[] nums)
            {
                print(nums);

                Array.Sort(nums);

                print(nums);

                int Total = CalculateTotal(nums);
                int findNumber = 0;
                if (Total % 2 != 0)
                {
                    Console.WriteLine("False");
                    return false;
                }
                else
                {
                    findNumber = Total / 2;
                }

                if (FindNumber(nums, findNumber))
                {
                    Console.WriteLine("Ture");
                    return true;
                }
                Console.WriteLine("False");
                return false;
            }

            public int CalculateTotal(int[] nums)
            {
                int total = 0;
                foreach (int num in nums)
                {
                    total += num;
                }
                return total;
            }

            public bool FindNumber(int[] nums, int findNumber)
            {
                bool[] sumNumbercheck = new bool[20005];
                List<int> sumNumbers = new List<int>();
                foreach (int newNumber in nums)
                {
                    List<int> copySumnumbers = sumNumbers.ToList();
                    foreach (int subNumber in copySumnumbers)
                    {
                        int newSubnumber = subNumber + newNumber;
                        if (!sumNumbercheck[newSubnumber]) //new subset
                        {
                            sumNumbercheck[newSubnumber] = true;
                            sumNumbers.Add(newSubnumber);
                        }
                        if (sumNumbercheck[findNumber]) //find findNumber
                        {
                            return true;
                        }
                    }
                    if (!sumNumbercheck[newNumber]) //new subset
                    {
                        sumNumbercheck[newNumber] = true;
                        sumNumbers.Add(newNumber);
                    }
                    if (sumNumbercheck[findNumber]) //find findNumber
                    {
                        return true;
                    }
                }
                return false;
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
