using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace algorithm
{
    class Problem_316
    {
        public string RemoveDuplicateLetters(string s) 
        {
            Console.WriteLine(s);

            List<int>[] alphaList = new List<int>[26];
            for(int i =0; i < 26; i++)
            {
                alphaList[i] = new List<int>();
            }

            List<char> sList = new List<char>();
            sList = s.ToList();
            int position = 0;
            foreach(char alphabet in sList)
            {
                int alphabetNumber = (int)alphabet - 97;
                alphaList[alphabetNumber].Add(position);
                position++;
            }

            int[] alphaResult = new int[26];
            return s;
        }
    }
}
