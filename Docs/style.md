# General

## Commit Style

We have a specific commit style.
This makes it easier to prepare a changelog.
It starts by the purpose of your commit in 3 capital letter, like add a features or fix a bug.
It followed by a description of your changes.

For example, committing to add a new file would be :

```
[ADD] docker-compose
```

## Documentation

For `.md` files, prefer a sentence-per-line format, don't wrap lines.
If the line is too long, you want to split the sentence in two

# Code

## Comment

Try to **always** comment what are you doing.
We should work as a team in this project and we are not you.
**always** comment _*outside*_ of a function.

A good comment should be clear and not a complete sentence.

#### GOOD
```
//function sending an alert via email
```
#### NOT GOOD
```
//function where an email is sent to the logged user that contains if...
```

## Function
Be clear when you name a function or a variable.
A function should only have one action.
Don't make a 100 lines function, it decreases the quality of code.

Try making reusable functions.
Alone we go fast, but together we go far!
And you will make everyone's life easier while you are coding.

If you are lost in the folders you may find your way there [./architecture.md](./architecture.md)