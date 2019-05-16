using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System;

namespace algorithm
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
            Problem_316 solution = new Problem_316();
            string testcase = "bcabc";
            solution.RemoveDuplicateLetters(testcase);
            */
            Problem_413 solution = new Problem_413();
            int[] testcase = new int[] {1, 2, 3, 4, 5  };
            solution.NumberOfArithmeticSlices(testcase);
        }
    }
}
