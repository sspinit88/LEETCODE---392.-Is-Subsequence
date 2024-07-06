/*
392. Is Subsequence

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) 
of the characters without disturbing the relative positions of the remaining characters. 
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

*/

/*

 This solution uses two pointers to traverse both strings. 
 It checks if the current character in s is the same as the current character in t. 
 If they are the same, it moves the pointer in s to the next character. 
 The function returns true if all characters in s are found in t in the correct order.

 В этом решении используются два указателя для обхода обеих строк.
 Он проверяет, совпадает ли текущий символ в s с текущим символом в t.
 Если они одинаковы, указатель в s перемещается на следующий символ.
 Функция возвращает true, если все символы в s найдены в t в правильном порядке.

*/

/**
 * Функция для проверки, является ли одна строка подпоследовательностью другой
 * Function to check if one string is a subsequence of another
 * @param {string} s - подпоследовательность / subsequence
 * @param {string} t - исходная строка / original string
 * @returns {boolean} - true, если s является подпоследовательностью t, иначе false / true if s is a subsequence of t, otherwise false
 */
 function isSubsequence(s, t) {
  let i = 0, j = 0;

  // Проходим по обеим строкам
  // Go through both strings
  while (i < s.length && j < t.length) {
      // Если текущие символы совпадают, переходим к следующему символу в s
      // If the current characters match, move to the next character in s
      if (s[i] === t[j]) {
          i++;
      }
      // В любом случае переходим к следующему символу в t
      // In any case, move to the next character in t
      j++;
  }

  // Если мы прошли по всей строке s, то s является подпоследовательностью t
  // If we have gone through the entire string s, then s is a subsequence of t
  return i === s.length;
}