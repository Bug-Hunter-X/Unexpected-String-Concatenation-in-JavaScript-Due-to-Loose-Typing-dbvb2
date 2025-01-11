# Unexpected String Concatenation in JavaScript

This repository demonstrates a common yet subtle bug in JavaScript related to its loose typing system. The `foo` function intends to add two numbers, but due to the lack of explicit type checking, it unexpectedly concatenates a number and a string.

## Bug Description

The `bug.js` file contains a function that adds two arguments. However, if one of the arguments is a string, JavaScript performs string concatenation instead of numerical addition, leading to unexpected results.

## Solution

The `bugSolution.js` file provides a solution by adding explicit type checking to ensure both arguments are numbers before performing the addition.  This prevents the unintended string concatenation.

## How to reproduce the bug

1. Clone this repository.
2. Run `node bug.js` in your terminal. Observe the unexpected output.
3. Run `node bugSolution.js` to see the corrected behavior.
